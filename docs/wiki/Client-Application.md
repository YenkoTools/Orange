# Client Application

The Orange Client is a TypeScript-based frontend built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and the community edition of [AG Grid](https://www.ag-grid.com/). It provides a web UI that consumes the Orange Service API and supports both Astro and React components.

## Overview

| Item | Details |
|------|---------|
| **Framework** | [Astro](https://astro.build/) v5 |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v3 |
| **Data Grid** | [AG Grid Community](https://www.ag-grid.com/) v35 |
| **Test Runner** | [Vitest](https://vitest.dev/) v3 |
| **Runtime** | Node.js 22 (development) / nginx 1.27 (production container) |

Astro's island architecture means pages are rendered as static HTML by default; interactive components (including React components) are hydrated only when needed.

## Prerequisites

- [Node.js 22+](https://nodejs.org/) and npm

## Getting Started

### 1. Navigate to the Client Directory

```bash
cd Client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and update the values to point at your running Service instance:

```bash
cp .env.example .env
```

Open `.env` and set the API base URL to match the running Service port (default: `5001`):

```dotenv
PUBLIC_API_BASE_URL=http://localhost:5001
PUBLIC_API_PORT=5001
```

The `PUBLIC_` prefix makes these variables available in client-side code via `import.meta.env`.

### 4. Start the Development Server

```bash
npm run dev
```

The Client is available at **http://localhost:4321** by default.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Astro development server with hot-reload |
| `npm run build` | Type-check and build the static site for production |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run unit tests with Vitest |
| `npm run test:ui` | Run tests using the Vitest interactive UI |
| `npm run format` | Format all source files with Prettier |

## Project Structure

```
Client/
├── src/
│   ├── components/         # Shared Astro (and React) components
│   │   ├── Header.astro    # Top navigation bar
│   │   ├── Sidebar.astro   # Side navigation menu
│   │   └── Footer.astro    # Page footer
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML layout with Header, Sidebar, and Footer
│   ├── pages/              # File-based routing (each .astro file = one route)
│   │   ├── index.astro     # Home page (/)
│   │   ├── states.astro    # US States AG Grid page (/states)
│   │   └── about.astro     # About page (/about)
│   └── styles/
│       └── global.css      # Global styles and Tailwind base imports
├── tests/
│   └── example.test.ts     # Vitest unit tests
├── public/                 # Static assets served as-is
├── .env.example            # Environment variable template
├── astro.config.mjs        # Astro configuration (integrations, plugins)
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration with path aliases
├── vitest.config.ts        # Vitest test runner configuration
├── Dockerfile              # Multi-stage Docker build (build → nginx)
├── nginx.conf              # nginx configuration for serving the static site
└── package.json            # npm dependencies and scripts
```

### Path Aliases

The `tsconfig.json` defines the following import aliases:

| Alias | Maps To |
|-------|---------|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@styles/*` | `src/styles/*` |

## Pages

### Home (`/`)

Displays a summary of the Orange project, its architecture, and the live API connection URL (read from `PUBLIC_API_BASE_URL`).

### US States (`/states`)

Renders the full list of all 50 US states in an AG Grid Community data grid with sorting, filtering, and column resizing enabled.

### About (`/about`)

Describes the technology stack, architecture overview, API response format, and getting-started steps.

## AG Grid Community

The Client uses the **Community** (free, open-source) edition of AG Grid. Modules are registered once at the entry point:

```typescript
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);
```

AG Grid theme styles are imported per-page:

```css
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-alpine.css";
```

## React Components

Astro supports React (and other UI frameworks) via official integrations. To add a React component:

1. Install the React integration:

   ```bash
   npm install @astrojs/react react react-dom
   npx astro add react
   ```

2. Create a `.tsx` component in `src/components/`.

3. Use the component in any `.astro` page with a client directive to hydrate it:

   ```astro
   ---
   import MyReactComponent from "@components/MyReactComponent";
   ---

   <MyReactComponent client:load />
   ```

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in interactive watch mode
npm run test:ui
```

Tests live in the `tests/` directory and use [Vitest](https://vitest.dev/) as the test runner.

## Building for Production

```bash
npm run build
```

This runs `astro check` (TypeScript type-checking) followed by `astro build`. The output is placed in the `dist/` directory as a fully static site ready to be served by any HTTP server.

To preview the production build locally:

```bash
npm run preview
```

## Docker

The Client ships with a multi-stage `Dockerfile`:

| Stage | Base Image | Purpose |
|-------|-----------|---------|
| `build` | `node:22-alpine` | Install dependencies and produce the static `dist/` output |
| `runtime` | `nginx:1.27-alpine` | Serve the static files on port **5001** |

### Build and Run Manually

```bash
# From the Client directory
docker build -t orange-client .
docker run -p 5001:5001 orange-client
```

The Client will be available at **http://localhost:5001**.

### Using Docker Compose

Run both the Service and the Client together from the repository root:

```bash
docker-compose up --build
```

| Container | Port | URL |
|-----------|------|-----|
| `orange-service` | 7001 | http://localhost:7001 |
| `orange-client` | 5001 | http://localhost:5001 |

The Client container waits for the Service to pass its health check before starting.

## Troubleshooting

### Port Already in Use

Change the Astro development server port:

```bash
npm run dev -- --port 4322
```

### Environment Variables Not Loaded

Ensure `.env` exists in the `Client/` directory (not the repo root) and that all variable names start with `PUBLIC_`.

### Build Fails on Type Errors

Run the type checker on its own to see detailed errors:

```bash
npx astro check
```

### API Calls Failing in Development

1. Verify the Service is running (default: `http://localhost:5001`).
2. Confirm `PUBLIC_API_BASE_URL` in `.env` matches the Service URL.
3. Check the browser console for CORS errors — the Service must allow the Client origin.

## Next Steps

- Explore the [Development Setup](Development-Setup) guide
- Learn about the [Architecture Overview](Architecture)
- Review the [API Documentation](API-Documentation)

---
*Maintained by Hallcrest Engineering*
