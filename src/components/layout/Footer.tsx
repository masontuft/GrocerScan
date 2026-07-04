import icon from '@/assets/icon.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <img src={icon} alt="" className="h-8 w-8 rounded-lg" />
          <div>
            <p className="font-display text-sm font-semibold text-ink-50">GroceryScan</p>
            <p className="text-xs text-ink-400">Know your total before you checkout.</p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-300">
          <li>
            <a href="#how-it-works" className="hover:text-ink-50">
              How it works
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-ink-50">
              Features
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:text-ink-50">
              What's next
            </a>
          </li>
          <li>
            <a
              href="https://github.com/masontuft/GroceryScan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-50"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/5 px-6 py-4 text-center text-xs text-ink-400">
        &copy; {new Date().getFullYear()} GroceryScan. Estimates only — not a guarantee of final checkout totals.
      </div>
    </footer>
  );
}
