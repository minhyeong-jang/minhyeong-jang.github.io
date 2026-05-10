import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('posts', ({ data }) => data.published !== false);
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Doriri Blog',
    description: '프로덕트 개발자 장민형의 기술 블로그',
    site: context.site,
    items: sorted.map(post => {
      const d = post.data.date;
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return {
        title: post.data.title,
        pubDate: post.data.date,
        link: `/${y}/${m}/${day}/${post.id}`,
      };
    }),
  });
}
