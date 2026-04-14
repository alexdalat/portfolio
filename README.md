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

This app serves `/resume` via a rewrite to `/resume.pdf` in `public/`.

When running with Docker Compose, only `resume.pdf` is mounted into the container at runtime.
This keeps all other files that were baked into the image under `public/`.

```yaml
volumes:
  - ${PORTFOLIO_RESUME_FILE:-./public/Resume.pdf}:/app/public/resume.pdf:ro
```

Set `PORTFOLIO_RESUME_FILE` on your production host to the resume file you want to serve.

Example:

```bash
export PORTFOLIO_RESUME_FILE=/srv/portfolio/public/Resume.pdf
docker compose up -d
```

To make resume updates live without rebuilding the image, point this to a real file or symlink.
Any change to the target file is served by the running container immediately while all other bundled assets remain available.