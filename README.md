<p align="center">
  <img
    width="360"
    height="360"
    alt="logo"
    src="https://github.com/user-attachments/assets/bbc18cc2-2c6a-45d0-8d4d-94bd23c0a1da"
    style="box-shadow: 0 30px 60px rgba(0,0,0,0.5); border-radius: 60px;"
  />
</p>




# **🍱 iCanteen: A Smart Canteen Management System**


**Course:** CSE 3100
A web-based system to streamline the operations of institutional canteens — from ordering to staff management and real-time analytics.

<ins>**📖 Table of Contents**</ins>

About the Project

Key Features

Target Audience

UI Design

Technology Stack

Getting Started

Prerequisites

Installation

Running the Application

Usage

Project Structure

Contributing

Team

License

<ins>**📌 About the Project**</ins>

iCanteen is a full-stack Smart Canteen Management System developed as a course project for CSE 3100.
It transforms traditional canteen operations by integrating:

Role-based dashboards for staff and customers

Real-time order tracking and status updates

Staff shift and salary overview

Menu & order management (frontend-ready; backend planned)

Our mission is to reduce order waiting time, digitize operations, and improve customer experience in institutional canteens.

### <ins><b> Key Features</b></ins>

✅ Customer-Side

Online food ordering & real-time status tracking (frontend-ready)

View menu and place orders

✅ Staff/Admin-Side

Staff dashboard with key stats

Manage and track orders

View assigned shifts

View personal profile including salary info (secure, only for logged-in staff)

<ins><b>📊 Analytics & Smart Modules</b></ins>

Dashboard stats: total orders, pending/delivered orders, active staff

Conditional rendering of pages: Orders, Shifts, Profile

Responsive design with background image for staff pages

<ins><b>🎯 Target Audience</b></ins>

Customers: Students, faculty, guests

Staff: Kitchen team, delivery staff, table managers

Admins: Canteen managers and institutional heads

🎨 UI Design

Modern, responsive dashboard with role-based navigation.

Staff pages have background image for improved UX

Navigation between pages: Dashboard, Orders, Shifts, Profile

<ins>🔗 Technology Stack</ins>

Frontend:

React.js

Material UI / Ant Design

TailwindCSS for responsive layouts

React Router v6

Backend:

Laravel (PHP REST API)

MySQL 

DevOps & Tools:

GitHub

Vercel (Frontend Deployment)

Postman (API Testing)

⚙️ Getting Started
🔧 Prerequisites

Node.js >= 18

NPM >= 8

PHP >= 8 (for backend, future use)

MySQL or PostgreSQL (for backend, future use)

**📦 Installation**

Clone the repository:

git clone https://github.com/<your-username>/iCanteen.git
cd iCanteen/frontend


Install frontend dependencies:

npm install

🏃‍♂️ Running the Application
npm run dev


Open your browser at http://localhost:5173

Staff pages will be accessible after logging in as staff

Customer pages accessible after login

Note: Backend API is not yet implemented. Current app uses mock data for orders, shifts, and profile.

🧪 Usage

Register or log in using demo credentials

Navigate through Dashboard, Orders, Shifts, and Profile

Staff can view stats, assigned shifts, and salary information

Customer can browse menu and place orders

📁 Project Structure
iCanteen/
├── frontend/           # React + Material UI / Ant Design frontend
│   ├── src/
│   │   ├── assets/     # Images, logos, background
│   │   ├── auth/       # Login and Register pages
│   │   ├── pages/
│   │   │   ├── staff/
│   │   │   │   ├── StaffHome.jsx
│   │   │   │   ├── Order.jsx
│   │   │   │   ├── Shifts.jsx
│   │   │   │   └── Profile.jsx
│   │   │   └── customer/
│   │   │       └── CustomerHome.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
└── backend/            # Laravel backend (work in progress)

🤝 Contributing

Contributions are welcome:

Fork the repository

Create your branch: git checkout -b feature/YourFeature

Commit: git commit -m 'Add YourFeature'

Push: git push origin feature/YourFeature

Open a Pull Request

Please follow existing conventions and include tests where appropriate.

👨‍💻 Owner

Saobia Islam 

## ⏱️ WakaTime Tracking

This project was developed across two repositories for the same codebase.

**Total Coding Time (combined): _X hrs Y mins_**  
_(Sum of both badges below)_

[![wakatime – Repo 1](https://wakatime.com/badge/user/7f0860ba-774e-43d9-8390-34249079bba4/project/b6a444c6-e080-4dbd-ad13-7e863cfc6302.svg)](https://wakatime.com/badge/user/7f0860ba-774e-43d9-8390-34249079bba4/project/b6a444c6-e080-4dbd-ad13-7e863cfc6302)
[![wakatime – Repo 2](https://wakatime.com/badge/user/7f0860ba-774e-43d9-8390-34249079bba4/project/11db647e-4f0f-4a6a-97f2-dd586675a17f.svg)](https://wakatime.com/badge/user/7f0860ba-774e-43d9-8390-34249079bba4/project/11db647e-4f0f-4a6a-97f2-dd586675a17f)

📝 License

This project is licensed under the MIT License.
