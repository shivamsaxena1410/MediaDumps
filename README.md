# MediaDumps

MediaDumps is a modern React learning project focused on the practical side of frontend development. It was built to explore how to fetch data from public APIs, render the results in a clean interface, and manage application state with Redux Toolkit.

## What this project demonstrates

- API fetching with Axios
- Dynamic UI rendering based on search results
- Redux Toolkit state management
- Local collection persistence for saved items
- Routing between pages with React Router
- Toast-based feedback for user actions

## Features

- Search across photos, videos, and GIFs
- Browse results in a polished and responsive layout
- Save favorites into a personal collection
- Remove items or clear the collection anytime
- Learn state flow through slices and actions

## Tech stack

- React
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

## Project structure

- src/api: API requests and Axios setup
- src/components: reusable UI components
- src/pages: main app pages
- src/redux: store and Redux slices

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

This project was created as a learning-focused app to understand real-world frontend patterns such as API integration, state management, and component-based UI design.
