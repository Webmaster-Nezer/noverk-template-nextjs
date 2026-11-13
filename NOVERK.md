# Notes for Noverk Web Code

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and shadcn/ui components in src/components/ui, tested with Vitest and Testing Library.

## Commands
- `npm install` once, then `npm run dev` (http://localhost:3000)
- `npm test` runs the tests, `npm run lint` and `npm run typecheck` the checks
- `npm run build` makes the production build
- Add shadcn/ui components with `npx shadcn@latest add <name>`

## Conventions
- Keep changes small and tested: add or update a test with every change.
- Secrets never go in the code: read them from environment variables and list their names in .env.example.
- CI runs the same commands on every pull request; keep it green.
