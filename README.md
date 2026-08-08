# MediaDumps

MediaDumps is a polished React learning project designed to explore how modern frontend apps fetch data from public APIs, display it beautifully, and manage application state with Redux Toolkit.

## What this project teaches

- How to fetch data from APIs using Axios
- How to build responsive UI components for search results
- How to manage global state with Redux Toolkit
- How to create a simple favorites/collection experience
- How to structure a learning-focused React app with routing and state flow

## Features

- Search for photos, videos, and GIFs
- View results in a clean, modern interface
- Save items into a personal collection
- Remove items or clear the collection anytime
- Experience lightweight UI feedback with toast notifications

## Tech stack

- React
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

## Project structure

- src/api: API requests and Axios integration
- src/components: reusable UI components
- src/pages: main pages of the app
- src/redux: store and slices for global state

## Getting started

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a .env file and add your API keys
   ```env
   VITE_UNSPLASH_API=your_unsplash_key
   VITE_PEXELS_API=your_pexels_key
   VITE_KLIPY_API=your_klipy_key
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Notes

This project was built as a practical learning experience for API integration, Redux state management, and frontend UI development.
