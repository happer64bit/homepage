import { allPosts } from "content-collections";

export const postsSortedByDate = allPosts.sort(
  (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime(),
);

// Post with dictonary for O(1) access time
export const postsDictionary = allPosts.reduce((acc, post) => {
  acc[post._meta.path] = post;
  return acc;
}, {} as Record<string, typeof allPosts[number]>);