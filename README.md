# 🔐 Node.js RBAC Authentication API

A simple backend API built with Node.js and Express that implements authentication and Role-Based Access Control (RBAC) using JWT.

---

## 🚀 Features

- User Registration & Login
- Password Hashing (secure storage)
- JWT Authentication
- Protected Routes (authenticated users only)
- Role-Based Access Control (RBAC)
- MongoDB Database (Mongoose)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

---

## 📂 Project Structure
project-root/
│
├── controllers/
│ └── authController.js
│
├── middleware/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
│
├── models/
│ └── User.js
│
├── routes/
│ ├── authRoutes.js
│ └── userRoutes.js
│
├── config/
│ └── db.js
│
├── server.js
└── .env