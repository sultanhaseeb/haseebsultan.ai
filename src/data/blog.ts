import type { ImageMetadata } from 'astro';
import controlProblemImage from '../assets/images/blog/the-control-problem/control-problem.png';
import specDrivenImage from '../assets/images/blog/spec-driven-development.jpg';
import jevImage from '../assets/images/blog/unlocking-system-1-ai-jev/system-1-vs-system-2.png';
import gtcBerlinImage from '../assets/images/blog/nvidia-gtc-berlin/keynote-robots.jpg';

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
  // Shown under the lead image, for credits.
  imageCaption?: string;
  // The phrase in the title (and cover title) set in italic emerald, such as "AI Agents".
  accent?: string;
  // Lessons: extra topics shown after the category, such as MCP and Python.
  tags?: string[];
  // Lessons: the code that goes with them.
  repo?: { name: string; href: string };
}

export const controlProblemArticle: Post = {
  title: 'Will AI Kill Us? Or Are We Really Afraid of Losing Control?',
  coverTitle: 'The Control Problem',
  description: 'What a missing watermark can teach us about AI alignment, reliable constraints, and the growing debate over control.',
  category: 'AI Safety',
  accent: 'Losing Control?',
  href: '/blog/the-control-problem/',
  published: '2026-09-21',
  image: controlProblemImage,
  imageAlt: 'The Control Problem, illustrated by an arrow breaking through a boundary on its way to a target.',
};

export const gtcBerlinArticle: Post = {
  title: 'Beyond Chatbots: Inside NVIDIA’s GTC Berlin Keynote and the Blueprint for the Agentic AI Revolution',
  coverTitle: 'Inside GTC Berlin',
  description: 'Six takeaways from Jensen Huang’s keynote, from AI factories that manufacture tokens to agent security enforced in hardware.',
  category: 'AI Infrastructure',
  accent: 'Agentic AI Revolution',
  href: '/blog/nvidia-gtc-berlin-keynote/',
  published: '2026-10-26',
  image: gtcBerlinImage,
  imageAlt: 'Jensen Huang kneels on the GTC Berlin stage holding a laptop beside three small walking robots, with humanoid robots from Disney Research and Enchanted Tools behind him.',
  imageCaption: 'Jensen Huang on stage at GTC Berlin with a group of walking robots. Image: NVIDIA',
};

export const aiSecurityArticle: Post = {
  title: 'Why AI Security Matters: Big Banks Just Locked Out AI Agents',
  coverTitle: 'Banks Lock Out AI Agents',
  description: 'In one week, five of America’s biggest banks stopped AI agents from moving customer money. What happened, why it matters, and how to use AI agents safely.',
  category: 'AI Security',
  accent: 'AI Agents',
  href: '/blog/why-ai-security-matters/',
  published: '2026-10-26',
};

export const specDrivenLesson: Post = {
  title: 'Vibe Coding vs. Spec-Driven Development: From Chaos to Clarity',
  coverTitle: 'Spec-Driven Development',
  description: 'Why production AI engineering needs durable specifications, a Project Constitution, disciplined validation, and agent-independent workflows.',
  category: 'AI Engineering',
  accent: 'From Chaos to Clarity',
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
  accent: 'Jev',
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
  accent: 'Tools, Resources, and Prompts',
  tags: ['MCP', 'Python'],
  repo: { name: 'taskboard-mcp', href: 'https://github.com/sultanhaseeb/taskboard-mcp' },
  href: '/learning/build-an-mcp-server/',
  published: '2026-10-26',
};

// Articles: my own views on AI, what it is, and where it is heading. Pages live in src/pages/blog/.
// Posts published on the same day are listed in this order, so put the newest first among them.
export const articles = [
  controlProblemArticle,
  aiSecurityArticle,
  gtcBerlinArticle,
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

// Splits a title around its accent phrase, so the phrase can be set in italics.
export const accentParts = (text: string, accent?: string): [string, string, string] => {
  const at = accent ? text.lastIndexOf(accent) : -1;
  if (!accent || at < 0) return [text, '', ''];
  return [text.slice(0, at), accent, text.slice(at + accent.length)];
};

// What to suggest after a post: the next lesson in the series first, then the newest other posts.
export const readNext = (post: Post, count = 2): Post[] => {
  const nextLesson = isLesson(post) ? lessons[lessons.indexOf(post) + 1] : undefined;
  const others = posts.filter(candidate => candidate !== post && candidate !== nextLesson);
  return [...(nextLesson ? [nextLesson] : []), ...others].slice(0, count);
};

// The lessons either side of a lesson, for the previous and next links.
export const lessonNeighbours = (post: Post) => {
  const index = lessons.indexOf(post);
  return { previous: lessons[index - 1], next: lessons[index + 1], number: index + 1, total: lessons.length };
};
