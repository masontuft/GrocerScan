import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Aurora from '@/components/reactbits/Aurora';
import SplitText from '@/components/reactbits/SplitText';
import GradientText from '@/components/reactbits/GradientText';
import PhoneMockup, { ScanScreen } from '@/components/PhoneMockup';
import StoreBadges from '@/components/StoreBadges';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Aurora colorStops={['#38bdf8', '#4adeb0', '#38bdf8']} amplitude={1.1} blend={0.55} speed={0.6} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/40 to-navy-900" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ opacity: contentOpacity }} className="text-center lg:text-left">
          <SplitText
            text="Know your total before you hit the register."
            tag="h1"
            className="justify-center font-display text-4xl font-bold leading-[1.1] text-ink-50 sm:text-5xl lg:justify-start lg:text-6xl"
            splitType="words"
            delay={40}
            textAlign="center"
          />
          <div className="mx-auto mt-6 max-w-lg text-balance text-lg text-ink-300 lg:mx-0">
            GroceryScan scans barcodes in-store, compares{' '}
            <GradientText
              colors={['#4adeb0', '#38bdf8', '#4adeb0']}
              className="inline-flex px-0 py-0 text-lg font-semibold"
              animationSpeed={5}
            >
              live pricing across Kroger, Instacart, and Walmart
            </GradientText>
            , and estimates your tax-inclusive total in real time.
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 lg:items-start">
            <StoreBadges />
          </div>
        </motion.div>

        <motion.div
          style={{ y: phoneY, rotate: phoneRotate }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PhoneMockup>
            <ScanScreen />
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  );
}
