# IELTSGrid - Free IELTS Practice Tests

A comprehensive IELTS practice platform built with Next.js, providing free practice tests and study materials for all four IELTS modules.

## Features

- 🆓 Completely free practice tests
- 📱 Mobile-responsive design
- ⏱️ Built-in timer functionality
- 💾 Auto-save progress
- 📊 Instant results and band scores
- 🎯 Multiple question types
- 🔊 Audio support for listening tests

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/ieltsgrid.git
cd ieltsgrid
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── layout/      # Header, Sidebar, Footer
│   ├── ui/          # Reusable UI components
│   ├── ads/         # Advertisement components
│   └── test/        # Test-specific components
├── lib/             # Utility functions
└── types/           # TypeScript definitions

content/             # MDX content files
├── reading/         # Reading test content
├── listening/       # Listening test content
├── writing/         # Writing samples
└── speaking/        # Speaking topics
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.
