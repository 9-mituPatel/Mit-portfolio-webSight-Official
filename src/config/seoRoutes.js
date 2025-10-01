/**
 * SEO-optimized route configurations for Mit Bharodiya's portfolio
 */
export const seoRoutes = {
  home: {
    path: '/',
    title: 'Mit Bharodiya - MERN Stack Developer | Portfolio',
    description: 'Mit Bharodiya: Expert MERN Stack Developer showcasing innovative web solutions and professional experience.',
    canonicalSlug: '',
  },
  about: {
    path: '/about-mit-bharodiya',
    title: 'About Mit Bharodiya | MERN Stack Developer Profile',
    description: 'Learn about Mit Bharodiya\'s journey as a MERN Stack Developer, expertise, and professional background.',
    canonicalSlug: 'about-mit-bharodiya',
  },
  experience: {
    path: '/mit-bharodiya-experience',
    title: 'Mit Bharodiya\'s Professional Experience | MERN Development',
    description: 'Explore Mit Bharodiya\'s professional experience in MERN Stack development and web solutions.',
    canonicalSlug: 'mit-bharodiya-experience',
  },
  projects: {
    path: '/mit-bharodiya-projects',
    title: 'Mit Bharodiya\'s Portfolio Projects | Full Stack Development',
    description: 'View Mit Bharodiya\'s portfolio of MERN Stack projects and web development solutions.',
    canonicalSlug: 'mit-bharodiya-projects',
  },
  skills: {
    path: '/mit-bharodiya-skills',
    title: 'Mit Bharodiya\'s Technical Skills | MERN Stack Expertise',
    description: 'Discover Mit Bharodiya\'s technical skills in MERN Stack, Node.js, React.js, and web development.',
    canonicalSlug: 'mit-bharodiya-skills',
  },
  education: {
    path: '/mit-bharodiya-education',
    title: 'Mit Bharodiya\'s Education | Academic Background',
    description: 'Mit Bharodiya\'s educational background and academic achievements in computer science.',
    canonicalSlug: 'mit-bharodiya-education',
  },
  contact: {
    path: '/contact-mit-bharodiya',
    title: 'Contact Mit Bharodiya | Hire MERN Stack Developer',
    description: 'Get in touch with Mit Bharodiya for MERN Stack development opportunities and collaborations.',
    canonicalSlug: 'contact-mit-bharodiya',
  },
};

/**
 * Get full canonical URL for a route
 * @param {string} slug - Route slug from seoRoutes
 * @returns {string} Full canonical URL
 */
export const getCanonicalUrl = (slug) => {
  const baseUrl = 'https://9-mitupatel.github.io/Mit-portfolio-webSight-Official';
  return `${baseUrl}/${slug}`;
};

/**
 * Generate breadcrumb data for schema.org
 * @param {string} currentPath - Current route path
 * @returns {Array} Breadcrumb items array
 */
export const generateBreadcrumbs = (currentPath) => {
  const breadcrumbs = [
    {
      position: 1,
      name: 'Home',
      item: getCanonicalUrl(''),
    },
  ];

  const route = Object.values(seoRoutes).find(r => r.path === currentPath);
  if (route && route.path !== '/') {
    breadcrumbs.push({
      position: 2,
      name: route.title.split('|')[0].trim(),
      item: getCanonicalUrl(route.canonicalSlug),
    });
  }

  return breadcrumbs;
};