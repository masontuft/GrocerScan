function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M16.365 1.43c0 1.14-.415 2.06-1.246 2.76-.855.72-1.783 1.14-2.783 1.06-.12-1.09.36-2.19 1.17-2.9.85-.75 2.02-1.19 2.86-1.19-.001.09-.001.18-.001.27zM20.9 17.15c-.5 1.15-1.05 2.24-1.9 3.25-.83.99-1.75 1.99-3.02 2.01-1.24.02-1.64-.72-3.06-.72-1.42 0-1.87.7-3.04.74-1.24.05-2.19-1.06-3.03-2.05-1.72-2.02-3.05-5.7-1.28-8.24 1.05-1.5 2.75-2.44 4.55-2.47 1.2-.02 2.33.79 3.06.79.73 0 2.09-.98 3.53-.84.6.03 2.28.24 3.36 1.85-.09.06-2.01 1.14-1.99 3.42.02 2.72 2.44 3.62 2.47 3.63-.02.06-.39 1.29-1.65 2.63z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l9.4-9.7-9.4-9.7zM14 12l2.6-2.6 3.4 1.9c.9.5.9 1.9 0 2.4l-3.4 1.9L14 12zm-1.4 1.4-8 8.3 10.9-6.1-2.9-2.2zm0-2.8 2.9-2.2-10.9-6.1 8 8.3z" />
    </svg>
  );
}

export default function StoreBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {[
        { Icon: AppleIcon, top: 'Coming soon on the', bottom: 'App Store' },
        { Icon: PlayIcon, top: 'Coming soon on', bottom: 'Google Play' },
      ].map(({ Icon, top, bottom }) => (
        <div
          key={bottom}
          className="flex cursor-not-allowed items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-ink-400 opacity-70"
          aria-disabled="true"
        >
          <Icon />
          <span className="text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-wide">{top}</span>
            <span className="block text-sm font-semibold text-ink-300">{bottom}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
