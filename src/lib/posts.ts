import { getCollection } from 'astro:content';

export async function getSortedPosts() {
  const posts = await getCollection('posts', ({ data }) => data.published !== false);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getPostUrl(post: { id: string; slug?: string; data: { date: Date } }) {
  const d = post.data.date;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `/${y}/${m}/${day}/${post.id}`;
}

export function getAllTags(posts: any[]) {
  const tagCount = new Map<string, number>();
  posts.forEach(p => {
    p.data.tags.forEach((t: string) => {
      tagCount.set(t, (tagCount.get(t) || 0) + 1);
    });
  });
  return [...tagCount.entries()].sort((a, b) => b[1] - a[1]);
}
