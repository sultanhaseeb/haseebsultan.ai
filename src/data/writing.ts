import { publishedArticles } from './resume';

export const specDrivenArticle = {
  title: 'Spec-Driven Development: A Blueprint for AI-Native Engineering',
  description: 'A visual introduction to spec-driven development, with a simple workflow and a practical task-list example. Read one short page at a time.',
  format: 'reader' as const,
  category: 'AI Engineering',
  href: '/writing/spec-driven-development/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-20',
  image: '/images/writing/spec-driven-development.png',
};

export const writingArticles = [
  specDrivenArticle,
  ...publishedArticles.map(article => ({ ...article, publication: 'Medium', format: 'external' as const })),
];
