import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

export function MoreStories({ posts }: { posts: Post[] }) {
  const rest = posts.slice(0);
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">More Stories</h3>
      <div className="space-y-6">
        {rest.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
            isDraft={post.isDraft}
          />
        ))}
      </div>
    </section>
  );
}
