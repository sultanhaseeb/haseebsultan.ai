import { specDrivenArticle } from './writing';

export const readerPages = [
  {
    number: 1,
    title: 'Introduction',
    href: specDrivenArticle.href,
    description: 'A short introduction to spec-driven development: give AI coding agents a clear blueprint before they build.',
  },
  {
    number: 2,
    title: 'From a prompt to a specification',
    href: `${specDrivenArticle.href}page-2/`,
    description: 'See how a vague task-list prompt becomes a small, testable specification, with a visual workflow and example.',
  },
] as const;
