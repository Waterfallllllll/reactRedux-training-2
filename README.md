# Hero Admin Panel

A training React SPA for managing a list of heroes.

The application allows you to:
- view the list of heroes;
- add new heroes via a form;
- delete heroes;
- filter heroes by element (fire, water, wind, earth).

## Technologies

- React 18
- Redux Toolkit
- RTK Query
- React Redux
- Formik
- Bootstrap 5 + SCSS
- json-server (mock backend)

## How It Works

The frontend runs via `react-scripts`, while the mock API is started in parallel using `json-server` on `http://localhost:3001`.

- Hero endpoints (`/heroes`) are handled via RTK Query:
  - fetch hero list;
  - create hero;
  - delete hero.
- Filters (`/filters`) are loaded into a Redux slice and applied to the hero list in the UI.

## Installation and Run

1. Install dependencies:

```bash
npm install
```

2. Start the application and mock API:

```bash
npm start
```

After startup:
- UI: `http://localhost:3000`
- API: `http://localhost:3001`

## Project Structure

- `src/components/app` - root application component.
- `src/components/heroesList` - heroes list.
- `src/components/heroesListItem` - hero card component.
- `src/components/heroesAddForm` - hero creation form.
- `src/components/heroesFilters` - filters and Redux slice for filtering.
- `src/api/apiSlice.js` - RTK Query API layer.
- `src/store/index.js` - Redux store configuration.
- `heroes.json` - data for `json-server` (`heroes` and `filters`).

## Project Purpose

This project demonstrates a basic CRUD flow in a React application with modern state management:
- server data handling via RTK Query;
- client UI state via Redux slice;
- form handling via Formik;
- integration with a local mock backend for development without a real server.