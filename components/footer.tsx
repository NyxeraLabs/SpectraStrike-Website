import { Container } from '@/components/container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-[#0b111e] py-8 text-slate-200 sm:py-10 3xl:py-12">
      <Container className="flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between 3xl:text-base">
        <p>SpectraStrike by NyxeraLabs — All Rights Reserved © {year}</p>
        <div className="flex flex-wrap gap-4 text-xs text-secondary sm:text-sm">
          <a href="https://vectorvue.nyxera.cloud" className="hover:text-white">VectorVue</a>
          <a href="https://nyxera.cloud" className="hover:text-white">Nyxera</a>
        </div>
      </Container>
    </footer>
  );
}
