import { Hero } from '@/components/hero'
import { Creator, WhatItIs, WhyItMatters } from '@/components/project-sections'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatItIs />
        <WhyItMatters />
        <Creator />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          Metasploitable Hacking Lab &middot; Brandy M Timms
        </div>
      </footer>
    </>
  )
}
