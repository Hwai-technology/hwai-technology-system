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


Comprehensive Report for HWAI Technology Platform

-----------------------------

## 1. Introduction
HWI Technology Platform is an integrated management system for digital projects, allowing control over projects, contributors, investors, and accurate profit calculation using **project-specific tokens**. The platform includes a **Dashboard** for administrators and users with an easy-to-use and fully integrated graphical interface.

## 2. Platform Objectives
1. Efficient and secure management of digital projects.
2. Enable contributors to monitor their profits transparently.
3. Enable investors to support projects and track the impact of their investments.
4. Protect project files and content using tokens and verification codes.
5. Generate detailed reports (PDF) for each contributor or project.
6. Organize general company information (Logo, FAQ, Contact Information).

## 3. Users and Permissions

### A) Admin
- Manage contributors: assign them to projects and set their profit share (10-30%).
- Manage projects: add new projects, edit project details, set selling price, and project description.
- Manage tokens: create project-specific tokens to track sales and profits.
- Manage platform content:
  - FAQ page for each project.
  - Contact information page.
  - Upload and update the company logo.
- Manage profits:
  - Automatically record contributors' profits according to project sales and tokens.
  - Generate PDF files for each contributor containing profit details and shares.
- Display details of cryptocurrencies or tokens used on the platform.
- Delete or modify contributors or project data when needed.

### B) Contributors
- View projects they are involved in and their share percentage.
- Know the number of tokens produced for each project and the number of associated sales.
- View profits calculated automatically.
- Download PDF file showing their profit share.
- Follow updates of the projects they are associated with.

### C) Investors
- Create a personal account on the platform.
- View projects and support them via a **donation form**.
- Track profits generated from their project support.
- Receive general project reports without accessing contributors' details.

## 4. Project Management
- Each project contains:
  - Project name, description, selling price, and project tokens.
  - Associated contributors with their percentage share.
  - Ability to generate PDF files for each contributor showing their profit share.
  - Ability to track sales and number of tokens sold.

## 5. Tokens
- **Purpose:** Track sales and profits for each project.
- **Management:** Generated when the project is created by the admin.
- **Usage:**
  - Automatically calculate contributors' profits.
  - Verify contributors and investors' access to project data.
  - Protect files and content from unauthorized access.

## 6. Report and File Generation
- **PDF Reports:** For each contributor showing:
  - Project name, contribution percentage, number of tokens sold, earned profits.
  - Generated automatically upon updating project profits or on contributor request.
- **Database:** Store all files and reports for future reference.

## 7. General Platform Content
- FAQ page for each project.
- Contact information page (email, phone, social media).
- Company logo and branding.
- Display currencies or tokens used for financial transactions.

## 8. Technical Workflow

### A) Backend Architecture
- **Programming Language:** PHP using Slim Framework.
- **Tasks:**
  - Manage projects, contributors, and investors.
  - Generate tokens for verification and profit calculation.
  - Create JWT Token to verify access validity.
  - Generate PDF files for profits and reports.
  - Protect access to static files and projects.

### B) Frontend
- **Programming Language:** Nuxt.js (SSR or SPA).
- **Tasks:**
  - Display Dashboard for each user type.
  - Show projects, contributors, and investors.
  - Download PDF files and reports after token verification.

### C) Database
- Store:
  - User information (admin, contributors, investors).
  - Projects and associated tokens.
  - Contributors' percentages, sales, and profit calculations.
  - Records of file and report downloads.

### D) Storage and Files
- Static files and PDFs: Can be stored on VPS or internal CDN.
- Access protection: Using JWT Token or Signed URL for each file.

## 9. Platform Features
1. High security: Protect files and content using tokens and JWT verification.
2. Financial transparency: Each contributor knows their share accurately and token-related sales.
3. Investor tracking: Monitor impact of their investments and company sales.
4. Easy management: Comprehensive admin dashboard to manage everything from one place.
5. Report generation: Automatic PDF for each project and contributor with permanent storage.
6. Flexibility: Add new projects, contributors, or modify profit percentages easily.

## 10. Conclusion
HWI Technology Platform is designed as a complete environment for managing digital projects, with a token-based system for sales and profit calculation, strong content protection, a user-friendly interface according to role (Admin, Contributor, Investor), and precise report generation for each project, contributor, and investor.

-----------------------------

