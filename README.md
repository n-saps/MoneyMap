# MoneyMap
MoneyMap is a comprehensive MERN-based web app designed to help users manage their personal finances effortlessly. It allows you to track income and expenses, analyze financial trends through interactive dashboards, and maintain control over your budget. The platform includes secure user authentication, export to Excel, and a sleek, responsive interface for a smooth experience across devices.
## Features
1. User Authentication
   - Secure sign-up and login with JWT authentication.
   - Protected and persistent user sessions.

2. Dashboard Overview
   - Get a quick snapshot of total balance, income, and expenses through summary cards.
   - View recent transactions and financial charts at a glance.

3. Income Management
   - Add, view, and delete income sources.
   - Export all income data to Excel with a single click.

4. Expense Management
   - Add, view, and delete expenses with category-based tracking.
   - Download expense data in Excel format for further use.

5. Interactive Charts
   - Gain insights with Bar, Pie, and Line charts for income and expenses.

6. Recent Transactions
   - Instantly access the most recent income and expense records.

7. Reports
   - Export both income and expense records into Excel for offline reporting and analysis.

8. Mobile-Responsive UI
   - Fully optimized for desktops, tablets, and smartphones.

9. Intuitive Navigation
   - Sidebar menu for easy access to Dashboard, Income, Expenses, and Logout.

10. Quick Delete
   - Hover over income or expense cards to reveal a one-click delete option.

## Tech Stack
 - Frontend: React, Vite, Tailwind CSS, Recharts, Axios, React Router, Emoji Picker
 - Backend: Node.js, Express, MongoDB, Mongoose, JWT, Multer, XLSX
 - Authentication: JWT (JSON Web Tokens)
 - File Uploads: Multer (for profile images)
 - Excel Export: XLSX

## Project Structure
```bash
backend/
  config/
  controller/
  middlewares/
  models/
  routes/
  uploads/
  .env.example
  server.js

frontend/
  expense-tracker/
    src/
      components/
      context/
      hooks/
      pages/
      utils/
    index.html
    package.json

```

## Getting Started
### Prerequisites
 - Node.js & npm
 - MongoDB database

### Backend Setup
1. Install dependencies:
   ```bash
   cd backend
   npm install

2. Configure environment variables:
   - Copy .env.example to .env and fill in your MongoDB URI and JWT secret.

3. Start the backend server:
   ```bash
   npm run dev
The backend runs on http://localhost:8000 by default.

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend/expense-tracker
   npm install

2. Start the frontend:
   ```bash
   npm run dev
The frontend runs on http://localhost:5173 by default.


## Usage
 - Sign Up / Login:
&nbsp;Create an account or log in with your credentials.

 - Dashboard:
&nbsp;View your financial summary, recent transactions, and charts.

 - Add Income/Expense:
&nbsp;Use the forms to add new income sources or expenses. Optionally, pick an emoji icon.

 - Delete:
&nbsp;Hover over a transaction card to reveal the delete button.

 - Export:
&nbsp;Download your income or expense data as Excel files.

 - Profile Image:
&nbsp;Upload a profile picture during sign-up.
