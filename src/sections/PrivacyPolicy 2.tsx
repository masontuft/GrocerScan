import type { ReactNode } from 'react';
import { privacyPolicy } from '@/content/privacyPolicy.generated';

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-2xl font-bold text-ink-50 first:mt-0">{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 font-display text-lg font-semibold text-mint-400">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-300">{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-300 marker:text-mint-500">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  const { title, meta, blocks } = privacyPolicy;

  return (
    <article className="mx-auto max-w-3xl px-6 py-28">
      <p className="font-display text-sm font-semibold uppercase tracking-wide text-sky-400">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink-50 sm:text-5xl">{title}</h1>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-400">
        {meta.map(({ label, value }) => (
          <span key={label}>
            {label}:{' '}
            {value.includes('@') ? (
              <a href={`mailto:${value}`} className="text-sky-400 hover:text-sky-300">
                {value}
              </a>
            ) : (
              <span className="text-ink-300">{value}</span>
            )}
          </span>
        ))}
      </div>

      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <H2 key={i}>{block.text}</H2>;
          case 'h3':
            return <H3 key={i}>{block.text}</H3>;
          case 'ul':
            return <Ul key={i} items={block.items ?? []} />;
          case 'p':
          default:
            return <P key={i}>{block.text}</P>;
        }
      })}
    </article>
  );
}
