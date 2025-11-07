import Link from "next/link";
import { DateFormatter } from "./date-formatter";

interface Props {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  slug: string;
  isDraft?: boolean;
}

export function HeroPost({ title, coverImage, date, excerpt, slug, isDraft }: Props) {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-semibold mb-2">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h2>
      <div className="text-sm text-gray-600 mb-3">
        <DateFormatter dateString={date} isDraft={isDraft} />
      </div>
      <p className="leading-relaxed text-lg max-w-2xl">{excerpt}</p>
    </section>
  );
}
