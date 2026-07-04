import { motion } from 'motion/react';

const ROADMAP = [
  { title: 'Loyalty card integration', body: 'Link store accounts to auto-apply member pricing and digital coupons.' },
  { title: 'Receipt comparison', body: 'Photograph a receipt after checkout and compare it against the estimated total.' },
  { title: 'Price history & deal alerts', body: 'Track trends over time and get notified when a tracked item drops in price.' },
  { title: 'Pantry & shopping list sync', body: 'Keep a running list and pantry inventory synced with what you scan.' },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">What's next</h2>
          <p className="mt-4 text-ink-300">GroceryScan is early. Here's what's on the roadmap.</p>
        </div>

        <ol className="mt-14 space-y-6 border-l border-white/10 pl-8">
          {ROADMAP.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-navy-900 bg-mint-500" />
              <h3 className="font-display text-lg font-semibold text-ink-50">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-300">{item.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
