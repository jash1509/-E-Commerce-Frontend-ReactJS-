# 🛒 E-Commerce Frontend

A modern, premium E-Commerce frontend application built with **ReactJS**, featuring product listings, detailed product views, and a fully functional shopping cart — all powered by the [FakeStore API](https://fakestoreapi.com/).

---

## 🚀 Live Preview

> Run locally with `npm run dev` and visit `http://localhost:5173`

---

## ✨ Features

- **Product Listing** — Browse all products with category filters and a responsive grid layout
- **Product Details** — Dynamic product page with description, rating, price, and add-to-cart
- **Shopping Cart** — Add, remove, increase/decrease quantities, and view order summary
- **Custom Product Images** — All products display unique AI-generated premium images
- **Loading & Error States** — Smooth spinners and user-friendly error messages with retry
- **Responsive Design** — Fully mobile-friendly across all pages

---

## 🗂️ Project Structure

```
src/
├── api/
│   └── productApi.js          # Axios instance + API functions
├── assets/
│   └── products/              # Custom AI-generated product images
├── components/
│   ├── Button/                # Reusable button (primary, outline, danger variants)
│   ├── CartItem/              # Individual cart item with quantity controls
│   ├── EmptyCart/             # Empty cart illustration + CTA
│   ├── ErrorComponent/        # Styled error display with retry
│   ├── Loader/                # Animated spinner component
│   ├── Navbar/                # Sticky glassmorphic navbar with cart badge
│   └── ProductCard/           # Product card with image, rating, and add-to-cart
├── context/
│   └── CartContext.jsx        # Global cart state via Context API + useReducer
├── pages/
│   ├── Home/                  # Product listing page with category filter
│   ├── ProductDetails/        # Dynamic product detail page
│   └── Cart/                  # Shopping cart page with order summary
├── routes/
│   └── AppRoutes.jsx          # Centralized route definitions
├── utils/
│   └── imageMapper.js         # Maps product IDs to custom local images
├── App.jsx
├── main.jsx
└── index.css                  # Global styles & Outfit font import
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library with functional components & hooks |
| **React Router DOM v7** | Client-side routing (`/`, `/product/:id`, `/cart`) |
| **Axios** | HTTP requests to FakeStore API |
| **Context API + useReducer** | Global cart state management |
| **Vite** | Fast dev server and bundler |
| **Vanilla CSS** | Component-scoped styling with modern design |

---

## 📦 Getting Started

### Prerequisites
- Node.js `>=18.x`
- npm `>=9.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jash1509/-E-Commerce-Frontend-ReactJS-.git

# 2. Navigate into the project
cd -E-Commerce-Frontend-ReactJS-

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## 🔧 Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_API_BASE_URL=https://fakestoreapi.com
```

> Vite exposes variables prefixed with `VITE_` to the client via `import.meta.env`.

---

## 📡 API Integration

All API calls use the pre-configured Axios instance in `src/api/productApi.js`:

| Function | Endpoint | Description |
|---|---|---|
| `fetchAllProducts()` | `GET /products` | Fetch all products |
| `fetchProductById(id)` | `GET /products/:id` | Fetch single product |
| `fetchCategories()` | `GET /products/categories` | Fetch all categories |

---

## 🗃️ Cart State Management

Cart state is managed globally via **Context API** with a `useReducer` hook in `src/context/CartContext.jsx`.

| Action | Description |
|---|---|
| `ADD_TO_CART` | Adds item; increments quantity if already in cart |
| `REMOVE_FROM_CART` | Removes item by ID |
| `INCREMENT` | Increases item quantity by 1 |
| `DECREMENT` | Decreases item quantity (minimum 1) |
| `CLEAR_CART` | Empties the entire cart |

---

## 📸 Custom Product Images

All FakeStore API product images are replaced with unique, high-quality AI-generated images stored in `src/assets/products/`. The mapping is handled by `src/utils/imageMapper.js`.

| Image File | Category |
|---|---|
| `backpack.png` | Men's Bags |
| `tshirt.png` | Men's / Women's T-Shirts |
| `jacket.png` | Men's Outerwear |
| `womens_jacket.png` | Women's Outerwear |
| `bracelet.png` | Jewelry |
| `ring.png` | Jewelry |
| `harddrive.png` | Electronics – Storage |
| `monitor.png` | Electronics – Displays |

---

## 📋 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview the production build
```

---

## 📄 License

This project was built as part of a **ReactJS Internship Assignment**. Free to use for educational purposes.
