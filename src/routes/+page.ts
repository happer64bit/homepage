export const ssr = false;
export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch("/api/projects")
    
    return { projects: await res.json() }
}