import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHightlight from 'rehype-highlight'

export default async function(contents: string): Promise<string> {
    const result = await unified()
        .use(rehypeStringify, { allowDangerousHtml: true })
        .use(remarkGfm)
        .use(remarkParse, { allowDangerousHtml: true })
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeHightlight)
        .process(contents)
    return String(result);
}