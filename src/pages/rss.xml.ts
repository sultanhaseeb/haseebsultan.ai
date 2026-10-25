import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { posts, isLesson, lessonNumber } from '../data/blog';

// Feed of every article and lesson at /rss.xml, newest first.
export function GET(context: APIContext) {
  return rss({
    title: `${site.name} | Blog`,
    description: 'Articles on where AI is heading, and step-by-step lessons on AI engineering.',
    site: context.site ?? 'https://haseebsultan.ai',
    items: posts.map(post => ({
      title: isLesson(post) ? `Lesson ${lessonNumber(post)}: ${post.title}` : post.title,
      description: post.description,
      pubDate: new Date(`${post.published}T00:00:00Z`),
      link: post.href,
      categories: [post.category],
    })),
  });
}
