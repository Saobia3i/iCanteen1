# iCanteen: A Smart Canteen Management System

**Course:** CSE 3100
A web-based system to streamline the operations of institutional canteens — from ordering to inventory and real-time analytics.

---

## 📖 Table of Contents

* About the Project
* Key Features
* Target Audience
* UI Design
* Technology Stack
* Getting Started

  * Prerequisites
  * Installation
  * Running the Application
* Usage
* Project Structure
* Contributing
* Team
* License

---

## 📌 About the Project

**iCanteen** is a full-stack Smart Canteen Management System developed as a course project for CSE 3100. It transforms traditional canteen operations by integrating:

* QR-based table orders
* Smart inventory control
* Real-time order tracking
* Staff-facing dashboards
* Loyalty rewards & more

Our mission is to reduce order waiting time, digitize operations, and improve customer experience in institutional canteens.

> **Note:** This edition of iCanteen focuses on **Customer** and **Staff** roles only. There are **no Admin pages**. Any administrative tasks are either automated or handled through staff permissions where applicable.

---

## 🚀 Key Features

### ✅ Customer-Side

* Online food ordering & real-time status tracking
* QR-based table ordering
* AI-powered menu suggestions *(upcoming)*
* Feedback system for each item
* Meal plan subscriptions *(optional)*
* Wallet & **BoxPoints** loyalty system

### ✅ Staff-Side

* Live order dashboard with order state transitions
* CRUD interface for menu & inventory *(staff-permitted)*
* Stock alerts and waste logging
* Staff scheduling and management

### 📊 Analytics & Smart Modules

* Sales reports & revenue analytics *(staff-visible)*
* Peak hours and best-selling item insights
* Promotion & coupon system
* Digital queue and display integration

---

## 🎯 Target Audience

* **Customers:** Students, faculty, guests
* **Staff:** Kitchen team, delivery, and table managers

*(There are no Admin pages in this edition.)*

---

## 🎨 UI Design

Modern, responsive interface with role-based navigation and light/dark theme support for **Customer** and **Staff**.

**Figma Link:** *iCanteen UI Design* ([add your share link here](https://www.figma.com/community/file/1531246323983921162))

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Ant Design / Material UI

### Backend

* Laravel (PHP REST API)

### Database

* MySQL 

### Hosting / Cloud

* AWS / DigitalOcean / Vercel *(TBD)*

### DevOps & Tools

* GitHub
* Docker
* Postman
* Figma

---

## ⚙️ Getting Started

### 🔧 Prerequisites

* PHP >= 8.0
* Composer
* Node.js (for frontend)
* MySQL 


### 📦 Installation

**Clone the repository**

```bash
git clone https://github.com/your-username/iCanteen.git
cd iCanteen
```

**Backend (Laravel)**

```bash
cd backend
composer install
cp .env.example .env      # Configure DB credentials
php artisan key:generate
php artisan migrate
php artisan db:seed       # Optional: Seed sample data
php artisan serve
```

**Frontend (React)**

```bash
cd ../frontend
npm install
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Usage

* Register or log in using demo credentials.
* Browse the menu, place an order, and select payment method.
* View real-time order status and notifications.
* **Staff** can manage order queues and inventory, see analytics, and handle promotions/coupons.

*(There are no Admin pages; staff users handle operational tasks.)*

---

## 📁 Project Structure

```
iCanteen/
├── frontend/            # React + Material Ui + Ant Design frontend
├── backend/             # Laravel backend
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── ...
└── README.md            # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repository
2. Create your branch: `git checkout -b feature/YourFeature`
3. Commit: `git commit -m 'Add YourFeature'`
4. Push: `git push origin feature/YourFeature`
5. Open a Pull Request

Please follow existing conventions and include tests where appropriate.

---

## 👥 Team
* Saobia Islam Tinni (20220204088)
* Nusrat Jahan Mim (20220204092)

---

## 📄 License

This project is licensed under the **MIT License**.
