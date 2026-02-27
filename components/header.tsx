import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { navItems } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-soft backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-3 py-3 lg:min-h-20">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-foreground">
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <Image src="/branding/nyxera-logo.png" alt="NyxeraLabs logo" fill className="object-contain" priority />
          </div>
          <span className="truncate pl-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground sm:text-sm lg:pl-2">
            NyxeraLabs
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-secondary transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
