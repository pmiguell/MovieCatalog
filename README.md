
# 🎬 MovieCatalog - Movie Catalog with React + Vite

This project is a **Movie Catalog** built with **React**, **Vite**, and the **TMDb (The Movie Database) API**. It fetches real-time movie data, allowing users to view popular movies, search by title, and see detailed information about each one.

It was developed as a personal project to practice modern **React**, **REST API consumption**, **hooks**, **React Router**, and clean architecture.

---

## 🚀 Technologies and Concepts Used

- **React (with Hooks)**
- **Vite**
- **Axios**
- **React Router DOM**
- **TMDb API**
- **Component-based architecture**
- **Environment variables**
- **CSS styling**

---

## 📌 Features

✅ Lists popular movies using TMDb data  
✅ Real-time movie search by title  
✅ Detail page with description, release date, rating, and image  
✅ Page navigation with React Router  
✅ Clean and modular code

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Prerequisites

- Node.js installed  
- TMDb account to get your API key  

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/pmiguell/MovieCatalog.git
cd MovieCatalog
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Your API Key

Create a `.env` file in the root directory with the following content:

```env
VITE_API_KEY=your_tmdb_api_key_here
```

> 🔐 Never share your API key publicly.

### 5️⃣ Start the Development Server

```bash
npm run dev
```

---

## 🧠 How It Works

1. On startup, the app automatically loads the most **popular movies** from the TMDb API.
2. The **search bar** lets users search movies by title, using API requests.
3. Users can filter movies by genre using a dropdown selector.
4. Clicking a movie navigates to a **details page** with extra information.
5. Navigation is handled via **React Router DOM**.
6. The project uses a clean architecture, with separate folders for pages, components, and API services.

---
