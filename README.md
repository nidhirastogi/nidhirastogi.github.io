# Nidhi Rastogi - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS showcasing research, publications, teaching, and professional accomplishments in AI Security and Cyberthreat Intelligence.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Responsive Design**: Mobile-first design that works on all devices
- **Professional Styling**: Tailwind CSS with custom color palette
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Built-in Next.js SEO features and metadata
- **Fast Performance**: Static site generation for optimal loading speeds

## 🏗️ Architecture

```
├── app/                      # Next.js app router pages
│   ├── about/               # About page
│   ├── blog/                # Blog/updates page
│   ├── contact/             # Contact page
│   ├── news/                # News & media page
│   ├── publications/        # Publications list
│   ├── research/            # Research areas
│   ├── resources/           # Open source resources
│   ├── teaching/            # Teaching page
│   ├── team/                # Team members
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable React components
├── styles/                  # Global CSS styles
├── public/                  # Static assets
└── content/                 # Content (for future MDX integration)
```

## 🛠️ Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Visit http://localhost:3000

### Build

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch via GitHub Actions.

## 📄 License

See [LICENSE.md](LICENSE.md) for details.

## 👤 Author

**Nidhi Rastogi, PhD**
- Assistant Professor, Rochester Institute of Technology
- Email: nxrvse@rit.edu
- Website: https://nidhirastogi.github.io
- LinkedIn: [rastoginidhi](https://www.linkedin.com/in/rastoginidhi)
- GitHub: [aiforsec](https://github.com/aiforsec)

## 🎨 Design

- **Primary Colors**: Navy Blue (#3f51b5) and Teal (#009688)
- **Typography**: System fonts with sans-serif stack
- **Components**: Card-based layouts, responsive navigation, hero sections
