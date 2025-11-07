import Link from "next/link";
import { CMS_NAME, TAGLINE } from "@/lib/constants";

export function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center justify-start">
          <Link href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors">
            {CMS_NAME}
          </Link>
          <span className="mx-3 text-gray-400">•</span>
          <p className="text-sm text-gray-600">{TAGLINE}</p>
        </div>
      </div>
    </header>
  );
}

