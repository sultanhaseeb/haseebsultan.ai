import { publishedArticles } from './resume';

export const specDrivenArticle = {
  title: 'Spec-Driven Development: A Blueprint for AI-Native Engineering',
  description: 'How specifications, a project constitution, and clear human ownership keep AI-assisted engineering aligned with the system you intend to build.',
  category: 'AI Engineering',
  href: '/writing/spec-driven-development/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-20',
  image: '/images/writing/spec-driven-development.png',
};

export const writingArticles = [
  specDrivenArticle,
  ...publishedArticles.map(article => ({ ...article, publication: 'Medium' })),
];
