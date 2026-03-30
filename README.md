# 🚀 Micro Frontend Architecture (React + Vue)

A scalable **Micro Frontend system** built using **React (Host & Profile)** and **Vue (Blog)**, powered by **Module Federation**. This project demonstrates independent deployments, shared modules, and cross-framework integration inside a monorepo.

---

## 🧠 Overview

This project showcases how multiple frontend applications can work together as a single app while remaining independently developed and deployed.

### Apps:
- 🏠 **Host (React)** – Main container app
- 👤 **Profile (React)** – Remote micro frontend
- 📝 **Blog (Vue)** – Remote micro frontend

---

## 🧩 Architecture
devhub/
│
├── apps/
│ ├── host/ # React Host App
│ ├── profile-react/ # React Micro Frontend
│ └── blog-vue/ # Vue Micro Frontend
│
├── packages/
│ ├── ui/ # Shared UI components
│ ├── auth/ # Shared authentication logic
│ └── utils/ # Shared utilities


---

## ⚙️ Tech Stack

- ⚛️ React
- 🟢 Vue
- ⚡ Vite
- 🧩 Module Federation
- 📦 Monorepo (Turborepo)
- 🔐 Shared Authentication
- 🔄 Global State (BroadcastChannel API)

---

## 🚀 Features

- 🔗 Micro frontend architecture
- ⚛️ Cross-framework integration (React + Vue)
- 📦 Shared UI components
- 🔐 Centralized authentication
- 🔄 Cross-app communication
- 🚀 Independent deployments
- ⚡ Fast builds with Vite

---

## 🧩 Module Federation

- **Host** dynamically loads remotes
- **Profile** exposes React components
- **Blog** exposes Vue components
