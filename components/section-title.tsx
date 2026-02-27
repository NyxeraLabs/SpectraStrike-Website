import { type ReactNode } from 'react';

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric sm:text-sm">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      {children ? <p className="mt-4 text-secondary">{children}</p> : null}
    </div>
  );
}
