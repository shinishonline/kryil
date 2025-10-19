// src/components/NetworkBackground.jsx
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Robust NetworkBackground
 * - Prioritizes explicit app theme signals (class, attribute, CSS var, localStorage) over OS preference.
 * - Draws white background in light mode; uses computed `bg-darkBg` (or --bg-darkBg) in dark mode.
 * - Uses the project's emerald colors (reads computed styles for emerald-500/700) when in dark mode.
 * - Listens to class changes, prefers-color-scheme changes, storage events, and a custom `themechange` event.
 */

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const nodesRef = useRef([]);
  const containerRef = useRef(null);
  const [container, setContainer] = useState(null);

  // helpers
  function createEphemeralElementAndRead(cls, preferBg = false) {
    try {
      const el = document.createElement("div");
      Object.assign(el.style, {
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: "1px",
        height: "1px",
        pointerEvents: "none",
        opacity: "0",
      });
      el.className = cls;
      document.body.appendChild(el);
      const cs = getComputedStyle(el);
      const value = preferBg ? cs.backgroundColor || cs.color : cs.color || cs.backgroundColor;
      document.body.removeChild(el);
      return value || null;
    } catch (e) {
      return null;
    }
  }

  function getCssVar(name) {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || null;
    } catch (e) {
      return null;
    }
  }

  function parseRgbOrHexToRgba(str, alpha = 1) {
    if (!str) return null;
    str = str.trim();
    const rgbMatch = str.match(/rgba?\(([^)]+)\)/);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(",").map((p) => p.trim());
      const r = parseInt(parts[0], 10) || 0;
      const g = parseInt(parts[1], 10) || 0;
      const b = parseInt(parts[2], 10) || 0;
      const baseAlpha = parts[3] !== undefined ? parseFloat(parts[3]) : 1;
      const finalAlpha = Math.min(1, Math.max(0, baseAlpha * alpha));
      return `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
    }
    const hex = str.replace("#", "");
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return null;
  }

  // Create or reuse portal container
  useEffect(() => {
    let el = document.getElementById("network-bg-root");
    let created = false;
    if (!el) {
      el = document.createElement("div");
      el.id = "network-bg-root";
      Object.assign(el.style, {
        position: "fixed",
        inset: "0",
        zIndex: "0",
        pointerEvents: "none",
        overflow: "hidden",
        display: "block",
        background: "transparent",
      });
      document.body.insertBefore(el, document.body.firstChild);
      created = true;
    }
    const prevBodyBg = document.body.style.background || "";
    document.body.style.background = "transparent";
    setContainer(el);
    containerRef.current = el;

    return () => {
      document.body.style.background = prevBodyBg;
      if (created && el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");

    // drawing state
    let bgFill = "white"; // may be 'rgb(...)' or '#...'
    let lineColorRgba = "rgba(0,0,0,0.12)";
    let nodeColorRgba = "rgba(0,0,0,0.38)";

    // robust theme detection (priority):
    // 1. html/body class 'dark' or 'light'
    // 2. data-theme attribute on html/body
    // 3. CSS var --theme / --theme-mode
    // 4. localStorage 'theme'
    // 5. prefers-color-scheme
    const detectTheme = () => {
      const html = document.documentElement;
      const body = document.body;

      if (html.classList.contains("dark") || body.classList.contains("dark")) return "dark";
      if (html.classList.contains("light") || body.classList.contains("light")) return "light";

      const dataTheme = html.getAttribute("data-theme") || body.getAttribute("data-theme");
      if (dataTheme === "dark" || dataTheme === "light") return dataTheme;

      const cssThemeVar = getCssVar("--theme") || getCssVar("--theme-mode") || getCssVar("--color-mode");
      if (cssThemeVar) {
        const v = cssThemeVar.replace(/["']/g, "").toLowerCase();
        if (v === "dark" || v === "light") return v;
      }

      try {
        const ls = localStorage.getItem("theme");
        if (ls === "dark" || ls === "light") return ls;
      } catch (e) {}

      // fall back to OS preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
      return "light";
    };

    function computeColorsForTheme() {
      const theme = detectTheme();
      if (theme === "dark") {
        // prefer reading Tailwind classes so exact emerald values are used
        const bgFromClass = createEphemeralElementAndRead("bg-darkBg", true);
        const bgFromVar = getCssVar("--bg-darkBg");
        bgFill = bgFromClass || bgFromVar || "#071322";

        const e500 = createEphemeralElementAndRead("text-emerald-500") || createEphemeralElementAndRead("bg-emerald-500", true) || "#10B981";
        const e700 = createEphemeralElementAndRead("text-emerald-700") || createEphemeralElementAndRead("bg-emerald-700", true) || "#047857";

        lineColorRgba = parseRgbOrHexToRgba(e500, 0.12) || "rgba(0,0,0,0.12)";
        nodeColorRgba = parseRgbOrHexToRgba(e700, 0.9) || "rgba(0,0,0,0.38)";
      } else {
        bgFill = "white";
        lineColorRgba = "rgba(0,0,0,0.12)";
        nodeColorRgba = "rgba(0,0,0,0.38)";
      }
    }

    function setSize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      canvas.width = Math.floor(vw * dpr);
      canvas.height = Math.floor(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function initNodes() {
      const vw = canvas.clientWidth;
      const vh = canvas.clientHeight;
      const count = 65;
      const nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * vw,
          y: Math.random() * vh,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: 1.6,
        });
      }
      nodesRef.current = nodes;
    }

    function update(dt = 1) {
      const nodes = nodesRef.current;
      const vw = canvas.clientWidth;
      const vh = canvas.clientHeight;
      for (let n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > vw) n.vx *= -1;
        if (n.y < 0 || n.y > vh) n.vy *= -1;
        n.vx += (Math.random() - 0.5) * 0.01;
        n.vy += (Math.random() - 0.5) * 0.01;
        const vmax = 0.9;
        if (n.vx > vmax) n.vx = vmax;
        if (n.vx < -vmax) n.vx = -vmax;
        if (n.vy > vmax) n.vy = vmax;
        if (n.vy < -vmax) n.vy = -vmax;
      }
    }

    function draw() {
      const vw = canvas.clientWidth;
      const vh = canvas.clientHeight;
      ctx.clearRect(0, 0, vw, vh);
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, vw, vh);

      const nodes = nodesRef.current;
      const maxDistance = 180;

      const lineMatch = lineColorRgba.match(/rgba?\(([^)]+)\)/);
      let lineRgbParts = ["0", "0", "0"];
      if (lineMatch) {
        lineRgbParts = lineMatch[1].split(",").slice(0, 3).map((p) => p.trim());
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = Math.max(0, 0.18 - dist / 1200);
            ctx.strokeStyle = `rgba(${lineRgbParts[0]}, ${lineRgbParts[1]}, ${lineRgbParts[2]}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const nodeMatch = nodeColorRgba.match(/rgba?\(([^)]+)\)/);
      let nodeRgbParts = ["0", "0", "0", "0.38"];
      if (nodeMatch) {
        nodeRgbParts = nodeMatch[1].split(",").map((p) => p.trim());
      }

      for (let n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgbParts[0]}, ${nodeRgbParts[1]}, ${nodeRgbParts[2]}, ${nodeRgbParts[3] || 0.9})`;
        ctx.fill();
      }
    }

    // Respond to theme changes from multiple signals
    function onThemeChange() {
      computeColorsForTheme();
      // immediate draw so change appears instantly
      draw();
    }

    // subscribe to OS preference
    let mql = null;
    if (window.matchMedia) {
      mql = window.matchMedia("(prefers-color-scheme: dark)");
      if (mql.addEventListener) mql.addEventListener("change", onThemeChange);
      else if (mql.addListener) mql.addListener(onThemeChange);
    }

    // observe class/attribute changes on html/body
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "class" || m.attributeName === "data-theme") {
          onThemeChange();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class", "data-theme"] });

    // storage changes (other tabs)
    const onStorage = (e) => {
      if (e.key === "theme") onThemeChange();
    };
    window.addEventListener("storage", onStorage);

    // custom event (useful if your toggle dispatches a custom event)
    const onCustom = () => onThemeChange();
    window.addEventListener("themechange", onCustom);

    // init & animation loop
    computeColorsForTheme();
    setSize();
    let last = performance.now();
    function step(now) {
      const dt = Math.min(48, now - last) / 16.666;
      last = now;
      update(dt);
      draw();
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", setSize);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", setSize);
      if (mql) {
        if (mql.removeEventListener) mql.removeEventListener("change", onThemeChange);
        else if (mql.removeListener) mql.removeListener(onThemeChange);
      }
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("themechange", onCustom);
      nodesRef.current = [];
    };
  }, [container]);

  if (!container) return null;

  return createPortal(
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ display: "block", width: "100%", height: "100%" }}
    />,
    container
  );
}
