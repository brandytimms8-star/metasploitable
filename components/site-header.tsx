import { Terminal } from 'lucide-react'

const links = [
  { href: '#what', label: 'What it is' },
  { href: '#why', label: 'Why it matters' },
  { href: '#creator', label: 'Who made it' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <span>Metasploitable Lab</span>
        </a>
        <nav aria-label="Sections">
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
