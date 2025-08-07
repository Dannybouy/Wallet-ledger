# FinTrack - Wallet Ledger Dashboard

A comprehensive, responsive wallet ledger dashboard built with React, TypeScript, and Next.js. This application provides a clean interface for tracking financial transactions with real-time summaries and interactive data visualization.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Transaction Table**: Sortable columns with hover states and smooth animations
- **Real-time Summary Cards**: Dynamic financial metrics with trend indicators
- **User Management**: Multi-user support with avatar display
- **Modern UI**: Clean, professional interface matching Figma specifications
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Memoized sorting and efficient re-renders

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useMemo)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd wallet-ledger-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── Header.tsx        # Application header
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── WalletHeader.tsx  # Wallet-specific header
│   ├── SummaryCards.tsx  # Financial summary cards
│   └── TransactionTable.tsx # Interactive transaction table
├── data/                 # Mock data and API utilities
│   └── mockData.ts       # Sample transaction data
├── types/                # TypeScript type definitions
│   └── dashboard.ts      # Dashboard-related interfaces
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities
\`\`\`

## Key Components

### Header
- FinTrack branding with logo
- Global search functionality
- User avatar and navigation icons

### Sidebar
- Navigation menu with active states
- Dashboard, Transactions, Reports, Settings sections

### WalletHeader
- Wallet status indicator
- Multi-user avatar display
- Tab navigation (Overview/Transactions)
- Share functionality

### SummaryCards
- Total Balance, Credits, Debits, Transaction count
- Trend indicators with color-coded changes
- Responsive grid layout

### TransactionTable
- Sortable columns (Date, Remark, Amount, Currency, Type)
- Color-coded transaction types
- Hover states and smooth animations
- Loading states and empty state handling

## Data Structure

### Transaction Interface
\`\`\`typescript
interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  remark: string;
  amount: number; // Positive = Credit, Negative = Debit
  currency: string;
  type: 'Credit' | 'Debit';
}
\`\`\`

### Dashboard Summary
\`\`\`typescript
interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number; // Percentage
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}
\`\`\`

## Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update CSS variables in `globals.css` for color schemes
- Component-specific styles can be adjusted in individual component files

### Data Integration
- Replace mock data in `data/mockData.ts` with API calls
- Update interfaces in `types/dashboard.ts` as needed
- Add error handling and loading states for real API integration

## Performance Considerations

- **Memoization**: Transaction sorting is memoized to prevent unnecessary re-calculations
- **Lazy Loading**: Components are optimized for efficient rendering
- **Image Optimization**: Next.js Image component used for avatars and assets
- **Bundle Splitting**: Automatic code splitting via Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
