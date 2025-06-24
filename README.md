## 🛍️ Taji Food Store

A full-featured, scalable food ecommerce web app built with the **MERN stack**, supporting customers and admins for meal ordering, delivery tracking, and product management.

---

### 📘 Project Information

* **Project Name**: Taji Food Store
* **Author**: Nathan Ateka
* **Email**: [nathanateka81@gmail.com](mailto:nathanateka81@gmail.com)
* **GitHub Repo**: [gomycode-taji-food-store-project](https://github.com/NathanAteka47/gomycode-taji-food-store-project)

---

### 📅 Project Plan – 7-Day Timeline

| Day | Task                       | Description                                                |
| --- | -------------------------- | ---------------------------------------------------------- |
| 1   | Project Setup              | Folder structure, TypeScript configs, install dependencies |
| 2   | Backend APIs               | Set up MongoDB models, Express routes, controller logic    |
| 3   | Frontend Pages             | Setup with Vite + Tailwind + React Router, page layout     |
| 4   | Auth System                | JWT auth for users and admins                              |
| 5   | Cart & Order Flow          | Cart logic, checkout, order model and routes               |
| 6   | Admin Dashboard            | CRUD for products/orders, Cloudinary image upload          |
| 7   | Final Testing & Deployment | Mobile responsiveness, bug fixes, deploy on Vercel/Render  |

---

### 🧰 Tech Stack

#### Frontend:

* React.js (with Vite)
* TypeScript
* Tailwind CSS
* React Router DOM
* Axios
* Redux Toolkit (optional)

#### Backend:

* Node.js
* Express.js
* TypeScript
* MongoDB (via Mongoose)
* JWT + Bcrypt for Auth
* Multer & Cloudinary for media

---

### 🗂 Folder Structure

```
gomycode-taji-food-store-project/
├── client/              # React Frontend
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── store/
│       ├── types/
│       └── App.tsx
│
├── server/              # Node/Express Backend
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── utils/
│       └── app.ts
│
├── .env
└── README.md
```

---

### ⚙️ Setup Instructions

#### Prerequisites:

* Node.js (v18+)
* MongoDB or MongoDB Atlas
* Git
* VS Code

#### 1. Clone & Install

```bash
git clone https://github.com/NathanAteka47/gomycode-taji-food-store-project.git
cd gomycode-taji-food-store-project
```

#### 2. Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

#### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

---

### 🔐 Environment Variables

#### Server `.env`

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tajifood
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=xxx
CLOUDINARY_SECRET=xxx
```

#### Client `.env`

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### 🧱 Database Models (MongoDB)

#### User Model

```ts
name: string;
email: string;
password: string (hashed);
role: 'user' | 'admin';
createdAt, updatedAt
```

#### Product Model

```ts
title: string;
description: string;
price: number;
category: string;
imageUrl: string;
available: boolean;
createdAt, updatedAt
```

#### Order Model

```ts
userId: ObjectId;
items: [
  { productId: ObjectId, quantity: number }
];
total: number;
paymentMethod: 'mpesa' | 'card';
status: 'pending' | 'processing' | 'delivered';
createdAt, updatedAt
```

---

### 📡 API Endpoints

#### 🔐 Auth Routes

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Register user           |
| POST   | `/api/auth/login`    | Login + JWT             |
| GET    | `/api/auth/profile`  | Authenticated user info |

#### 👤 User Routes

\| GET | `/api/users` | Admin: Get all users |
\| GET | `/api/users/:id` | Get single user |
\| DELETE | `/api/users/:id` | Admin: Delete user |

#### 🍔 Product Routes

\| GET | `/api/products` | Get all products |
\| GET | `/api/products/:id` | Get product |
\| POST | `/api/products` | Admin: Add product |
\| PUT | `/api/products/:id` | Admin: Update product |
\| DELETE | `/api/products/:id` | Admin: Delete product |

#### 📦 Order Routes

\| GET | `/api/orders` | Admin: Get all orders |
\| GET | `/api/orders/my` | Get user orders |
\| POST | `/api/orders` | Create order |
\| PUT | `/api/orders/:id` | Admin: Update order status |

#### 🖼️ Upload Routes

\| POST | `/api/upload` | Upload image (Cloudinary) |

---

### 🧪 Example API Call (Axios)

```ts
const res = await axios.post('/api/auth/login', {
  email: 'user@example.com',
  password: 'password123'
});
localStorage.setItem('token', res.data.token);
```

---

### 🧼 Security

* All passwords are hashed with Bcrypt
* JWT is used for secure access tokens
* Auth middleware protects routes
* Admin check for restricted access

---

### 📈 Future Improvements

* Real-time notifications
* Email confirmations
* Mobile app (React Native)
* Coupons & discounts
* Chat support for users

---

### 📞 Contact

* **Name**: Nathan Ateka
* **Email**: [nathanateka81@gmail.com](mailto:nathanateka81@gmail.com)
* **GitHub**: [NathanAteka47](https://github.com/NathanAteka47)
* **Project Repo**: [Taji Food Store](https://github.com/NathanAteka47/gomycode-taji-food-store-project)

> Built with ❤️ by Nathan Ateka for GoMyCode Kenya
