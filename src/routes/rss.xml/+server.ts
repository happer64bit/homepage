import { postsSortedByDate } from "$lib/sorted";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
      <channel>
          <title>Wint Khant Lin | RSS Feed</title>
          <link>https://wintkhantlin.vercel.app</link>
          <description>Blogs from Wint Khant Lin, A Student</description>
          ${postsSortedByDate.map(
            (post) =>
              `<item>
                  <title>${post.title}</title>
                  <link>https://wintkhantlin.vercel.app/posts/${post._meta.path}</link>
                  <description>${post.summary}</description>
              </item>`
          )}
      </channel>
  </rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
