# Media Explorer App

A modern React + Vite learning project built to understand how to fetch data from APIs, display results in the UI, and manage state with Redux Toolkit. This app lets you search for photos, videos, and GIFs, save favorites to a personal collection, and explore how Axios and Redux work in a real project.

## What this project teaches

- How to fetch data from external APIs using Axios
- How to handle loading and error states in React
- How to manage global app state with Redux Toolkit
- How to build reusable UI components and route between pages
- How to persist saved items locally in the browser

## Features

- Search media from multiple APIs
- Switch between photos, videos, and GIFs with tabs
- Save items to a personal collection
- Remove items or clear the entire collection
- Enjoy toast notifications for user feedback
- Responsive and modern UI with a polished layout

## Tech stack

- React 19
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- React Toastify

## Project structure

- src/api: API helper functions using Axios
- src/components: reusable UI pieces
- src/pages: main pages for the app
- src/redux: Redux slices and store configuration

## Getting started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the project root and add your API keys:
   ```env
   VITE_UNSPLASH_API=your_unsplash_key
   VITE_PEXELS_API=your_pexels_key
   VITE_KLIPY_API=your_klipy_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Build for production

```bash
npm run build
```

## Deployment on GitHub Pages

This project is set up for GitHub Pages deployment through a GitHub Actions workflow. After pushing the repository to GitHub:

1. Open the repository on GitHub
2. Go to Settings > Pages
3. Choose GitHub Actions as the source
4. The workflow will build and publish the app automatically

## Notes

This project was created as a hands-on learning app for API fetching, state management, and UI development. It is intentionally simple and beginner-friendly while still demonstrating real-world React patterns.
