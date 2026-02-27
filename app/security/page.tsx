import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Security scope and disclosure paths for SpectraStrike by NyxeraLabs website and platform.'
};

export default function SecurityPage() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <SectionTitle eyebrow="Security" title="Security Scope and Disclosure Paths">
        Security guidance for SpectraStrike by NyxeraLabs is separated between platform security and this website repository.
      </SectionTitle>

      <section className="surface-panel mt-10 p-6 sm:p-8">
        <h3 className="text-lg font-semibold">Platform Security</h3>
        <p className="mt-3 text-secondary">
          SpectraStrike platform security and coordinated vulnerability handling are managed under NyxeraLabs disclosure policy.
        </p>
        <p className="mt-3 text-secondary">
          Review platform security details at{' '}
          <a href="https://nyxera.cloud/security" target="_blank" rel="noreferrer noopener" className="font-semibold text-primary underline hover:no-underline">
            /security (Nyxera site)
          </a>
          .
        </p>
      </section>

      <section className="surface-panel mt-8 p-6 sm:p-8">
        <h3 className="text-lg font-semibold">Website Security (This Repository)</h3>
        <p className="mt-3 text-secondary">
          This repository hosts the public marketing website only. It does not host production services or customer environments.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">In Scope</p>
            <ul className="mt-3 space-y-2 text-secondary">
              <li>Website content integrity issues</li>
              <li>Dependency vulnerabilities affecting this repository</li>
              <li>Security header or transport configuration flaws</li>
              <li>Build and deployment pipeline risks for this site</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Out of Scope</p>
            <ul className="mt-3 space-y-2 text-secondary">
              <li>Production platform services and customer environments</li>
              <li>Theoretical best-practice suggestions without demonstrable impact</li>
              <li>Social engineering attempts</li>
              <li>Issues requiring non-standard client extensions</li>
            </ul>
          </div>
        </div>
        <p className="mt-5 text-secondary">
          For reporting procedures and timelines, see{' '}
          <Link href="/security-policy" className="font-semibold text-primary underline hover:no-underline">
            Responsible Disclosure
          </Link>
          .
        </p>
      </section>
    </Container>
  );
}
