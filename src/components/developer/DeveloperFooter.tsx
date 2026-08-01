import Link from "next/link";

export default function DeveloperFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dev-border">
      <div className="site-container">
        <div className="grid gap-10 py-10 md:grid-cols-2 md:items-end lg:py-14">
          <div>
            <Link
              href="/developer"
              className="text-[11px] font-medium uppercase tracking-[0.2em]"
            >
              Marc Austin
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-6 text-dev-muted">
              Developer focused on building thoughtful digital products
              through clean engineering and intentional design.
            </p>
          </div>

          <div className="md:text-right">
            <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] text-dev-muted transition-colors hover:text-dev-foreground"
              >
                GitHub
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] text-dev-muted transition-colors hover:text-dev-foreground"
              >
                LinkedIn
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] text-dev-muted transition-colors hover:text-dev-foreground"
              >
                Email
              </a>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-dev-subtle">
              © {year} Marc Austin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}