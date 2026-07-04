import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  width?: number;
}

export default function PhoneMockup({ children, className = '', width = 260 }: PhoneMockupProps) {
  return (
    <div
      style={{ width }}
      className={`relative mx-auto rounded-[2.75rem] border-[6px] border-navy-950 bg-navy-950 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" />
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-navy-800 to-navy-900">
        {children}
      </div>
    </div>
  );
}

export function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-white/5 px-4 pb-3 pt-6">
      <p className="font-display text-sm font-semibold text-ink-50">{title}</p>
      {subtitle && <p className="mt-0.5 text-[11px] text-ink-400">{subtitle}</p>}
    </div>
  );
}

export function ScanScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="Scan" subtitle="Point at a barcode" />
      <div className="relative mx-4 mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black/40">
        <div className="relative h-24 w-40">
          {(['top-0 left-0 border-r-0 border-b-0', 'top-0 right-0 border-l-0 border-b-0', 'bottom-0 left-0 border-r-0 border-t-0', 'bottom-0 right-0 border-l-0 border-t-0'] as const).map(
            (pos, i) => (
              <span key={i} className={`absolute h-4 w-4 rounded-[2px] border-2 border-mint-400 ${pos}`} />
            )
          )}
          <motion.div
            className="absolute inset-x-0 h-0.5 rounded-full bg-mint-400 shadow-[0_0_8px_2px_rgba(74,222,176,0.6)]"
            animate={{ top: ['10%', '85%', '10%'] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <svg viewBox="0 0 100 40" className="absolute inset-0 h-full w-full opacity-70">
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={i}
                x={i * 5}
                y={6}
                width={i % 3 === 0 ? 2 : 1}
                height={28}
                fill="#8fa3a8"
              />
            ))}
          </svg>
        </div>
      </div>
      <p className="px-4 py-4 text-center text-[11px] text-ink-400">Resolving product…</p>
    </div>
  );
}

interface PriceRow {
  store: string;
  price: string;
  best?: boolean;
}

export function PricingScreen({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="Organic Bananas" subtitle="1 lb · UPC 4011" />
      <div className="flex-1 space-y-2 px-4 py-4">
        {rows.map(row => (
          <div
            key={row.store}
            className={`flex items-center justify-between rounded-xl border px-3 py-2.5 ${
              row.best ? 'border-mint-500/50 bg-mint-500/10' : 'border-white/5 bg-white/[0.03]'
            }`}
          >
            <span className="text-xs font-medium text-ink-50">{row.store}</span>
            <span className={`font-display text-sm font-semibold ${row.best ? 'text-mint-400' : 'text-ink-300'}`}>
              {row.price}
            </span>
          </div>
        ))}
        <div className="mt-3 rounded-xl bg-sky-500/10 px-3 py-2 text-[11px] text-sky-400">
          Active promo: Member pricing applied
        </div>
      </div>
    </div>
  );
}

export function TaxScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="Checkout Estimate" subtitle="Austin, TX 78701" />
      <div className="flex-1 space-y-3 px-4 py-4 text-xs">
        {[
          ['Subtotal', '$42.18'],
          ['Discounts', '-$3.40'],
          ['Grocery tax (0%)', '$0.00'],
          ['Non-food tax', '$0.62'],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between text-ink-300">
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
        <div className="my-2 h-px bg-white/10" />
        <div className="flex justify-between font-display text-sm font-semibold text-ink-50">
          <span>Estimated total</span>
          <span className="text-mint-400">$39.40</span>
        </div>
      </div>
    </div>
  );
}

export function BasketScreen() {
  const items = [
    ['Organic Bananas', '$1.29'],
    ['2% Milk, 1gal', '$3.79'],
    ['Sourdough Bread', '$4.49'],
    ['Chicken Breast', '$8.99'],
  ];
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="Basket" subtitle="4 items" />
      <div className="flex-1 space-y-2 overflow-hidden px-4 py-3 text-xs">
        {items.map(([name, price]) => (
          <div key={name} className="flex justify-between text-ink-300">
            <span>{name}</span>
            <span>{price}</span>
          </div>
        ))}
      </div>
      <div className="space-y-1 border-t border-white/5 px-4 py-3 text-xs">
        <div className="flex justify-between text-ink-300">
          <span>Tax</span>
          <span>$0.62</span>
        </div>
        <div className="flex justify-between font-display text-sm font-semibold text-ink-50">
          <span>Total</span>
          <span className="text-mint-400">$19.18</span>
        </div>
      </div>
    </div>
  );
}
