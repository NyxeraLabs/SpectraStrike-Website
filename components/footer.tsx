import { Container } from '@/components/container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface/45 py-8 sm:py-10 3xl:py-12">
      <Container className="flex flex-col gap-4 text-sm text-secondary md:flex-row md:items-center md:justify-between 3xl:text-base">
        <p className="tracking-[0.03em] text-foreground/90">SpectraStrike by Nyxera Labs. All rights reserved. © {year}</p>
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
          <a href="https://vectorvue.nyxera.cloud" className="transition-colors hover:text-electric">VectorVue</a>
          <a href="https://nyxera.cloud" className="transition-colors hover:text-electric">Nyxera</a>
        </div>
      </Container>
    </footer>
  );
}
