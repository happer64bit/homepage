export const prerender = true

export const load = ({ url }) => {
    return {
        pathname: url.pathname
    }
}