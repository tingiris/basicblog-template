import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { saveCoverImageIfNeeded } from "./saveCoverImage";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const isDraft = realSlug.startsWith("draft_");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const post = { ...data, slug: realSlug, content, isDraft } as Post & { isDraft?: boolean };
  
  // Generate cover image if it doesn't exist
  if (post.date) {
    post.coverImage = saveCoverImageIfNeeded(realSlug, post.date, post.coverImage);
  }
  
  return post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const filtered = slugs.filter((s) => {
    if (process.env.NODE_ENV === "development") return true;
    return !s.startsWith("draft_");
  });

  const posts = filtered
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
