# FlickFlip V2 - Learning Progress

**Project:** Mystery movie ticket marketplace
**Tech Stack:** Next.js 15, TypeScript, Tailwind, Prisma (upcoming)
**GitHub:** https://github.com/mindlesstunic/flickflip-v2

---

## ✅ Phase 1: Foundation (COMPLETE)

**Learned:**

- Next.js App Router setup
- TypeScript basics (types, interfaces, tuples)
- Tailwind CSS utility classes
- Server vs Client Components
- Git workflow & GitHub

**Built:**

- Project scaffolding
- Initial page structure

---

## ✅ Phase 2: Frontend Enhancement (COMPLETE)

### Features Built:

**1. Smart Deal Generation Algorithm**

- Groups movies within 30-minute windows
- Generates all possible pairs
- Calculates visibility windows (appears 1hr before earliest showtime)
- File: `app/utils/dealGenerator.ts`

**2. Movie Posters**

- Next.js Image component with optimization
- Individual showtimes displayed
- Responsive layout

**3. Countdown Timers**

- Real-time countdown to deal expiry
- Updates every second
- Component: `components/Countdown.tsx`

**4. Theater Grouping & Filtering**

- Deals organized by theater
- Interactive filter dropdown
- Proper Server/Client component architecture

### Key Concepts used:

- **React Hooks:** useState, useEffect
- **Server Components:** Data fetching on server
- **Client Components:** Interactivity in browser
- **Component Composition:** Server passing data to Client
- **Type Safety:** Shared types, DRY principle
- **Array Methods:** .map(), .reduce(), .filter()
- **Modern JavaScript:** for...of loops, template literals, destructuring

### Architecture Decisions:

✅ Server Components for data generation (performance)
✅ Client Components only where needed (interactivity)
✅ Shared types from single source (dealGenerator.ts)
✅ Component composition over full client-side

---

## ⏳ Phase 3: Backend & Database (NEXT)

### Goals:

1. **Database Setup**

   - PostgreSQL installation
   - Prisma ORM setup
   - Schema design (theaters, movies, showtimes, deals, bookings)

2. **API Routes**

   - GET /api/deals
   - GET /api/theaters
   - POST /api/bookings
   - Admin endpoints

3. **Data Flow**

   - Connect frontend to real backend
   - Replace sample data with database queries
   - Handle loading/error states

4. **Admin Dashboard**
   - Authentication
   - CRUD operations for theaters/movies/showtimes
   - View generated deals

### Prerequisites for Next Session:

- [ ] PostgreSQL installed
- [ ] Understand REST API basics
- [ ] Review database concepts (tables, relations)

---

## 📚 Concepts to Learn:

- useState and useEffect (hooks)
- Server vs Client Components boundary
- Async/await (for API calls)
- REST API principles
- Database normalization basics

---

## 🎯 Current State:

**Working Features:**

- Deal generation from sample data
- Countdown timers
- Theater filtering
- Responsive design
- Proper type safety

**Sample Data:** `app/data/sampleTheaters.ts`
**Deploy:** Not yet deployed (Phase 3 first)

---

## 🤔 Open Questions:

1. Theater integration approach (manual vs portal vs API)?
2. Payment gateway choice (Razorpay vs Stripe)?
3. Ticket verification system design?
4. Business vs Learning focus?

---

## 💡 Ideas for V3:

- City selector
- User accounts & booking history
- Email/SMS notifications
- Mobile responsive improvements
- Dark/light mode toggle
- Advanced filters (price range, time range)

---

**Last Updated:** 01-NOV-2025
**Next Session:** Phase 3 - Backend Setup
