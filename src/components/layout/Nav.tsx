import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import icon from '@/assets/icon.png';

const LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#roadmap', label: "What's next" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 20, 32, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={icon} alt="" className="h-8 w-8 rounded-lg" />
          <span className="font-display text-sm font-semibold tracking-wide text-ink-50">GroceryScan</span>
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-ink-300 transition-colors hover:text-ink-50">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="rounded-full bg-mint-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-transform hover:scale-105"
        >
          Coming soon
        </a>
      </nav>
    </motion.header>
  );
}
