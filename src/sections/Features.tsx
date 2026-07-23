import { motion } from 'motion/react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const FEATURES = [
  {
    title: 'Barcode & manual lookup',
    body: 'Scan a barcode, UPC, EAN, or SKU — or search by name when a code won’t scan.',
  },
  {
    title: 'Multi-retailer pricing',
    body: 'Live prices from Kroger, Instacart, and Walmart, normalized so you can compare at a glance.',
  },
  {
    title: 'Promotions & discounts',
    body: 'BOGO deals, digital coupons, and member pricing detected and applied automatically.',
  },
  {
    title: 'Location-aware tax',
    body: 'Grocery and general sales tax rules applied by state, so estimates match what you’ll actually pay.',
  },
  {
    title: 'Real-time basket totals',
    body: 'Add, remove, or update quantities and watch your subtotal, discounts, and tax recalculate instantly.',
  },
  {
    title: 'Offline-first caching',
    body: 'Recently scanned items and your basket persist without a connection, so a dead zone in aisle 7 won’t stop you.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">Everything you need before checkout</h2>
          <p className="mt-4 text-ink-300">
            Built around the parts of grocery shopping that actually cost you money and time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <SpotlightCard
                className="h-full !border-white/10 !bg-navy-800/60"
                spotlightColor="rgba(74, 222, 176, 0.18)"
              >
                <h3 className="font-display text-lg font-semibold text-ink-50">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-300">{feature.body}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
