import { DateFormatter } from "./date-formatter";

export function PostHeader({ title, date, isDraft }: { title: string; date: string; isDraft?: boolean }) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <div className="text-sm text-gray-600">
        <DateFormatter dateString={date} isDraft={isDraft} />
      </div>
    </header>
  );
}
