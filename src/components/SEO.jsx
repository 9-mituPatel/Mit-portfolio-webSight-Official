import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoRoutes, getCanonicalUrl, generateBreadcrumbs } from '@/config/seoRoutes';

const SEO = () => {
  const location = useLocation();
  const currentRoute = Object.values(seoRoutes).find(route => route.path === location.pathname) || seoRoutes.home;

  useEffect(() => {
    // Update page title
    document.title = currentRoute.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentRoute.description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = getCanonicalUrl(currentRoute.canonicalSlug);

    // Update breadcrumb schema
    const breadcrumbs = generateBreadcrumbs(location.pathname);
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map(crumb => ({
        '@type': 'ListItem',
        'position': crumb.position,
        'name': crumb.name,
        'item': crumb.item,
      })),
    };

    let breadcrumbScript = document.querySelector('#breadcrumb-schema');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

    // Update Open Graph and Twitter meta tags
    const metaTags = {
      'og:title': currentRoute.title,
      'og:description': currentRoute.description,
      'og:url': getCanonicalUrl(currentRoute.canonicalSlug),
      'twitter:title': currentRoute.title,
      'twitter:description': currentRoute.description,
    };

    Object.entries(metaTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`) ||
                    document.querySelector(`meta[name="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      }
    });
  }, [location.pathname]);

  return null; // This is a utility component, it doesn't render anything
};

export default SEO;