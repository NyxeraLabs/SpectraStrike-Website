import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { siteConfig } from '@/lib/site';

const TOOL_COVERAGE = [
  {
    category: 'Discovery & Surface Intelligence',
    description: 'External surface and reconnaissance wrappers with normalized invocation controls and structured telemetry.',
    tools: ['Amass', 'Subfinder', 'DNSX', 'Nmap', 'Masscan', 'TheHarvester', 'Katana', 'Nikto']
  },
  {
    category: 'Web & Application Validation',
    description: 'Application-layer validation wrappers for deterministic testing, policy-scoped execution, and evidence generation.',
    tools: ['FFUF', 'Gobuster', 'Nuclei', 'Burp Suite', 'SQLMap', 'Curl', 'Wget']
  },
  {
    category: 'Identity & Active Directory Operations',
    description: 'Identity and Active Directory wrappers aligned to tenant policy context and auditable operator actions.',
    tools: ['BloodHound Collector', 'NetExec', 'CrackMapExec', 'Responder', 'RoadRecon']
  },
  {
    category: 'Post-Exploitation & Credential Operations',
    description: 'Credential and post-exploitation wrappers with cryptographic execution sealing and chain-of-custody telemetry.',
    tools: ['Impacket PsExec', 'Impacket WMIExec', 'Impacket SMBExec', 'Impacket SecretsDump', 'Impacket NTLMRelayX', 'John the Ripper']
  },
  {
    category: 'Cloud & Security Posture Validation',
    description: 'Cloud configuration and posture validation wrappers for continuous control verification across enterprise estates.',
    tools: ['Prowler', 'ScoutSuite', 'CloudFox', 'Azure CLI Security Wrapper']
  },
  {
    category: 'Access & C2 Execution Fabric',
    description: 'Access and command execution wrappers operating under deterministic policy, tenant isolation, and attested runtime controls.',
    tools: ['SSH', 'SCP', 'Netcat', 'Metasploit', 'Sliver', 'Mythic']
  }
];

const TRUST_BADGES = [
  'Policy-Bound Runtime Enforcement',
  'Ed25519 Attested Telemetry',
  'Tenant-Isolated Execution Context',
  'Federation-Ready by Design'
];

const TOTAL_WRAPPERS = TOOL_COVERAGE.reduce((count, group) => count + group.tools.length, 0);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/80">
        <Container className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_460px] lg:py-24">
          <div className="max-w-4xl">
            <span className="chip">Enterprise Offensive Validation Fabric</span>
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">SpectraStrike</h1>
            <p className="mt-4 text-lg font-medium leading-8 text-foreground/95 sm:text-xl">
              Operational Fabric for Attested Offensive Validation
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              Enterprise-grade execution control plane that transforms offensive security tooling into policy-bound, cryptographically attested validation workflows.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:text-lg sm:leading-8">
              SpectraStrike converts red-team execution into verifiable security evidence. Every tool invocation is policy-scoped, cryptographically signed, and federation-ready for continuous assurance in VectorVue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="cta-primary">Request Enterprise Access</a>
              <a href="#architecture" className="cta-ghost">Architecture Overview</a>
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

      <section className="border-b border-border/80 py-6 sm:py-8">
        <Container>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary sm:gap-3">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="rounded-full border border-border/70 bg-surface/60 px-3 py-1">
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="architecture" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Architecture" title="Execution Control Plane + Cryptographic Trust Pipeline">
            SpectraStrike operates as a deterministic execution fabric where every operator action is:
          </SectionTitle>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-secondary">
            <li>Bound to tenant and policy context</li>
            <li>Executed through normalized wrapper contracts</li>
            <li>Fingerprinted and cryptographically sealed</li>
            <li>Prepared for federation-level verification</li>
          </ol>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Execution Orchestrator',
                description: 'Centralized dispatch layer that enforces policy scope, tenant boundaries, and deterministic operator workflow sequencing.'
              },
              {
                title: 'Wrapper Contract Engine',
                description: 'Normalized execution contracts across wrapper domains to ensure consistent controls, deterministic outputs, and runtime predictability.'
              },
              {
                title: 'Attestation & Fingerprinting Layer',
                description: 'Execution traces are measurement-hashed and sealed to produce immutable attestation artifacts for downstream verification.'
              },
              {
                title: 'Telemetry Emission Gateway',
                description: 'Structured payload pipeline that emits cryptographically signed telemetry records for enterprise validation and federation workflows.'
              }
            ].map((block) => (
              <article key={block.title} className="surface-panel p-6 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                <p className="mt-3 text-secondary">{block.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="federation" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Federation" title="Asymmetric Trust by Default">
            SpectraStrike enforces cryptographic trust primitives that preserve non-repudiation, deterministic identity mapping, and end-to-end chain of custody across federation boundaries.
          </SectionTitle>
          <div className="mt-8 surface-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-secondary">
              <li>Ed25519 signed telemetry payloads are mandatory for every execution artifact.</li>
              <li>Mutual TLS is enforced for all federation transport channels.</li>
              <li>Certificate pinning validates expected service identities before telemetry exchange.</li>
              <li>Nonce and timestamp replay protection blocks duplication and delayed injection attempts.</li>
              <li>Each payload embeds an attestation measurement hash tied to execution context.</li>
              <li>Deterministic tenant mapping guarantees traceability across platform boundaries.</li>
              <li>Cryptographic signatures provide non-repudiation for operator and service actions.</li>
              <li>Verified telemetry lineage maintains defensible chain of custody for evidence workflows.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="tools" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Execution Coverage" title="Execution Coverage">
            SpectraStrike integrates {TOTAL_WRAPPERS} production-grade wrappers under normalized execution contracts. Each wrapper provides policy-bound invocation, structured telemetry emission, and execution fingerprint generation.
          </SectionTitle>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TOOL_COVERAGE.map((group) => (
              <article key={group.category} className="surface-panel p-6 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                <p className="mt-2 text-secondary">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs font-medium text-secondary">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="trust-model" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Security" title="Security & Trust Model">
            SpectraStrike is engineered for auditable offensive validation with cryptographic controls that preserve evidence integrity from execution to federation verification.
          </SectionTitle>
          <div className="mt-8 surface-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-secondary">
              <li>Cryptographic execution attestation for each operator-initiated action.</li>
              <li>Signed telemetry emission across all wrapper execution pathways.</li>
              <li>Replay protection enforcement with strict nonce and time validation.</li>
              <li>Deterministic tenant isolation throughout orchestration and telemetry pipelines.</li>
              <li>Secure federation handshake with identity validation and cryptographic trust closure.</li>
              <li>Evidence integrity guarantees through sealed, verifiable execution artifacts.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-b border-border/80 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle eyebrow="Roadmap" title="Product Roadmap" />
          <div className="mt-8 surface-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-secondary">
              <li>Federation Hardening: Expand asymmetric trust enforcement and cross-platform verification controls.</li>
              <li>Execution Assurance Expansion: Deepen attestation coverage and deterministic policy enforcement across runtime pathways.</li>
              <li>Wrapper Ecosystem Growth: Extend normalized enterprise wrapper support for broader offensive validation workflows.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="github" className="py-12 sm:py-16 lg:py-20">
        <Container className="surface-panel-elevated p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Engineering Reference</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary">
            Repository access is maintained for engineering transparency and implementation reference.
          </p>
          <a href={siteConfig.githubUrl} className="cta-primary mt-8 inline-flex">
            View Repository
          </a>
        </Container>
      </section>
    </>
  );
}
