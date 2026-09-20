# Driftly — Car Rental & Vehicle Booking Platform

Driftly is a full-stack **MERN** web application where users can search and book rental cars, and car owners can list and manage their own vehicles through a dedicated dashboard.


---

## Features

**For Users**
- Search available cars by **pickup location** and **pickup / return dates**
- Browse all cars and filter them with a search box
- View detailed car information (brand, model, year, category, fuel type, transmission, seating capacity, price per day, location)
- Book a car — bookings are rejected automatically if the car is already booked for the selected dates
- Track booking status (pending, confirmed, cancelled) on the **My Bookings** page

**For Owners**
- Switch a normal account to an **Owner** account
- Add cars with image upload (stored on ImageKit)
- Toggle a car's availability or remove a listing
- View and manage all bookings received for their cars (update booking status)
- **Owner Dashboard** with total cars, total bookings, pending / completed bookings, monthly revenue and recent bookings
- Update profile image

**General**
- Secure **JWT authentication** with **role-based access** (User / Owner) and protected API routes
- Passwords hashed with **bcrypt**
- Automatic image optimization with ImageKit URL transformations (resize, auto-compression, **WebP**)
- Responsive UI with animations and toast notifications

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, Vite, React Router v7, Tailwind CSS v4, Axios, Motion, React Hot Toast |
| Backend | Node.js, Express 5, MongoDB, Mongoose |
| Auth | JSON Web Tokens (JWT), bcrypt |
| Image Storage | Multer, ImageKit |

---

## Project Structure

```
Car-Rental/
├── client/                     # React frontend (Vite)
│   └── src/
│       ├── assets/
│       ├── components/         # Navbar, Hero, CarCard, Login, Footer, ...
│       │   └── owner/          # Sidebar, NavbarOwner, Title
│       ├── context/            # AppContext (global state, axios setup)
│       └── pages/              # Home, Cars, CarDetails, MyBookings
│           └── owner/          # Dashboard, AddCar, ManageCars, ManageBookings, Layout
│
└── server/                     # Express backend
    ├── configs/                # db.js, imageKit.js
    ├── controllers/            # userController, ownerController, bookingController
    ├── middleware/             # auth.js (JWT protect), multer.js (uploads)
    ├── models/                 # User, Car, Booking (Mongoose schemas)
    ├── routes/                 # userRoutes, ownerRoutes, bookingRoutes
    └── server.js               # App entry point
```

---

## API Overview

**User routes** — `/api/user`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/register` | Register a new user | No |
| POST | `/login` | Log in and receive a JWT | No |
| GET | `/data` | Get logged-in user's data | Yes |
| GET | `/cars` | Get all available cars | No |

**Owner routes** — `/api/owner`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/change-role` | Upgrade account to Owner | Yes |
| POST | `/add-car` | Add a car (with image upload) | Yes |
| GET | `/cars` | Get cars listed by the owner | Yes |
| POST | `/toggle-car` | Toggle a car's availability | Yes |
| POST | `/delete-car` | Remove a car listing | Yes |
| GET | `/dashboard` | Get dashboard statistics | Yes |
| POST | `/update-image` | Update profile image | Yes |

**Booking routes** — `/api/bookings`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/check-availability` | Find cars available for a location and date range | No |
| POST | `/create` | Create a booking | Yes |
| GET | `/user` | Get the logged-in user's bookings | Yes |
| GET | `/owner` | Get bookings received by the owner | Yes |
| POST | `/change-status` | Update a booking's status | Yes |

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- An [ImageKit](https://imagekit.io/) account

### 1. Clone the repository
```bash
git clone https://github.com/Shivam-gupta29/Car-Rental.git
cd Car-Rental
```

### 2. Set up the server
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the server:
```bash
npm run server     # development (nodemon)
npm start          # production
```

### 3. Set up the client
Open a new terminal:
```bash
cd client
npm install
```

Create a `.env` file inside `client/`:
```env
VITE_BASE_URL=http://localhost:3000
VITE_CURRENCY=$
```

Start the client:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Author

**Shivam Gupta** — [GitHub](https://github.com/Shivam-gupta29) · [LinkedIn](https://www.linkedin.com/in/shivam-gupta-nitkkr)