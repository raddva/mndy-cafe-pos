# 🧾 Mndy Cafe — Point of Sales System

A modern, responsive Point of Sales (POS) application built with **Next.js**, **Supabase**, **Tailwind CSS**, and [**Midtrans**](https://midtrans.com) (currently in **sandbox mode**).  
Designed for small to medium businesses to manage products, sales, and inventory in real-time with a sleek UI, integrated payment processing, and live data updates powered by **Supabase Realtime**.

---

## 🚀 Tech Stack

- **Next.js** – React framework for full-stack web development
- **Supabase** – Backend-as-a-Service for authentication, database, and real-time updates
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **Midtrans** – Payment gateway integration (currently using sandbox environment) for handling secure payments

---

## 📦 Features

- 🔐 **Authentication** (login, sign-up, role-based access)
- 🛒 **Sales Dashboard** with real-time transaction history
- 📦 **Product Management** (CRUD operations)
- 🧑‍💼 **User Roles** (admin, cashier, kitchen)
- 🔍 **Search and Filtering**
- 📈 **Sales Reports** (soon)
- ⚡ **Real-time Sync** with Supabase subscriptions

---

## 🔐 Authentication Setup

This app uses Supabase Auth. Ensure you:
Enable Email/Password auth in Supabase
Optionally set up RLS (Row Level Security) on your tables
You can customize access per role (admin, cashier, kitchen) by setting user metadata or table policies.

---

## 🧰 Project Structure

```bash
.
├── (auth)/           # authorization & user profile
├── (dashboard)/      # Pages
├── components/       # Reusable UI components
├── styles/           # Tailwind config and global styles
├── lib/              # Supabase client and helpers
├── utils/            # Utility functions
├── public/           # Static assets
├── .env.local        # Environment variables
└── tailwind.config.js
```

---

## 📦 Deployment
This project has been deployed to:

[Vercel](https://mndy-cafe-vercel.app)

---

## 🤝 Contributing
Feel free to fork this project and submit pull requests. If you find a bug or have feature suggestions, please open an issue.


