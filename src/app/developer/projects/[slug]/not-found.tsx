import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="site-container">
      <section className="flex min-h-[70vh] items-center">
        <div>
          <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-dev-muted">
            404 / Project
          </p>

          <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-9xl">
            Project
            <br />
            <em className="font-normal">
              not found.
            </em>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-dev-muted">
            The project you&apos;re looking for
            doesn&apos;t exist or may have been moved.
          </p>

          <Link
            href="/developer/projects"
            className="group mt-10 inline-flex items-center gap-4 border-b border-dev-foreground pb-2 text-[10px] uppercase tracking-[0.18em]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}