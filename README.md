# PROJECT_NAME

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/igor-kan/PROJECT_NAME/workflows/Node.js%20CI/badge.svg)](https://github.com/igor-kan/PROJECT_NAME/actions)

**Live Demo**: [https://igor-kan.github.io/PROJECT_NAME/](https://igor-kan.github.io/PROJECT_NAME/)

One-line description of what this project does and who it's for.

## ✨ Features

- **Feature 1**: Brief description of main feature
- **Feature 2**: Brief description of second feature  
- **Feature 3**: Brief description of third feature
- **Responsive Design**: Mobile-optimized interface
- **Modern Stack**: Built with Next.js, TypeScript, and Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/igor-kan/PROJECT_NAME.git
   cd PROJECT_NAME
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or  
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server  
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Required
NEXT_PUBLIC_APP_URL=http://localhost:3000
API_KEY=your_api_key_here

# Optional
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

See `.env.example` for complete configuration options.

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
PROJECT_NAME/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                   # Utilities and configurations
├── public/                # Static assets
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
├── .env.example          # Environment variables template
├── components.json       # shadcn/ui configuration
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The site will be available at `https://igor-kan.github.io/PROJECT_NAME/`

## 🧪 Testing

```bash
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode
npm run test:e2e    # Run end-to-end tests
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Repository**: https://github.com/igor-kan/PROJECT_NAME