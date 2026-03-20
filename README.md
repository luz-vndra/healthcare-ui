# B2B Healthcare UI App

```
LOGIN INFO
email: hello@mail.com
password: 12341234
```

**LIVE LINK:**
https://healthcare-ui-tau.vercel.app/login



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

---

## 🔐 Phase 2: Authentication

In this phase, Firebase Authentication was integrated to handle user login, session management, and route protection across the application.

### ⚙️ Firebase Setup

* Configured Firebase using environment variables (`.env`) for better security and scalability
* Enabled **Email/Password authentication** via Firebase Console
* Initialized Firebase in a dedicated `firebase/config.ts` file

---

### 🧠 Auth State Management

* Implemented a global authentication system using **React Context API**
* Used `onAuthStateChanged` to:

  * Persist user sessions across refresh
  * Automatically update UI based on authentication state
* Exposed `user`, `loading`, and `logout` via a custom `useAuth` hook

---

### 🔑 Login Flow

* Built a dedicated **Login page**
* Integrated Firebase’s `signInWithEmailAndPassword`
* Handled:

  * Form state (email/password)
  * Error states (invalid credentials, etc.)
  * Navigation after successful login

---

### 🔒 Protected Routes

* Created a reusable `ProtectedRoute` component
* Wrapped the main application layout to:

  * Restrict access to authenticated users only
  * Redirect unauthenticated users to `/login`
* Implemented loading state handling to prevent UI flicker during auth checks

---

### 🚪 Logout Functionality

* Implemented logout using Firebase `signOut`
* Centralized logout logic inside AuthContext
* Added logout action to the Navbar for easy access
* Ensured proper redirection and session cleanup

---

### ✅ Key Outcomes

* Secure authentication flow with session persistence
* Clean separation of concerns (Auth logic vs UI)
* Scalable structure for future extensions (e.g., signup, role-based access)
* Improved UX with protected navigation and state handling

---

### 💡 Notes

* Test users were created manually in Firebase for controlled authentication testing
* Signup flow can be easily added if required as an extension

---

## Phase 3: Core Pages (Dashboard & Patient Module)

In this phase, the core functionality of the healthcare dashboard was implemented, focusing on building scalable UI components and enabling smooth navigation across key modules.

### 📊 Dashboard

A basic dashboard was created to provide an overview of the system. It includes:

* KPI cards displaying:

  * Total patients
  * Average age
  * Number of conditions tracked
  * Dummy critical cases
* A "Recent Patients" section to quickly view a subset of patient data

The dashboard reuses the patient dataset and derives metrics dynamically, demonstrating basic data aggregation and state handling.

---

### 🧑‍⚕️ Patient Module

This is the central feature of the application and includes:

#### 1. Patient Listing

* Patients are displayed using a reusable component structure
* Data is sourced from a centralized module (`features/patients/data`)
* Each patient item is interactive and navigates to a detail page

#### 2. List ↔ Grid View Toggle

* Implemented a custom toggle switch to switch between views
* Two separate components:

  * `PatientList` (vertical layout)
  * `PatientGrid` (responsive grid layout)
* Improves UX and demonstrates component-based design

#### 3. Patient Detail Page

* Dynamic routing using route parameters (`/patients/:id`)
* Displays individual patient information
* Handles invalid IDs gracefully

---

### 🧱 Component Architecture

The patient feature is organized using a modular structure:

features/
patients/
data/
components/

Key components:

* `PatientCard` (reusable UI unit)
* `PatientList`
* `PatientGrid`

This separation ensures:

* Reusability
* Maintainability
* Scalability for future enhancements

---

### 🔁 Navigation & Routing

* Integrated with React Router
* Supports navigation between:

  * Dashboard
  * Patient list
  * Patient detail view

---

### 💡 Key Decisions

* Kept dummy data local to simulate backend responses
* Prioritized clean component separation over complex UI
* Focused on functionality and UX (toggle, navigation, responsiveness)

---

### ✅ Outcome

By the end of Phase 3:

* Core pages are functional
* Patient module supports multiple views
* Navigation flow is smooth and intuitive
* Codebase is structured for future scalability

---

## State Management Updates

### State Management Update (Patients + Analytics)

Introduced centralized patient state so data is loaded once and shared across pages and charts.

#### What changed

1. **Added a global Patients context**
- New provider/hook: [PatientsContext.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/features/patients/state/PatientsContext.tsx)
- Exposes:
  - `patients`
  - `isLoading`
  - `error`
  - Derived analytics datasets:
    - `patientsByAge`
    - `genderDistribution`
    - `appointmentsPerDay`

2. **Registered provider at app root**
- Wrapped routing with `PatientsProvider` in [main.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/main.tsx)

3. **Extended patient source data model**
- Added analytics-ready fields in [patients.ts](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/features/patients/data/patients.ts):
  - `gender`
  - `appointmentDay`

4. **Migrated feature pages to shared state**
- [Patients.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/pages/Patients.tsx): now consumes `patients`, `isLoading`, `error` from context
- [PatientDetails.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/pages/PatientDetails.tsx): reads selected patient from context
- [Analytics.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/pages/Analytics.tsx): uses derived datasets from context

5. **Updated chart components to be data-driven**
- Charts now receive `data` via props instead of importing static analytics constants:
  - [PatientsBarChart.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/features/analytics/components/PatientsBarChart.tsx)
  - [AppointmentsLineChart.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/features/analytics/components/AppointmentsLineChart.tsx)
  - [GenderPieChart.tsx](/home/luzvndra/Documents/GitHub%20(luz-vndra)/healthcare-ui/src/features/analytics/components/GenderPieChart.tsx)

6. **Removed obsolete static analytics file**
- Deleted: `src/features/analytics/data/analyticsData.ts`

---

### Result

- Single source of truth for patient data
- No duplicate/static analytics datasets
- Patients and Analytics stay in sync automatically
- Clear foundation for future API integration (replace seed load in provider, keep consumers unchanged)