# 🛍️ Taji Food Store

A full-featured e-commerce food delivery app built with the **MERN stack** and designed to scale. Users can browse meals, add items to their cart, check out, and track orders in real time. Admins can manage food items, orders, and customers through a dedicated admin dashboard.

---

## 🔗 Project Info

- **Project Name**: Taji Food Store  
- **Author**: [Nathan Ateka](mailto:nathanateka81@gmail.com)  
- **GitHub Repo**: [gomycode-taji-food-store-project](https://github.com/NathanAteka47/gomycode-taji-food-store-project)  
- **Email**: nathanateka81@gmail.com

---

## 🧰 Tech Stack

### 🌐 Frontend (React + TypeScript + Tailwind)
- React.js (with Vite)
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- Redux Toolkit *(optional)*

### 🛠 Backend (Node + Express + MongoDB + TypeScript)
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT (Authentication)
- Bcrypt.js (Password Hashing)
- Multer/Cloudinary (Image Upload)

---

## 📁 Folder Structure

```

gomycode-taji-food-store-project/
│
├── client/                  # Frontend app
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── App.tsx
│   └── tailwind.config.js
│
├── server/                  # Backend API
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.ts
│   └── tsconfig.json
│
├── .env
└── README.md

````

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js (v18+)
- MongoDB or MongoDB Atlas
- Git
- VS Code or another IDE

---

### 🔧 Installation & Running the App

#### 1. Clone the Repository

```bash
git clone https://github.com/NathanAteka47/gomycode-taji-food-store-project.git
cd gomycode-taji-food-store-project
````

#### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env        # Update with your actual environment variables
npm run dev
```

#### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`server/.env`)

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tajifood
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET=your_secret
```

### Frontend (`client/.env`)

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## ✅ Features

### 👨‍🍳 User Features

* Browse food items by category
* View product details
* Add/remove from cart
* Register/login with JWT
* Checkout with payments
* View order status

### 🧑‍💼 Admin Features

* Admin login
* Create/update/delete food items
* Order management (status updates)
* View all users and orders
* Upload product images via Cloudinary

---

## 📅 7-Day Project Plan

| Day | Focus Area              | Description                                                            |
| --- | ----------------------- | ---------------------------------------------------------------------- |
| 1   | Boilerplate             | Setup client & server folders, install dependencies, TypeScript config |
| 2   | Backend Models & Routes | Create MongoDB models and REST API endpoints                           |
| 3   | Frontend Pages          | Build out main pages (Home, Cart, Login, Register, Product Details)    |
| 4   | Authentication          | Implement JWT login/register for users                                 |
| 5   | Cart & Order Flow       | Add cart functionality and order placement                             |
| 6   | Admin Dashboard         | Build admin routes, upload image system                                |
| 7   | Testing & Deployment    | Final testing, responsiveness, deploy (Render/Vercel)                  |

---

## 🚀 Future Enhancements

* SMS or Email notifications
* Mobile app version (React Native)
* Real-time chat or support
* Discount & coupon system
* In-app wallet integration
* Progressive Web App (PWA) support

---

## 📞 Contact

For questions or collaboration:

* **Name**: Nathan Ateka
* **Email**: [nathanateka81@gmail.com](mailto:nathanateka81@gmail.com)
* **GitHub**: [github.com/NathanAteka47](https://github.com/NathanAteka47)
