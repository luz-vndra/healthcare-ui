# B2B Healthcare UI App

## 🚀 Phase 1: Project Foundation

This phase focuses on setting up the core architecture of the application to ensure scalability, maintainability, and clean separation of concerns.

### ✅ Key Implementations

#### 1. Project Setup

* Initialized using **Vite + React + TypeScript**
* Ensures fast development experience and type safety

#### 2. Routing

* Implemented using `react-router-dom`
* Defined centralized routing configuration in `src/app/router.tsx`
* Structured routes for:

  * `/login`
  * `/` (Dashboard)
  * `/patients`
  * `/analytics`

#### 3. Layout System

* Built a reusable layout using:

  * `Navbar`
  * `Sidebar`
  * `MainLayout`
* Used `Outlet` from React Router to render nested routes
* Avoided layout duplication across pages

#### 4. Folder Structure

Organized the project with scalability in mind:

```
src/
├── app/                # Routing & app-level config
├── pages/              # Route-level components
├── components/
│   └── layout/         # Shared layout components

```

### 💡 Key Decisions

* **Separation of concerns**: Routing, layout, and pages are isolated
* **Scalable structure**: Easy to extend for future modules like auth, analytics, and patient management
* **Reusable layout**: Ensures consistency across all pages

### 📌 Outcome

* Application runs successfully with working navigation
* Layout persists across routes
* Foundation is ready for implementing authentication and core features in upcoming phases
