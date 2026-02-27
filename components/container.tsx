import { type ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1800px] lg:px-8 3xl:px-12 4xl:max-w-[2200px] 4xl:px-16 ${className}`}>{children}</div>;
}
