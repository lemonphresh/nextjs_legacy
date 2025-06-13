This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Installation

This project uses [pnpm](https://pnpm.io/) for package management. If you have Node.js 16.13+ or later, you can enable pnpm using [corepack](https://nodejs.org/api/corepack.html):

```bash
corepack enable pnpm
```

Then, install dependencies:

```bash
pnpm install
```

## Getting Started

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Running Storybook

To start Storybook locally, run:

```bash
pnpm storybook
```

This will launch Storybook at [http://localhost:6006](http://localhost:6006) by default.

## Testing in This Project

This project uses two main tools for testing:

### 1. Vitest

[Vitest](https://vitest.dev/) is a fast unit testing framework powered by Vite. It is used for running unit and integration tests on your application code.

**Common Vitest Commands:**

- `pnpm test` or `pnpm vitest`: Runs all tests in watch mode.
- `pnpm vitest run`: Runs all tests once (useful for CI).
- `pnpm vitest --coverage`: Runs tests and generates a code coverage report.

**Test Files:**

- Place your test files alongside your source files, using the `.test.ts` or `.spec.ts` (or `.js`) suffix.

**Configuration:**

- Vitest is configured via the `vitest.config.ts` file at the root of the project.

---

### 2. Playwright

[Playwright](https://playwright.dev/) is used for end-to-end (E2E) testing, simulating real user interactions in a browser.

**Common Playwright Commands:**

- `pnpm playwright test`: Runs all Playwright E2E tests.
- `pnpm playwright codegen <url>`: Launches the Playwright Codegen tool, which records your browser actions and generates test code automatically. Replace `<url>` with the page you want to record.
- `pnpm playwright show-report`: Opens the HTML report for the latest test run.

**Test Files:**

- Place your Playwright tests in the `tests/` directory, using the `.spec.ts` suffix.

**Configuration:**

- Playwright is configured via the `playwright.config.ts` file at the root of the project.

---

### Integration Notes

- Use Vitest for fast, isolated unit and integration tests.
- Use Playwright for full end-to-end tests that require a browser environment.
- Both tools can be run independently or as part of your CI pipeline.

For more details, refer to the official [Vitest documentation](https://vitest.dev/) and [Playwright documentation](https://playwright.dev/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
