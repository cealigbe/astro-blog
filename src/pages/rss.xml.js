import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Astro Learner | Astro Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.id}`,
      pubDate: post.data.pubDate,
    })),
    customData: `<language>en-us</language>`,
  });
}
