import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white transition-colors hover:text-blue-400"
          >
            Portfolio
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

