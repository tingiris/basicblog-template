import { getAllPosts } from "@/lib/api";
import { MetroPosts } from "./_components/metro-posts";
import { HOME_COVER_IMAGE, HOME_ABOUT_TEXT } from "@/lib/constants";
import Image from "next/image";

export default function Index() {
  const posts = getAllPosts();

  return (
    <main className="max-w-7xl mx-auto px-6 pt-4 pb-12">
      {/* Cover Image Section */}
      <section className="mb-12">
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={HOME_COVER_IMAGE}
            alt="Blog Cover"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="mb-12 max-w-3xl text-left">
        <p className="text-lg text-gray-700 leading-relaxed">
          {HOME_ABOUT_TEXT}
        </p>
      </section>

      {/* Metro Style Posts */}
      {posts.length > 0 && <MetroPosts posts={posts} />}
    </main>
  );
}
