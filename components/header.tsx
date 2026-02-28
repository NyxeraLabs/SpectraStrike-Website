import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { navItems } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-3 py-3 lg:min-h-20">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-foreground">
          <div className="relative h-10 w-10 shrink-0 rounded-md border border-border/60 bg-surface/60 p-1 sm:h-12 sm:w-12">
            <Image src="/images/SpectraStrike_Logo.png" alt="SpectraStrike logo" fill className="object-contain" priority />
          </div>
          <div className="min-w-0 pl-1 lg:pl-2">
            <p className="font-brand truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground sm:text-xs lg:text-sm">
              SpectraStrike
            </p>
            <p className="truncate text-[10px] uppercase tracking-[0.12em] text-secondary sm:text-[11px]">
              Nyxera Labs
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-secondary transition-colors hover:text-electric">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
