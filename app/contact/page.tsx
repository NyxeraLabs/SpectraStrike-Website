import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { EMAIL_CONFIG, getFormAction } from '@/src/config/email';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact SpectraStrike by NyxeraLabs for integration planning, operational onboarding, and execution validation scope.'
};

export default function ContactPage() {
  const contactEmail = EMAIL_CONFIG.spectrastrike.contact;
  const formAction = getFormAction(contactEmail);

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <div className="grid gap-8 sm:gap-10 lg:gap-12 xl:grid-cols-2">
        <section>
          <SectionTitle eyebrow="Contact" title="Contact the SpectraStrike Team">
            Share your execution validation goals, target environments, and expected timelines. We will follow up with a scoped onboarding plan.
          </SectionTitle>
        </section>

        <section className="surface-panel p-6 sm:p-8">
          <form className="space-y-5" aria-label="SpectraStrike contact form" action={formAction} method="post">
            <input type="hidden" name="_subject" value="SpectraStrike Contact Request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_cc" value={EMAIL_CONFIG.spectrastrike.cc} />

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-surfaceElevated px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Work Email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                required
                className="w-full rounded-md border border-border bg-surfaceElevated px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium">
                Organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full rounded-md border border-border bg-surfaceElevated px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="objective" className="mb-2 block text-sm font-medium">
                Primary Objective
              </label>
              <textarea
                id="objective"
                name="objective"
                rows={4}
                placeholder="Example: continuous validation of offensive execution controls"
                className="w-full rounded-md border border-border bg-surfaceElevated px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <button type="submit" className="cta-primary inline-flex">
              Submit Request
            </button>
          </form>
          <p className="mt-4 text-sm text-secondary">
            Prefer direct email?{' '}
            <a className="underline hover:no-underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </section>
      </div>
    </Container>
  );
}
