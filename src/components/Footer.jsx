function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-sm text-neutral-600 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} hello.world. All rights reserved.
        </p>
        <p>
          Built with React, Vite, and Tailwind.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
