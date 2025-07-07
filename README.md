# 🧠 MindMend – Your Mental Wellness Companion

**MindMend** is a full-stack teletherapy and mental wellness platform designed to support individuals in need of psychological care, mood tracking, and virtual therapy sessions. It provides a clean and responsive user interface for both users and therapists, featuring login systems, dashboards, and appointment booking.

---

## 📌 Index

- [🎯 Objective](#🎯-objective)
- [📦 Scope](#📦-scope)
- [⚙️ Tech Stack](#⚙️-tech-stack)
- [💻 System Requirements](#💻-system-requirements)
- [🚀 Features](#🚀-features)
- [📁 Folder Structure](#📁-folder-structure)
- [🛠️ Installation](#🛠️-installation)
- [📸 Screenshots](#📸-screenshots)
- [📚 References](#📚-references)
- [👩‍💻 Contributors](#👩‍💻-contributors)
- [📝 License](#📝-license)

---

## 🎯 Objective

To provide a digital platform where users can:

- Book appointments with therapists.
- Track their emotional states regularly.
- Access licensed mental health professionals.
- Use emergency support resources.
- Engage in safe and private interactions.

---

## 📦 Scope

This project caters to:

- Users who need access to mental health professionals.
- Therapists who want to manage and monitor appointments.
- Anyone looking to regularly track moods and mental well-being.

---

## ⚙️ Tech Stack

### 🧩 Frontend:
- React.js
- Tailwind CSS
- Framer Motion
- React Router

### 🔧 Backend:
- Node.js
- Express.js

### 🗃️ Database:
- MongoDB (Mongoose ODM)

### 🔐 Authentication:
- JWT (JSON Web Tokens)
- OAuth (Future Integration)

### 📡 Real-Time & Communication:
- Socket.IO
- Jitsi/Twilio for virtual sessions

---

## 💻 System Requirements

| Requirement      | Recommended |
|------------------|-------------|
| OS               | Windows / macOS / Linux |
| Node.js          | v16+        |
| npm              | v8+         |
| MongoDB          | Local or Atlas cloud instance |
| Internet Browser | Latest Chrome/Firefox |

---

## 🚀 Features

- ✅ User login & registration
- ✅ Therapist login & dashboard
- ✅ Appointment booking form with validation
- ✅ Mood Tracker page
- ✅ Responsive navigation & smooth scroll
- ✅ Therapist listing with profile images
- ✅ Emergency contact CTA
- ✅ Protected route for booking if not logged in

---

## 📁 Folder Structure

MindMend/
│
├── public/
│ └── icon.png
│
├── src/
│ ├── assets/
│ │ └── therapist images (meera.png, arjun.jpg, etc.)
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── Services.jsx
│ │ ├── Appointments.jsx
│ │ ├── MoodTracker.jsx
│ │ ├── Therapist.jsx
│ │ ├── About.jsx
│ │ └── pages/
│ │ ├── Login.jsx
│ │ ├── TherapistLogin.jsx
│ │ └── TherapistDashboard.jsx
│ ├── App.jsx
│ └── App.css
│
├── package.json
├── README.md
└── .gitignore


## 📸 Screenshots

### 🔹 Homepage
![Homepage]
![Screenshot 2025-07-08 024416](https://github.com/user-attachments/assets/cbf53326-c714-4aeb-858b-bb784128058e)

### 🔹 Appointment Page
![Appointment]
![Screenshot 2025-07-08 024440](https://github.com/user-attachments/assets/2542a0bb-fa65-4625-8c92-8251b1cd7ca5)

### 🔹 Login Page
![Login]
![Screenshot 2025-07-08 024507](https://github.com/user-attachments/assets/ae94895f-b381-4d3c-aca4-3c007390e0bf)

----

## 🛠️ Installation

> Make sure **Node.js** and **MongoDB** are installed before proceeding.

bash
# Clone the repository
git clone https://github.com/your-username/MindMend.git
cd MindMend

# Install dependencies
npm install

# Run the project
npm run dev

Thank you for visiting MindMend! 🌸
If you found this helpful, consider giving the repo a ⭐️
