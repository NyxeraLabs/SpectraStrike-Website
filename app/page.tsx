import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { siteConfig } from '@/lib/site';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/80">
        <Container className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_460px] lg:py-24">
          <div className="max-w-4xl">
            <span className="chip">Red-Team Execution Fabric</span>
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              SpectraStrike Operational Fabric for Attested Offensive Validation
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              SpectraStrike orchestrates nmap, metasploit, sliver, and firecracker-backed workflows, then emits signed and attested telemetry into VectorVue for continuous assurance.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
              <span className="rounded-full border border-border/70 bg-surface/60 px-3 py-1">Attested Runtime</span>
              <span className="rounded-full border border-border/70 bg-surface/60 px-3 py-1">Signed Telemetry</span>
              <span className="rounded-full border border-border/70 bg-surface/60 px-3 py-1">Policy Bound Execution</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.githubUrl} className="cta-primary">View GitHub</a>
              <a href="https://vectorvue.nyxera.cloud" className="cta-ghost">Open VectorVue</a>
            </div>
          </div>
          <div className="hero-glow surface-panel-elevated p-3">
            <Image
              src="/images/HERO.png"
              alt="SpectraStrike HERO"
              width={1200}
              height={900}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </Container>
      </section>

      <section id="architecture" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Architecture" title="Execution Control Plane + Trust Pipeline">
            Operator actions are bound to policy, tenant, and attestation context before dispatch. Every execution record is fingerprinted and prepared for federation verification.
          </SectionTitle>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              'Orchestrator + policy-bound tasking',
              'Wrapper execution contracts (nmap, metasploit, sliver, firecracker)',
              'Canonical telemetry + execution fingerprinting'
            ].map((text, index) => (
              <article key={text} className="surface-panel p-6 transition-transform duration-200 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric/90">Control 0{index + 1}</p>
                <p className="mt-3 text-secondary">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="federation" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Federation" title="Asymmetric by Default">
            SpectraStrike sends Ed25519-signed telemetry over mTLS with certificate pinning. VectorVue verifies signatures, enforces tenant mapping, and returns Ed25519-signed feedback.
          </SectionTitle>
          <div className="mt-8 surface-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-secondary">
              <li>mTLS mandatory with pinned service identity fingerprints.</li>
              <li>Replay protection via nonce and timestamp guardrails.</li>
              <li>Attestation measurement hash is embedded in signed payloads.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="tools" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Tool Ecosystem" title="Operator Toolchain Coverage" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {['Nmap', 'Metasploit', 'Sliver', 'Firecracker MicroVM'].map((tool) => (
              <article key={tool} className="surface-panel p-6 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-foreground">{tool}</h3>
                <p className="mt-2 text-secondary">Integrated through normalized wrapper contracts and telemetry SDK emission paths.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Roadmap" title="Current Focus" />
          <div className="mt-8 surface-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-secondary">
              <li>Federation hardening and asymmetric trust closure.</li>
              <li>Attested execution propagation across policy feedback loops.</li>
              <li>Expanded wrapper compatibility and operational smoke coverage.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="github" className="py-12 sm:py-16 lg:py-20">
        <Container className="surface-panel-elevated p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Source and Engineering Activity</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary">
            Track roadmap execution, federation milestones, and wrapper expansion directly in the SpectraStrike repository.
          </p>
          <a href={siteConfig.githubUrl} className="cta-primary mt-8 inline-flex">
            {siteConfig.githubUrl}
          </a>
        </Container>
      </section>
    </>
  );
}
