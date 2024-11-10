export async function load({ fetch }) {
	const res = await fetch("/api/projects")
    
    return { projects: await res.json() }
}