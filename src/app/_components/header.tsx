import Link from "next/link";
import { CMS_NAME, TAGLINE } from "@/lib/constants";

export function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors">
              {CMS_NAME}
            </Link>
            <span className="mx-3 text-gray-400">•</span>
            <p className="text-sm text-gray-600">{TAGLINE}</p>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

