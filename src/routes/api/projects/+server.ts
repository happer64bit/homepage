import { json } from '@sveltejs/kit';
import type { Project } from '$lib/types';

async function getProjects() {
    const projects: Project[] = [];

    // Importing all .yml files eagerly
    const paths = import.meta.glob('/src/projects/*.json', { eager: true });

    for (const path in paths) {
        const file = paths[path] as { default: string };
        const slug = path.split('/').at(-1)?.replace('.json', '');

        if (file && typeof file.default === 'object' && slug) {
            const metadata = file.default as Omit<Project, 'slug'>;
            const post = { ...metadata, slug } as Project;

            projects.push(post);
        }
    }

    return projects;
}

export async function GET() {
    const projects = await getProjects();

    return json(projects);
}
