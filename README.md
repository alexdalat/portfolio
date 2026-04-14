This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Production Runtime public/

This app serves `/resume` via a rewrite to `/resume.pdf` in `public/`.

When running with Docker Compose, `public/` is mounted into the container at runtime:

```yaml
volumes:
  - ${PORTFOLIO_PUBLIC_DIR:-./public}:/app/public:ro
```

Set `PORTFOLIO_PUBLIC_DIR` on your production host to the directory you want the container to serve.

Example:

```bash
export PORTFOLIO_PUBLIC_DIR=/srv/portfolio/public
docker compose up -d
```

To make resume updates live without rebuilding the image, place or symlink `resume.pdf` inside that host directory.
Any change to the target file is served by the running container immediately.