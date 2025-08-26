# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Project Structure

This project follows a modular structure for scalability and maintainability:

```
root/
├── app/                # Main app folder (Vue components, assets, composables, middleware, pages plugins, store, types, utils)
│   ├── assets/         # Global CSS and images
│   ├── components/     # UI and layout components
│   ├── composables/    # Reusable composable functions
│   ├── middleware/     # Route middleware
│   ├── pages/          # Application pages (about, login, register, etc.)
│   ├── plugins/        # Nuxt plugins (e.g., axios)
│   ├── store/          # Pinia stores (auth, notification, preloader)
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
├── content/            # Markdown content files (privacy policies, etc.)
├── public/             # Static files (favicon, logos, robots.txt)
├── server/             # API routes (server/api)
├── .nuxt/              # Nuxt build output (auto-generated)
├── .output/            # Production build output (auto-generated)
├── .data/              # Content database (auto-generated)
├── node_modules/       # Node dependencies
├── package.json        # Project metadata and dependencies
├── nuxt.config.ts      # Nuxt configuration
├── tsconfig.json       # TypeScript configuration
├── content.config.ts   # Nuxt Content module config
├── eslint.config.mjs   # ESLint configuration
├── .gitignore          # Git ignore rules
├── .npmrc              # npm configuration
├── pnpm-lock.yaml      # pnpm lock file
└── README.md           # Project documentation
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
