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

## Docker Production Runtime resume.pdf

This app serves `/resume` via a rewrite to `/Resume/resume.pdf` in `public/`.

When running with Docker Compose, only `resume.pdf` is mounted into the container at runtime.
This keeps all other files that were baked into the image under `public/`.

```yaml
volumes:
  - ./public/Resume/:/app/public/Resume/:ro
```

To make resume updates live without rebuilding the image, point this to a real file or symlink.