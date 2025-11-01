# Phase 3: Backend & Database - Detailed Plan

## Week 1: Database Foundation

### Day 1-2: PostgreSQL Setup

- [ ] Install PostgreSQL locally (Mac)
- [ ] Install Prisma CLI
- [ ] Initialize Prisma in project
- [ ] Connect to database
- [ ] Learn basic SQL concepts

### Day 3-4: Schema Design

- [ ] Design database tables
- [ ] Define relationships
- [ ] Create Prisma schema
- [ ] Run first migration
- [ ] Seed sample data

### Day 5: First Queries

- [ ] Learn Prisma Client basics
- [ ] Create/Read/Update/Delete operations
- [ ] Test in isolation

---

## Week 2: API Routes

### Day 6-7: Deals API

- [ ] Create GET /api/deals route
- [ ] Query database for active deals
- [ ] Return JSON response
- [ ] Handle errors

### Day 8-9: Theaters & Movies API

- [ ] Create GET /api/theaters
- [ ] Create GET /api/movies
- [ ] Test endpoints

### Day 10-11: Frontend Integration

- [ ] Update page.tsx to fetch from API
- [ ] Handle loading states
- [ ] Handle error states
- [ ] Remove sample data dependency

---

## Week 3: Admin Dashboard

### Day 12-13: Admin Routes

- [ ] Create admin layout
- [ ] Basic authentication (simple for now)
- [ ] Protected routes

### Day 14-15: Theater Management

- [ ] Add theater form
- [ ] Edit theater
- [ ] List theaters
- [ ] Delete theater

### Day 16-17: Movie Management

- [ ] Add movie form
- [ ] Image upload handling
- [ ] Edit/Delete movies

### Day 18: Showtime Management

- [ ] Add showtime form
- [ ] Link movie + theater + time
- [ ] Auto-generate deals on creation

---

## Week 4: Booking System

### Day 19-20: Booking API

- [ ] Create POST /api/bookings
- [ ] Validate deal availability
- [ ] Generate booking reference
- [ ] Store in database

### Day 21-22: Booking UI

- [ ] Quantity selector
- [ ] User details form
- [ ] Confirmation page
- [ ] Booking history

### Day 23-24: Testing & Polish

- [ ] Test all flows
- [ ] Error handling
- [ ] Loading states
- [ ] Deploy to Vercel

---

## Key Learning Topics:

1. **Database Concepts**

   - Tables, columns, rows
   - Primary keys, foreign keys
   - Relationships (one-to-many, many-to-many)
   - Normalization
   - Indexes

2. **Prisma ORM**

   - Schema definition
   - Migrations
   - Client queries
   - Relations
   - Transactions

3. **API Routes in Next.js**

   - File-based routing for APIs
   - Request/Response handling
   - HTTP methods (GET, POST, PUT, DELETE)
   - Status codes
   - Error handling

4. **Authentication Basics**
   - Session management
   - Protected routes
   - JWT concepts (for later)

---

## Files We'll Create:

```
flickflip-v2/
├── prisma/
│   ├── schema.prisma         ← Database schema
│   └── seed.ts               ← Sample data
├── app/
│   ├── api/
│   │   ├── deals/
│   │   │   └── route.ts     ← Deals API
│   │   ├── theaters/
│   │   │   └── route.ts     ← Theaters API
│   │   └── bookings/
│   │       └── route.ts     ← Bookings API
│   └── admin/
│       ├── page.tsx          ← Admin dashboard
│       ├── theaters/
│       │   └── page.tsx     ← Theater management
│       └── movies/
│           └── page.tsx     ← Movie management
└── lib/
    └── prisma.ts            ← Prisma client singleton
```

---

## Prerequisites to Install:

- [ ] PostgreSQL (Postgres.app for Mac)
- [ ] Database GUI (Postico or TablePlus - optional but helpful)
- [ ] Postman (for API testing - optional)

---

## Success Criteria:

By end of Phase 3, you should:

- ✅ Understand database fundamentals
- ✅ Be comfortable with Prisma
- ✅ Know how to build REST APIs
- ✅ Connect frontend to backend
- ✅ Have a working admin dashboard
- ✅ Be able to create bookings

---
