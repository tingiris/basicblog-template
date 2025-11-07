import { getAllPosts, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { PostHeader } from "@/app/_components/post-header";
import { PostBody } from "@/app/_components/post-body";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const html = await markdownToHtml(post.content || "");
  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <PostHeader title={post.title} date={post.date} isDraft={post.isDraft} />
      <PostBody content={html} />
    </main>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}
