# 🧾 Tip Calculator & Order Management

A web application for calculating tips and managing restaurant orders, built with React, TypeScript, and Tailwind CSS.

## 📸 Screenshot

<img width="1920" height="1562" alt="screencapture-alfonsovidrio-github-io-tip-calculator-2025-07-27-23_41_59" src="https://github.com/user-attachments/assets/aad23cac-bb51-4ab6-bc8c-bc522a156c30" />


## ✨ Features

- 🍽️ **Menu Management**: View and select dishes from the menu
- 🛒 **Shopping Cart**: Add and remove items from your order
- 💰 **Tip Calculation**: Choose between 10%, 20%, or 50% tip
- 🧮 **Automatic Totals**: Automatic calculation of subtotal, tip, and total
- 📱 **Responsive Design**: Works perfectly on desktop and mobile

## 🛠️ Technologies Used

- **React 18** - User interface library
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
  
## 🚀 Installation and Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/AlfonsoVidrio/tip-calculator.git
   cd tip-calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   ```text
   http://localhost:5173
   ```
## 📁 Project Structure

```text
tip-calculator/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── MenuItem.tsx
│   │   ├── OrderContents.tsx
│   │   ├── OrderTotals.tsx
│   │   └── TipPercentageForm.tsx
│   ├── data/              # Menu data
│   │   └── db.ts
│   ├── helpers/           # Utility functions
│   │   └── index.ts
│   ├── hooks/             # Custom hooks
│   │   └── useOrder.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx           # Main component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.ts
└── README.md
```

## 🎮 How to Use the Application

1. **Select Dishes**: Click on menu items to add them to your order
2. **Review Order**: See selected items in the right panel
3. **Remove Items**: Use the "✕" button to remove items from the order
4. **Calculate Tip**: Select the desired tip percentage (10%, 20%, 50%)
5. **View Totals**: Review the automatically calculated subtotal, tip, and total
6. **Save Order**: Finalize your order with the "Save Order" button


## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build application for production
npm run preview      # Preview production build
npm run deploy      # Deploy to GitHub Pages
```
