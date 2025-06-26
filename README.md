# 📬 Posty

**Posty** is a full-stack Gmail clone built with **React**, **Redux**, **Node.js**, **MongoDB**, and **Socket.IO**. It replicates core email functionalities like sending, receiving, and listing emails — all in a responsive, modern UI.

![Posty UI Preview](https://your-screenshot-url-if-any.png) <!-- Optional -->

---

## 🚀 Features

- ✅ User Signup & Login (with secure cookies)
- ✉️ Compose and send emails
- 📥 View inbox emails
- 🔄 Real-time email updates using Socket.IO
- 🧠 Global state with Redux + Redux Persist
- 💅 Styled using TailwindCSS
- 🌐 RESTful API backend

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Redux Toolkit + Persist
- React Router DOM
- Tailwind CSS
- Axios
- Toast Notifications

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- Socket.IO
- Bcrypt.js (for hashing)
- CORS, Cookie-parser

---

## 🧩 Folder Structure
Posty/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── redux/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── package.json
│
└── README.md



---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/VipulG23/Posty.git
cd Posty

### 2. Setup Backend

cd backend
npm install
npm run dev

3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev


PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key



