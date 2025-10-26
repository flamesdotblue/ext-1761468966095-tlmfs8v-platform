import { Github } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="font-semibold tracking-tight text-neutral-900">
          hello<span className="text-rose-600">.</span>world
        </a>
        <nav className="hidden gap-6 text-sm text-neutral-600 sm:flex">
          <a href="#features" className="transition-colors hover:text-neutral-900">Features</a>
          <a href="#about" className="transition-colors hover:text-neutral-900">About</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-800 transition-colors hover:bg-neutral-50"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
