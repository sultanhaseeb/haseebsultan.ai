import { publishedArticles } from './resume';

export const jevArticle = {
  title: 'Unlocking System 1 AI: Jev',
  description: 'How Jev replaces slow text generation with fast, calibrated decisions for high-volume application workflows.',
  format: 'featured' as const,
  category: 'AI Engineering',
  href: '/writing/unlocking-system-1-ai-jev/',
  publication: 'HaseebSultan.ai',
  published: '2026-10-01',
  image: '/images/writing/unlocking-system-1-ai-jev/system-1-vs-system-2.png',
  imageAlt: 'A comparison of System 2 conversational language models and the System 1 Jev model, covering training, performance, cost, and use cases.',
  imageWidth: 1697,
  imageHeight: 927,
  imagePosition: 'center',
};

export const specDrivenArticle = {
  title: 'Vibe Coding vs. Spec-Driven Development: From Chaos to Clarity',
  description: 'Why production AI engineering needs durable specifications, a Project Constitution, disciplined validation, and agent-independent workflows.',
  format: 'featured' as const,
  category: 'AI Engineering',
  href: '/writing/spec-driven-development/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-20',
  image: '/images/writing/spec-driven-development.jpg',
  imageAlt: 'Vibe coding and Spec-Driven Development compared as temporary prompt-driven chaos versus structured, version-controlled specifications.',
  imageWidth: 2276,
  imageHeight: 1170,
  imagePosition: 'center',
};

export const controlProblemArticle = {
  title: 'Will AI Kill Us — Or Are We Really Afraid of Losing Control?',
  description: 'What a missing watermark can teach us about AI alignment, reliable constraints, and the growing debate over control.',
  format: 'featured' as const,
  category: 'AI Safety',
  href: '/writing/the-control-problem/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-21',
  image: '/images/writing/the-control-problem/control-problem.png',
  imageAlt: 'The Control Problem, illustrated by an arrow breaking through a boundary on its way to a target.',
  imageWidth: 1800,
  imageHeight: 920,
  imagePosition: 'center',
};

export const writingArticles = [
  jevArticle,
  controlProblemArticle,
  specDrivenArticle,
  ...publishedArticles.map(article => ({ ...article, publication: 'Medium', format: 'external' as const })),
];
