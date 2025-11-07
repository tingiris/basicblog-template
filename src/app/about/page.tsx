export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to Basic Blog. A minimal markdown-driven blog template for Next.js with drafts and static generation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          This template provides a clean, simple foundation for creating your own blog with Next.js and Markdown.
        </p>
      </div>
    </main>
  );
}

