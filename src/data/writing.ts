import { publishedArticles } from './resume';

export const specDrivenArticle = {
  title: 'Spec-Driven Development: A Blueprint for AI-Native Engineering',
  description: 'How specifications, a project constitution, and clear human ownership keep AI-assisted engineering aligned with the system you intend to build.',
  format: 'featured' as const,
  category: 'AI Engineering',
  href: '/writing/spec-driven-development/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-20',
  image: '/images/writing/spec-driven-development.png',
  imageAlt: 'Spec-Driven Development illustrated as an architectural blueprint.',
  imageWidth: 2296,
  imageHeight: 1196,
  imagePosition: 'center',
};

export const gisecArticle = {
  title: 'Three Days at GISEC Global 2026: What I Learned About AI Security',
  description: 'Four approaches to protecting sensitive data when organisations adopt public and enterprise AI tools.',
  format: 'featured' as const,
  category: 'AI Security',
  href: '/writing/gisec-global-2026/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-21',
  image: '/images/writing/gisec-global-2026/haseeb-at-gisec.png',
  imageAlt: 'Haseeb Sultan outside GISEC Global 2026 at Dubai Exhibition Centre.',
  imageWidth: 1086,
  imageHeight: 1448,
  imagePosition: 'center 36%',
};

export const writingArticles = [
  gisecArticle,
  specDrivenArticle,
  ...publishedArticles.map(article => ({ ...article, publication: 'Medium', format: 'external' as const })),
];
