# Legacy Nextjs

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It includes a modern front-end setup powered by:

- **Next.js App Router**
- **TypeScript**
- [**pnpm**](https://pnpm.io/) for dependency management
- **Storybook** for UI development
- **Vitest** for unit/integration testing
- **Playwright** for end-to-end browser testing

---

## Getting Started

### 1. Install Dependencies

We use `pnpm` for fast and deterministic package installs. If you haven’t enabled `pnpm` yet, run:

```bash
corepack enable pnpm
```

Then install dependencies:

```bash
pnpm install
```

### 2. Run the Development Server

To start the Next.js dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 3. Editing Pages

The main entry page is located in:

```
src/app/page.tsx
```

As you modify this or other files under `app/`, your browser will hot-reload with the changes.

---

## Theming with Design Tokens

We use a design token system synced with our Figma legacy style guide.

### How to Update Colors, Spacing, or Other Tokens

1. Open the token source file:

```
src/app/theme/tokens.json
```

2. Update the values as needed. These may include:

```json
{
  "color-primary": "#004c99",
  "font-size-base": "16px"
}
```

3. Then regenerate the CSS variables with:

```bash
pnpm generate-css-vars
```

This will regenerate:

```
src/app/theme/legacy-theme-tokens.css
```

That file contains all `:root`-scoped CSS variables used across the app, such as:

```css
:root {
  --color-primary: #004c99;
  --font-size-base: 16px;
}
```

You can now use these in any component or stylesheet.

---

## Testing

### Unit + Integration Tests: Vitest

We use [Vitest](https://vitest.dev/) for fast, Vite-powered testing of individual units and component logic.

#### Common Commands

```bash
pnpm test              # Runs tests in watch mode
pnpm vitest run        # Runs all tests once (for CI)
pnpm vitest --coverage # Generates a coverage report
```

#### Test Structure

- All test files live alongside the files they test.
- Use `.test.ts[x]` or `.spec.ts[x]` naming convention.

#### Configuration

Vitest is configured in:

```
vitest.config.ts
```

### End-to-End Tests: Playwright

We use [Playwright](https://playwright.dev/) for automated browser testing.

#### Common Commands

```bash
pnpm playwright test             # Run all E2E tests
pnpm playwright codegen <url>   # Record and generate test code
pnpm playwright show-report     # Open the last test report
```

#### Test Structure

- All Playwright tests live in the `tests/` directory.
- Test files should use `.spec.ts` as a suffix.

#### Configuration

Playwright is configured in:

```
playwright.config.ts
```

This includes:

- Base URL (usually `http://localhost:3000`)
- Auto-starting the dev server via `pnpm dev`
- Tracing and test reporting

> 💡 Playwright can simulate user interaction, test full flows, and verify that your app works in real browsers like Chromium and Firefox.

---

## UI Components via Storybook

This project includes [Storybook](https://storybook.js.org/) to build, preview, and test components in isolation.

### Run Storybook Locally

```bash
pnpm storybook
```

Then visit:

```
http://localhost:6006
```

This is a great way to review component styles and behavior before integration.

---

## Useful Scripts

| Script                   | Description                                  |
| ------------------------ | -------------------------------------------- |
| `pnpm dev`               | Starts the Next.js dev server with Turbopack |
| `pnpm build`             | Builds the production bundle                 |
| `pnpm start`             | Runs the built app (after `build`)           |
| `pnpm lint`              | Runs ESLint across the codebase              |
| `pnpm generate-css-vars` | Rebuilds CSS variables from `tokens.json`    |
| `pnpm storybook`         | Starts Storybook on port 6006                |
| `pnpm build-storybook`   | Builds the static Storybook site             |
| `pnpm vitest`            | Runs all Vitest tests once (for CI)          |
| `pnpm vitest:watch`      | Runs Vitest in watch mode                    |
| `pnpm test:e2e`          | Runs Playwright end-to-end tests             |
| `pnpm test:e2e:ui`       | Runs Playwright E2E tests in UI mode         |
| `pnpm postinstall`       | Applies Flowbite React patch after install   |

---

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── contexts/         # React context providers (e.g. Toast)
├── theme/            # Design tokens and generated CSS
├── tests/            # Playwright end-to-end test files
├── utils/            # Helpers and utilities
```

---

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Docs](https://playwright.dev/)
- [Storybook Docs](https://storybook.js.org/)
- [pnpm Docs](https://pnpm.io/)

---

## 💖 Maintainers

This project is maintained by the Legacy team.
