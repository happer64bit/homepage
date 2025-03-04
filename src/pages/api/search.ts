import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
    return Response.json(await getCollection("posts"))
}