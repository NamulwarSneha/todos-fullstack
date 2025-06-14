# 📝 Todos Fullstack Project

A full-stack Todos application built using React (frontend) and Node.js with Express and MongoDB (backend).

---

## 📁 Project Structure

todos-fullstack/
├── backend/ # Express + MongoDB API
├── frontend/ # React application
└── README.md

---

## 🚀 Features

- Add, update, and delete todos
- Mark todos as completed
- Persistent storage using MongoDB
- Clean and responsive UI using React

---

## 🛠️ Tech Stack

- **Frontend:** React, JSX, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Version Control:** Git + GitHub

---

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB installed and running locally or on cloud (MongoDB Atlas)
- Git

---

### 🧩 Backend Setup

```bash
cd backend
npm install
# Create a `.env` file with your MongoDB URI
touch .env
# Inside .env file
MONGODB_URI=mongodb://localhost:27017/todos
PORT=5000

npm start

### 🧩FRONTEND SETUP

cd frontend
npm install
npm start

API ENDPOINTS

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/todos`     | Get all todos          |
| POST   | `/api/todos`     | Add a new todo         |
| PUT    | `/api/todos/:id` | Update a todo          |
| DELETE | `/api/todos/:id` | Delete a specific todo |

Namulwar Sneha
GitHub: @NamulwarSneha


---

### ✅ To add it:

1. Create the file:

```bash
touch README.md

2. Paste the content into README.md.

3. Commit and push:
git add README.md
git commit -m "Add README file"
git push origin main
