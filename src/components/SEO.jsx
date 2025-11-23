import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Kryil Infotech — Next-Gen Software & IT Solutions",
  description = "Leading provider of custom software development, cybersecurity, cloud solutions, and infrastructure services. Transform your business with cutting-edge technology.",
  keywords = "software development, cybersecurity, cloud solutions, IT infrastructure, automation, IoT, AI/ML, DevOps, Bangalore",
  path = "/",
  image = "https://kryil.com/og-image.jpg"
}) {
  const url = `https://kryil.com${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
