import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl md:text-8xl text-[var(--gold)]/20 mb-4">
          404
        </h1>
        <p className="font-body text-xl text-[var(--text-secondary)] mb-2">
          Step not found
        </p>
        <p className="text-[var(--text-muted)] mb-8">
          The step you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 font-display text-sm tracking-[0.2em] uppercase text-[var(--gold)] border border-[var(--gold)]/40 rounded-full hover:border-[var(--gold)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
