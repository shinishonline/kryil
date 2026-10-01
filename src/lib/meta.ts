// Update (or create) a meta tag in place.
//
// Vite + react-router has no helmet: static routes get their title/description
// from the route map in App.tsx, and the dynamic article routes had nothing at
// all — every blog post and news article shipped the site-wide fallback
// description, 14 pages sharing one line. Prerendering bakes whatever is in the
// DOM at render time, so setting it from the page component fixes the served
// HTML as well as the client-side navigation.
export function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Title, description, OG and Twitter tags for one article. */
export function setArticleMeta(a: {
  title: string;
  excerpt: string;
  image?: string;
  url: string;
}) {
  setMeta('name', 'description', a.excerpt);
  setMeta('property', 'og:title', a.title);
  setMeta('property', 'og:description', a.excerpt);
  setMeta('property', 'og:type', 'article');
  setMeta('property', 'og:url', a.url);
  if (a.image) setMeta('property', 'og:image', a.image);
  setMeta('name', 'twitter:title', a.title);
  setMeta('name', 'twitter:description', a.excerpt);
}
