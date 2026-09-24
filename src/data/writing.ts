import { publishedArticles } from './resume';

export const enterpriseAiSummitArticle = {
  title: 'Beyond the AI Hype: Trust, Governance and the Future of Work',
  description: 'What the Middle East Enterprise AI and Analytics Summit taught me about agent autonomy, practical governance and where people still matter most.',
  format: 'featured' as const,
  category: 'Agentic AI',
  href: '/writing/enterprise-ai-summit-2026/',
  publication: 'HaseebSultan.ai',
  published: '2026-09-24',
  image: '/images/writing/enterprise-ai-summit-2026/haseeb-at-enterprise-ai-summit.jpeg',
  imageAlt: 'Haseeb Sultan at the Middle East Enterprise AI and Analytics Summit 2026 in Dubai.',
  imageWidth: 1200,
  imageHeight: 1600,
  imagePosition: 'center 44%',
};

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
  enterpriseAiSummitArticle,
  controlProblemArticle,
  gisecArticle,
  specDrivenArticle,
  ...publishedArticles.map(article => ({ ...article, publication: 'Medium', format: 'external' as const })),
];
