import ScrollStack, { ScrollStackItem } from '@/components/reactbits/ScrollStack';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import PhoneMockup, { ScanScreen, PricingScreen, TaxScreen, BasketScreen } from '@/components/PhoneMockup';

const STEPS = [
  {
    n: '01',
    title: 'Scan the barcode',
    body: 'Point your camera at any barcode, UPC, or SKU. GroceryScan resolves the product instantly — no manual lookup needed.',
    screen: <ScanScreen />,
    accent: 'from-[#10212c] to-navy-800',
  },
  {
    n: '02',
    title: 'See live pricing & promotions',
    body: 'Current price, unit size, and active promotions — BOGO, digital coupons, member pricing — pulled from your selected store.',
    screen: (
      <PricingScreen
        rows={[
          { store: 'Kroger', price: '$0.58' },
          { store: 'Walmart', price: '$0.52', best: true },
          { store: 'Instacart', price: '$0.61' },
        ]}
      />
    ),
    accent: 'from-[#0f2420] to-navy-800',
  },
  {
    n: '03',
    title: 'Location-aware tax',
    body: 'Set your store or ZIP code and GroceryScan applies the right grocery vs. general sales tax rules for your state.',
    screen: <TaxScreen />,
    accent: 'from-[#10212c] to-navy-800',
  },
  {
    n: '04',
    title: 'Real-time basket total',
    body: 'Add items as you shop. Subtotal, discounts, and tax recalculate instantly, so the total on your screen matches the register.',
    screen: <BasketScreen />,
    accent: 'from-[#0f2420] to-navy-800',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal containerClassName="my-0" textClassName="font-display text-ink-50">
          How it works, one scan at a time
        </ScrollReveal>
      </div>

      <ScrollStack useWindowScroll itemDistance={140} itemStackDistance={24} baseScale={0.88} rotationAmount={0.4}>
        {STEPS.map(step => (
          <ScrollStackItem
            key={step.n}
            itemClassName={`bg-gradient-to-br ${step.accent} border border-white/5`}
          >
            <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <span className="font-display text-sm font-semibold text-mint-400">{step.n}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink-50 sm:text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-md text-ink-300">{step.body}</p>
              </div>
              <div className="justify-self-center">
                <PhoneMockup width={190}>{step.screen}</PhoneMockup>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
