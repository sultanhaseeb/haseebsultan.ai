import type { ImageMetadata } from 'astro';
import controlProblemImage from '../assets/images/writing/the-control-problem/control-problem.png';
import specDrivenImage from '../assets/images/writing/spec-driven-development.jpg';
import jevImage from '../assets/images/writing/unlocking-system-1-ai-jev/system-1-vs-system-2.png';

export interface Post {
  title: string;
  // Short title printed on the cover card in listings.
  coverTitle: string;
  description: string;
  category: string;
  href: string;
  published: string;
  // Lead image under the article header, also used for social previews. Optional.
  image?: ImageMetadata;
  imageAlt?: string;
}

export const controlProblemArticle: Post = {
  title: 'Will AI Kill Us — Or Are We Really Afraid of Losing Control?',
  coverTitle: 'The Control Problem',
  description: 'What a missing watermark can teach us about AI alignment, reliable constraints, and the growing debate over control.',
  category: 'AI Safety',
  href: '/writing/the-control-problem/',
  published: '2026-09-21',
  image: controlProblemImage,
  imageAlt: 'The Control Problem, illustrated by an arrow breaking through a boundary on its way to a target.',
};

export const specDrivenLesson: Post = {
  title: 'Vibe Coding vs. Spec-Driven Development: From Chaos to Clarity',
  coverTitle: 'Spec-Driven Development',
  description: 'Why production AI engineering needs durable specifications, a Project Constitution, disciplined validation, and agent-independent workflows.',
  category: 'AI Engineering',
  href: '/learning/spec-driven-development/',
  published: '2026-09-20',
  image: specDrivenImage,
  imageAlt: 'Vibe coding and Spec-Driven Development compared as temporary prompt-driven chaos versus structured, version-controlled specifications.',
};

export const jevLesson: Post = {
  title: 'Unlocking System 1 AI: Jev',
  coverTitle: 'System 1 AI',
  description: 'How Jev replaces slow text generation with fast, calibrated decisions for high-volume application workflows.',
  category: 'AI Engineering',
  href: '/learning/unlocking-system-1-ai-jev/',
  published: '2026-10-01',
  image: jevImage,
  imageAlt: 'A comparison of System 2 conversational language models and the System 1 Jev model, covering training, performance, cost, and use cases.',
};

export const mcpLesson: Post = {
  title: 'Build an MCP Server: Tools, Resources, and Prompts',
  coverTitle: 'Build an MCP Server',
  description: 'A hands-on walkthrough of a small Model Context Protocol server: when to use each of MCP’s three building blocks, and how clients connect over STDIO and HTTP.',
  category: 'AI Engineering',
  href: '/learning/build-an-mcp-server/',
  published: '2026-10-26',
};

// Articles: my own views on AI, what it is, and where it is heading. Pages live in src/pages/writing/.
export const articles = [
  controlProblemArticle,
];

// Lessons: new ideas in AI engineering, broken down step by step. Pages live in src/pages/learning/.
// Lessons are numbered in this order (oldest first), so add new lessons to the end.
export const lessons = [
  specDrivenLesson,
  jevLesson,
  mcpLesson,
];

// Every article and lesson, newest first.
export const posts = [...articles, ...lessons].sort((a, b) => b.published.localeCompare(a.published));

export const isLesson = (post: Post) => lessons.includes(post);

export const lessonNumber = (post: Post) => String(lessons.indexOf(post) + 1).padStart(2, '0');

// The label above a post title, such as "Lesson 02 · AI Engineering" or "AI Safety".
export const postLabel = (post: Post) => (isLesson(post) ? `Lesson ${lessonNumber(post)} · ${post.category}` : post.category);

// What to suggest after a post: the next lesson in the series, otherwise the newest other post.
export const readNext = (post: Post): { label: string; post: Post } | undefined => {
  const nextLesson = isLesson(post) ? lessons[lessons.indexOf(post) + 1] : undefined;
  if (nextLesson) return { label: 'Next lesson', post: nextLesson };
  const other = posts.find(candidate => candidate !== post);
  return other && { label: 'Read next', post: other };
};
