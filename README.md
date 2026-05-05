# Stanza - Dorm & Apartment Listing Platform

**Stanza** is a comprehensive platform designed to bridge the gap between dorm owners and students. It streamlines the process of listing properties, searching for affordable housing, and managing reservations in a secure, modern environment.

---

## 🏗️ 1. System Overview

### User Roles
*   **Students:** Search, filter, and book dorms tailored to their needs.
*   **Dorm Owners:** List and manage properties, amenities, and booking requests.
*   **Admins:** Oversee listings, moderate users, and generate platform reports.

### Core Features
*   **Secure Authentication:** JWT-based login and registration.
*   **Property Management:** Full CRUD operations for dorm listings.
*   **Smart Search:** Advanced filtering by price, location, and specific amenities.
*   **Reservation System:** Real-time booking and approval workflow.
*   **Social Proof:** Integrated reviews and rating system.
*   **Cloud Media:** High-quality image uploads and management.
*   **Management Suite:** Dedicated Admin and Owner dashboards.

---

## ⚙️ 2. High-Level Architecture

The platform utilizes a modern MERN-like stack with an Angular twist for a highly reactive frontend.

*   **Frontend:** Angular (Standalone Components, Signals)
*   **Backend:** Node.js + Express API
*   **Database:** MongoDB (Atlas)
*   **Cloud Storage:** Cloudinary / AWS S3 for property images

**Style:** RESTful API, Modular Backend, and Component-driven Frontend.

---

## 🧠 3. Backend Architecture (Node + Express)

### Folder Structure
```text
server/
├── src/
│   ├── config/          # DB connection & environment variables
│   ├── modules/         # Feature-based logic (Auth, Users, Dorms, etc.)
│   ├── middleware/      # Auth & Error handling
│   ├── services/        # Third-party integrations (Upload, Email)
│   ├── utils/           # Validation logic
│   ├── app.js           # App configuration
│   └── server.js        # Entry point
└── tests/               # Unit and Integration tests
```

### Database Schema (MongoDB)
*   **User:** Name, Email, Password, Role (`student`, `owner`, `admin`).
*   **Dorm:** Title, Description, Price, Location (GeoJSON), Amenities, Images.
*   **Booking:** User/Dorm references, Date range, Status.
*   **Review:** User/Dorm references, 1-5 Rating, Comments.

---

## 🎨 4. Frontend Architecture (Angular v20+)

Following modern Angular best practices, the client uses **Standalone Components** and **Signals** for efficient state management.

### Folder Structure
```text
src/app/
├── core/                # Singleton services (Auth, API, Config)
├── shared/              # Reusable UI Atoms, Pipes, Directives, Models
├── features/            # Lazy-loaded business modules (Dashboard, Auth)
├── layout/              # UI Shells (Navbar, Sidebar, Footer)
├── app.routes.ts        # Main routing configuration
└── app.config.ts        # Global providers (Signals, Routing)
```

### Key Technical Features
*   **Lazy Loading:** Optimized bundle sizes for faster initial loads.
*   **Reactive Forms:** Robust input handling and validation.
*   **Signals:** Fine-grained reactivity for state management.
*   **Functional Interceptors:** Streamlined JWT injection for API calls.

---

## 🔌 5. API Design (Sample Endpoints)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Create a new account |
| `GET` | `/api/dorms` | Fetch all available listings |
| `POST` | `/api/bookings` | Request a reservation |
| `PUT` | `/api/bookings/:id/status`| Approve/Reject a booking |

---

## ☁️ 6. Infrastructure & DevOps

*   **Hosting:** Vercel (Frontend), Railway/Render (Backend).
*   **CI/CD:** Automated deployments via **GitHub Actions**.
*   **Security:** 
    *   Bcrypt password hashing.
    *   Rate limiting & Helmet.js protection.
    *   Input validation via Zod/Joi.

---

## 🚀 10. Development Roadmap

### Phase 1: MVP (Minimum Viable Product)
- [ ] User Authentication & Profiles
- [ ] Basic Dorm Listings (CRUD)
- [ ] Search & Filter functionality

### Phase 2: Core Experience
- [ ] Review & Rating System
- [ ] Automated Email Notifications

### Phase 3: Advanced Features
- [ ] Admin Dashboard & Analytics
- [ ] Image Uploads (Cloudinary Integration)
- [ ] Google Maps Geolocation Integration
