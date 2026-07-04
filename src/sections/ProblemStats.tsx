import { motion } from 'motion/react';
import CountUp from '@/components/reactbits/CountUp';

const STATS = [
  { to: 3, suffix: '', label: 'Retailers compared live', sub: 'Kroger · Instacart · Walmart' },
  { to: 100, suffix: '%', label: 'Recalculated in real time', sub: 'Every scan updates your basket instantly' },
  { to: 0, suffix: '', label: 'Surprises at the register', sub: 'Tax and totals estimated before you check out', prefix: '$' },
];

export default function ProblemStats() {
  return (
    <section className="relative border-y border-white/5 bg-navy-800/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-mint-400 sm:text-5xl">
                {stat.prefix}
                <CountUp to={stat.to} duration={1.6} />
                {stat.suffix}
              </div>
              <p className="mt-3 font-display text-base font-semibold text-ink-50">{stat.label}</p>
              <p className="mt-1 text-sm text-ink-400">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
