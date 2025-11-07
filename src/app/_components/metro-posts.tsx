import { Post } from "@/interfaces/post";
import Link from "next/link";
import Image from "next/image";
import { DateFormatter } from "./date-formatter";

export function MetroPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {posts.map((post, index) => {
          // Create varying sizes for metro style
          // First post is larger (spans 2 columns), every 4th post is also larger
          const isLarge = index === 0 || (index > 0 && index % 4 === 0);
          const colSpan = isLarge ? "md:col-span-2" : "";

          return (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className={`group flex flex-col overflow-hidden bg-gray-100 ${colSpan} min-h-[200px] transition-transform hover:scale-[1.02] shadow-sm hover:shadow-md`}
            >
              {post.coverImage ? (
                <>
                  <div className={`relative ${isLarge ? "h-64" : "h-48"} w-full`}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`font-bold mb-2 ${isLarge ? "text-2xl" : "text-xl"} text-gray-900 group-hover:underline`}>
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">
                      <DateFormatter dateString={post.date} isDraft={post.isDraft} />
                    </div>
                    {isLarge && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold mb-2 ${isLarge ? "text-2xl" : "text-xl"} text-gray-900 group-hover:underline`}>
                      {post.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">
                      <DateFormatter dateString={post.date} isDraft={post.isDraft} />
                    </div>
                    {isLarge && (
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

