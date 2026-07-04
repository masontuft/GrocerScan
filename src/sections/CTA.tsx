import GradientText from '@/components/reactbits/GradientText';
import StoreBadges from '@/components/StoreBadges';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mint-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <GradientText
          colors={['#4adeb0', '#38bdf8', '#4adeb0']}
          className="mx-auto px-0 py-0 font-display text-3xl font-bold sm:text-4xl"
          animationSpeed={6}
        >
          Built to launch on iOS and Android
        </GradientText>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          GroceryScan is still in development. The badges below will go live once it ships to the stores.
        </p>
        <div className="mt-8">
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
