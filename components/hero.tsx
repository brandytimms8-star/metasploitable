export function Hero() {
  return (
    <section id="top" className="border-b">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-sm text-primary">{'> ./project --info'}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl">
          Metasploitable <span className="text-primary">Hacking Lab</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A practice environment that uses an intentionally vulnerable virtual machine as a target
          for learning penetration testing, ethical hacking, and cybersecurity.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#why"
            className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Why it matters
          </a>
          <a
            href="#creator"
            className="inline-flex h-11 items-center rounded-md border px-5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Who made it
          </a>
        </div>
      </div>
    </section>
  )
}
