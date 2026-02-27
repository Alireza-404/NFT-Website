# 🗾 NFT Marketplace – Japanese Web Experience

A modern and fully responsive **NFT Marketplace** built with **Next.js 16 (App Router)**, **TypeScript**, and **Supabase**.

This project is designed as a Japanese-language NFT platform with a strong focus on clean architecture, smooth animations, and secure authentication.  
I built this project to combine advanced front-end animation techniques with a properly structured full-stack setup.

🔗 **Live Demo:** https://nft-website-z404z.vercel.app

---

## 🌟 Overview

This NFT website simulates a real marketplace environment including authentication, protected routes, and structured content pages.

The focus of this project is:

- Building a scalable Next.js App Router structure
- Implementing secure authentication (Register / Login / Logout)
- Handling user sessions with HTTP-only cookies
- Creating a modern, animated UI experience

---

## 🧠 Key Features

- 🔐 **Authentication**
  - Register
  - Login
  - Logout
  - Secure session handling
  - HTTP-only cookies

- 🗂️ **Pages & Routes**
  - Home
  - Marketplace
  - Collections
  - Creators
  - Blog
  - Login / Register
  - Custom 404 page

- 🎨 **UI & Animations**
  - Framer Motion animations
  - GSAP advanced motion effects
  - Swiper sliders

- 🛡️ **Backend**
  - Supabase database
  - API routes inside Next.js
  - Server-side user validation

- 📱 Fully responsive layout

---

## 🧰 Tech Stack

| Category         | Technology              |
| ---------------- | ----------------------- |
| **Framework**    | Next.js 16 (App Router) |
| **Language**     | TypeScript              |
| **Styling**      | Tailwind CSS            |
| **Animations**   | Framer Motion, GSAP     |
| **Slider**       | Swiper.js               |
| **Backend / DB** | Supabase                |
| **Auth**         | HTTP-only Cookies       |
| **Deployment**   | Vercel                  |

---

## 🧭 Project Structure

```
NFT Website/
│
├── public/
├── data/
├── types/
├── lib/
│   └── supabaseServer.ts
├── context/
│   └── UserContext.tsx
├── components/
├── proxy.ts
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │
│   ├── api/
│   ├── blog/
│   │   └── page.tsx
│   ├── collection/
│   │   └── page.tsx
│   ├── creators/
│   │   └── page.tsx
│   ├── marketplace/
│   │   └── page.tsx
│   │
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Alireza-404/NFT-Website.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

### 4️⃣ Run locally

```bash
npm run dev
```

Open: `http://localhost:3000`

---

## 🔐 Authentication & Security

- Sessions are validated on the server.
- Authentication cookies are HTTP-only.
- Sensitive logic is handled through API routes.
- Supabase manages user data securely.

---

## 💼 Resume Note

This project represents:

- Full-stack Next.js development
- Secure authentication flows
- Advanced UI animation usage
- Clean project architecture
- Type-safe development with TypeScript

---

## 💬 About Me

Hi, I'm **Alireza**, a Front-End Developer passionate about modern web technologies and clean UI architecture.

This project was built as a portfolio piece to demonstrate real-world front-end and full-stack skills.

---

## 📫 Contact

- GitHub: https://github.com/Alireza-404
- Email: alireza4o4shabani@gmail.com
