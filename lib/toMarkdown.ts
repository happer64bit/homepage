import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeCodeTitles from 'rehype-code-titles';

export default async function(contents: string): Promise<string> {
    const result = await unified()
        .use(rehypeStringify, { allowDangerousHtml: true })
        .use(remarkGfm)
        .use(remarkParse, { allowDangerousHtml: true })
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypePrettyCode, { theme: "github-dark" })
        .process(contents)
    
    return String(result);
}