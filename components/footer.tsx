import Image from 'next/image';
import { Container } from '@/components/container';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface/45 py-8 sm:py-10 3xl:py-12">
      <Container className="flex flex-col gap-4 text-sm text-secondary md:flex-row md:items-center md:justify-between 3xl:text-base">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src="/branding/nyxera-logo.png" alt="NyxeraLabs logo" fill className="object-contain" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">NyxeraLabs</span>
          </div>
          <p className="tracking-[0.03em] text-foreground/90">SpectraStrike by NyxeraLabs — All Rights Reserved © {year}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
          <a href="https://nyxera.cloud" className="transition-colors hover:text-electric">NyxeraLabs</a>
          <a href="https://vectorvue.nyxera.cloud" className="transition-colors hover:text-electric">VectorVue</a>
          <a href="https://docs.vectorvue.nyxera.cloud" className="transition-colors hover:text-electric">VectorVue Docs</a>
          <a href="https://nexus.nyxera.cloud" className="transition-colors hover:text-electric">Nyxera Nexus</a>
          <a href="https://docs.nexus.nyxera.cloud" className="transition-colors hover:text-electric">Nexus Docs</a>
          <a href="/security" className="transition-colors hover:text-electric">Security</a>
          <a href="/security-policy" className="transition-colors hover:text-electric">Responsible Disclosure</a>
          <a href="/contact" className="transition-colors hover:text-electric">Contact</a>
          <a href={siteConfig.githubUrl} className="transition-colors hover:text-electric">GitHub</a>
        </div>
      </Container>
    </footer>
  );
}
