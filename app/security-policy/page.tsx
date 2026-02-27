import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { ReactNode } from 'react';
import { Container } from '@/components/container';

export const metadata: Metadata = {
  title: 'Responsible Disclosure',
  description: 'Responsible disclosure policy for the SpectraStrike by NyxeraLabs website repository.'
};

async function getSecurityPolicyText() {
  const policyPath = path.join(process.cwd(), 'SECURITY.md');
  return readFile(policyPath, 'utf8');
}

type Block =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'hr' }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

function parsePolicyMarkdown(content: string): Block[] {
  const lines = content.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      blocks.push({ type: 'hr' });
      i += 1;
      continue;
    }

    if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', text: line.slice(2).trim() });
      i += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      i += 1;
      continue;
    }

    if (line.startsWith('• ') || line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length) {
        const next = lines[i].trim();
        if (next.startsWith('• ') || next.startsWith('- ')) {
          items.push(next.slice(2).trim());
          i += 1;
          continue;
        }
        break;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length) {
        const next = lines[i].trim();
        const match = next.match(/^\d+\.\s+(.*)$/);
        if (match) {
          items.push(match[1].trim());
          i += 1;
          continue;
        }
        break;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    const paragraph: string[] = [line];
    i += 1;
    while (i < lines.length) {
      const next = lines[i].trim();
      if (!next || /^---+$/.test(next) || next.startsWith('# ') || next.startsWith('## ') || next.startsWith('• ') || next.startsWith('- ') || /^\d+\.\s+/.test(next)) {
        break;
      }
      paragraph.push(next);
      i += 1;
    }
    blocks.push({ type: 'p', text: paragraph.join(' ') });
  }

  return blocks;
}

function renderTextWithLinks(text: string): ReactNode[] {
  const tokenRegex = /(https?:\/\/[^\s)]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null = tokenRegex.exec(text);

  while (match) {
    const [fullMatch, urlMatch, emailMatch] = match;
    const start = match.index;

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start));
    }

    if (urlMatch) {
      nodes.push(
        <a
          key={`${urlMatch}-${start}`}
          href={urlMatch}
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary underline hover:no-underline"
        >
          {urlMatch}
        </a>
      );
    } else if (emailMatch) {
      nodes.push(
        <a key={`${emailMatch}-${start}`} href={`mailto:${emailMatch}`} className="text-primary underline hover:no-underline">
          {emailMatch}
        </a>
      );
    }

    lastIndex = start + fullMatch.length;
    match = tokenRegex.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export default async function SecurityPolicyPage() {
  const content = await getSecurityPolicyText();
  const blocks = parsePolicyMarkdown(content);

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <div className="surface-panel-elevated mx-auto max-w-5xl p-5 sm:p-8 lg:p-10 3xl:max-w-6xl 3xl:p-12">
        <p className="text-xs uppercase tracking-[0.18em] text-primary/90">Live Policy</p>
        <h1 className="mt-2 font-brand text-2xl text-foreground sm:text-3xl lg:text-4xl 3xl:text-5xl">Responsible Disclosure</h1>
        <p className="mt-3 text-sm text-secondary">Source: `SECURITY.md`</p>

        <article className="mt-7 space-y-5 text-foreground sm:mt-8">
          {blocks.map((block, index) => {
            if (block.type === 'h1') {
              return (
                <h2 key={index} className="pt-2 font-brand text-xl text-foreground sm:text-2xl 3xl:text-3xl">
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'h2') {
              return (
                <h3 key={index} className="pt-2 text-lg font-semibold text-foreground sm:text-xl 3xl:text-2xl">
                  {block.text}
                </h3>
              );
            }

            if (block.type === 'hr') {
              return <hr key={index} className="border-border/80" />;
            }

            if (block.type === 'ul') {
              return (
                <ul key={index} className="list-disc space-y-2 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{renderTextWithLinks(item)}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === 'ol') {
              return (
                <ol key={index} className="list-decimal space-y-2 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{renderTextWithLinks(item)}</li>
                  ))}
                </ol>
              );
            }

            return (
              <p key={index} className="text-sm leading-7 sm:text-base 3xl:text-lg">
                {renderTextWithLinks(block.text)}
              </p>
            );
          })}
        </article>
      </div>
    </Container>
  );
}
