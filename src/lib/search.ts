import FlexSearch from 'flexsearch'
import type { Post } from './types'

let postsIndex: FlexSearch.Index
let posts: Post[]

export function createPostsIndex(data: Post[]) {
    // create the posts index
    postsIndex = new FlexSearch.Index({ tokenize: 'forward' })

    data.forEach((post, i) => {
        // index the title and content together
        const item = `${post.title} ${post.content}`
        // add the item to the index 👍️
        postsIndex.add(i, item)
    })

    posts = data
}

export function searchPostsIndex(searchTerm: string) {
    // escape special regex characters
    const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // return matching post indexes 💪
    const results = postsIndex.search(match)

    return results
        // filter the posts based on the matched index
        .map((index) => posts[index as number])
        // you can do whatever you want at this point 👌
        .map(({ slug, title, content }) => {
            return {
                slug,
                // replace match in title with a marker
                title: replaceTextWithMarker(title, match),
                // match words in post and replace matches with marker
                content: getMatches(content ?? "", match),
            }
        })
}

function getMatches(text: string, searchTerm: string, limit = 1) {
    // create dynamic regex 😎
    const regex = new RegExp(searchTerm, 'gi')
    // word indexes
    const indexes = []
    // matches count
    let matches = 0
    // current match in loop
    let match

    while ((match = regex.exec(text)) !== null && matches < limit) {
        // push that shit
        indexes.push(match.index)
        // increment matches
        matches++
    }

    // take the word index...
    return indexes.map((index) => {
        // go back 20 characters
        const start = index - 20
        // go forward 80 characters
        const end = index + 80
        // yoink the text
        const excerpt = text.substring(start, end).trim()
        // return excerpt 🤝
        return `...${replaceTextWithMarker(excerpt, searchTerm)}...`
    })
}

function replaceTextWithMarker(text: string, match: string) {
    // create dynamic regex 😎
    const regex = new RegExp(match, 'gi')
    // preserves the text casing 🤙
    return text.replaceAll(regex, (match) => `<mark>${match}</mark>`)
}
