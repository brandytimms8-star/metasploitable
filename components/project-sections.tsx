import { Hand, Layers, Scale, type LucideIcon } from 'lucide-react'

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="font-mono text-sm text-primary">
      {number} / {label}
    </p>
  )
}

const topics = ['Penetration testing', 'Ethical hacking', 'Cybersecurity']

export function WhatItIs() {
  return (
    <section id="what" className="scroll-mt-16 border-b">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <SectionLabel number="01" label="What it is" />
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight">
            A safe target built to be broken
          </h2>
        </div>
        <div>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            The Metasploitable Penetration Testing Lab is a practice environment that uses an intentionally
            vulnerable virtual machine as a target for learning:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const reasons: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Hand,
    title: 'Hands-on skills',
    body: 'It teaches hands-on skills in a controlled, legal environment.',
  },
  {
    icon: Layers,
    title: 'Learn the framework',
    body: 'It teaches you the framework.',
  },
  {
    icon: Scale,
    title: 'Legal and ethical training ground',
    body: 'Attacking real-world systems without explicit, written permission is a crime. A Metasploitable lab gives newcomers a legal playground to make mistakes and learn offensive mechanics safely.',
  },
]

export function WhyItMatters() {
  return (
    <section id="why" className="scroll-mt-16 border-b bg-muted/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionLabel number="02" label="Why it matters" />
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight">
          Real skills, without real-world risk
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col rounded-lg border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-md bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Creator() {
  return (
    <section id="creator" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionLabel number="03" label="Who made it" />
        <div className="mt-6 flex items-center gap-5 rounded-lg border-l-4 border-primary bg-card p-6 shadow-sm">
          <span
            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
            aria-hidden="true"
          >
            BT
          </span>
          <div>
            <p className="text-sm text-muted-foreground">Created by</p>
            <p className="text-2xl font-bold tracking-tight">Brandy M Timms</p>
          </div>
        </div>
      </div>
    </section>
  )
}
