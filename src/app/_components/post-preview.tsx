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

export function PostPreview({ title, date, excerpt, slug, isDraft }: Props) {
  return (
    <article className="border rounded p-4">
      <h4 className="text-xl font-semibold mb-1">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h4>
      <div className="text-xs text-gray-500 mb-2">
        <DateFormatter dateString={date} isDraft={isDraft} />
      </div>
      <p className="text-sm leading-relaxed">{excerpt}</p>
    </article>
  );
}
