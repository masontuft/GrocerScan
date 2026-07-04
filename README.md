# GroceryScan — Marketing Site

Informational landing page for [GroceryScan](https://github.com/masontuft/GroceryScan), a mobile app that scans grocery barcodes, compares live pricing across Kroger, Instacart, and Walmart, and estimates a tax-inclusive checkout total in real time.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and animated components from [reactbits.dev](https://reactbits.dev).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. Enable **Settings → Pages → Source → GitHub Actions** on the repo once for this to take effect.
