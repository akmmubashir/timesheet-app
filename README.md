# ticktock - Timesheet Management Application

A modern, responsive timesheet management application built with Next.js and TypeScript, designed to help teams track and manage their work hours efficiently.

## Features

- 📅 Weekly timesheet tracking with project categorization
- 📝 Task management with detailed tracking
  - Add, edit, and delete tasks
  - Track hours worked
  - Categorize tasks by project
  - Detailed task descriptions
- 📱 Fully responsive design for desktop and mobile
- 🔐 User authentication with NextAuth.js
- 📊 Visual task status indicators
- 🔄 Real-time state management with Zustand
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- React
- Tailwind CSS
- Zustand (State Management)
- NextAuth.js (Authentication)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ticktock
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with your environment variables:
```env
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── api/              # API routes
├── components/       # Reusable React components
│   ├── Login.tsx     # Login component
│   ├── Header.tsx    # Navigation header
│   ├── TableSheet.tsx # Task table component
│   ├── TaskPopup.tsx # Task creation/editing modal
│   └── TaskTile.tsx  # Individual task display
├── dashboard/        # Dashboard pages
│   └── [id]/         # Weekly timesheet view
├── store/           # Zustand store
│   └── store.ts    # Global state management
├── types/           # TypeScript types
├── utils/           # Utility functions
└── layout.tsx       # Root layout
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Starts the production server
- `npm run format:write` - Formats the code using Prettier

## Usage

1. Log in to your account
2. View your weekly timesheet
3. Add new tasks by clicking the "+" button
4. Edit or delete existing tasks
5. Track your hours worked
6. View task status indicators

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## License

This project is licensed

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.