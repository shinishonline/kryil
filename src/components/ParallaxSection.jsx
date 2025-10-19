// // src/components/ParallaxSection.jsx
// import React, { useEffect, useState, useRef } from "react";

// export default function ParallaxSection({
//   imgUrl,
//   height = "70vh",
//   overlay = 0.45,
//   children,
// }) {
//   const [offsetY, setOffsetY] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const scrollTop = window.scrollY || window.pageYOffset;
//         const elementOffsetTop = rect.top + scrollTop;
//         const relativeY = scrollTop - elementOffsetTop; // relative scroll inside section
//         setOffsetY(relativeY);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative overflow-hidden w-full"
//       style={{ height }}
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           transform: `translateY(${offsetY * 0.4}px)`, // smooth effect
//         }}
//       ></div>

//       {/* Overlay */}
//       <div
//         className="absolute inset-0 "
//         style={{
//           background: `
//             linear-gradient(to left, rgba(255,255,255,0.4), rgba(255,255,255,0.1)),
//             rgba(255,255,255,0)
//           `,
//           backdropFilter: "blur(3px)",
//         }}
//       ></div>

//       {/* Foreground content */}
//       <div className="relative z-10 h-full w-full flex items-center justify-center text-white px-4">
//         {children}
//       </div>
//     </div>
//   );
// }
