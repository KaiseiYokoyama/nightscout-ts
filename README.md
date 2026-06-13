# nightscout-ts

TypeScript library for Nightscout.

## Development

### Prerequisites

- Node.js 20+
- [Corepack](https://nodejs.org/api/corepack.html) (bundled with Node.js 16.9+)

### Setup

```bash
corepack enable
yarn install
```

### Scripts

| Command | Description |
|---------|-------------|
| `yarn build` | Compile TypeScript to `dist/` |
| `yarn test` | Run Jest tests with coverage |
| `yarn lint` | Run ESLint with cache |

### CI

GitHub Actions runs on every push to `main` and on pull requests targeting `main`.

Jobs:
1. **yarn.lock is up-to-date** – `yarn install --immutable`
2. **Lint** – `yarn lint`
3. **Test** – `yarn test`
4. **Build** – `yarn build`

Jobs 2–4 depend on job 1 and are skipped if it fails.

### Branch Protection (one-time setup)

To require all CI jobs to pass before merging, configure branch protection on `main`:

1. Go to **Settings → Branches → Add branch protection rule**
2. Branch name pattern: `main`
3. Enable **Require status checks to pass before merging**
4. Add these required status checks:
   - `yarn.lock is up-to-date`
   - `Lint`
   - `Test`
   - `Build`
5. Optionally enable **Require branches to be up to date before merging**
