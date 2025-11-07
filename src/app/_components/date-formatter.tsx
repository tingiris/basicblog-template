import { parseISO, format } from "date-fns";

export function DateFormatter({ dateString, isDraft }: { dateString?: string; isDraft?: boolean }) {
  if (!dateString) return null;
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {process.env.NODE_ENV === "development" && isDraft && <span className="mr-2 font-semibold">DRAFT</span>}
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
