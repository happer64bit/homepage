import { allPosts } from "content-collections";
 
export const postsSortedByDate = allPosts.toSorted(
  (a, b) => b.publishedDate.getTime() - a.publishedDate.getTime(),
);
