# Product Requirements Document: ChronoFocus (Time-Boxing App)

| **Project** | ChronoFocus |
| :--- | :--- |
| **Version** | 2.1 |
| **Status** | Approved |
| **Core Philosophy** | "Plan the work, work the plan." (Inbox $\rightarrow$ Schedule $\rightarrow$ Focus) |

## 1 Executive Summary

A real-time, drag-and-drop time-boxing application. Users capture tasks in a "Brain Dump" inbox, drag them onto a daily timeline to allocate time slots, and execute them using a built-in focus timer.

-----

## 2 Technical Stack & Architecture

### Core Technologies

  * **Framework:** Next.js 14+ (App Router).
  * **Authentication:** **Clerk** (Middleware & Server Components).
  * **Database:** **Supabase** (PostgreSQL).
  * **ORM:** Prisma (connected to Supabase connection pool).
  * **Real-time:** **Supabase Realtime** (Subscriptions to Postgres changes) replacing custom WebSockets.
  * **State:** **Zustand** (Client), **nuqs** (URL state).

### Styling Strategy (Strict Hybrid)

  * **Layout/Spacing:** Tailwind CSS.
  * **Component Styling:** Stylus (`.module.styl`) co-located with components.
  * **UI Library:** Shadcn UI + Radix UI Primitives.
  * **Constraint:** No `@apply`. No semicolons in JS.

-----

## 3 Product Features & User Flow

### 3.1 Authentication (Clerk)

  * **Flow:** Standard Clerk sign-in/sign-up components.
  * **Middleware:** Protects `/dashboard`, `/inbox`, and `/schedule` routes.
  * **Data Sync:** Clerk Webhook creates a corresponding `UserProfile` entry in Supabase upon user registration (optional, or just use Clerk ID directly).

### 3.2 The "Brain Dump" (Inbox)

  * **Function:** Rapid data entry of tasks.
  * **UX:** Sidebar on the left.
  * **Tech:** Optimistic UI updates.
  * **Key Fields:** Title, Estimated Duration, Priority.

### 3.3 The Daily Box (Calendar/Timeline)

  * **Function:** The core scheduling interface.
  * **Interaction:** Drag and drop tasks from Inbox to the Timeline.
  * **Logic:**
      * **Collision Detection:** Tasks cannot overlap.
      * **Snap-to-grid:** 15-minute increments.
      * **Resizing:** Drag bottom handle to extend duration.

### 3.4 Focus Mode (Execution)

  * **Function:** Distraction-free view of the *current* time block.
  * **Features:** Countdown timer, "Roll-over" unfinished tasks, visual progress.

-----

## 4 Data Model (Prisma Schema)

*Note: `userId` refers to the Clerk User ID string.*

```prisma
// Use Supabase connection string
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model UserProfile {
  id        String   @id // Matches Clerk ID
  email     String   @unique
  settings  Json?    // Theme, working hours
  tasks     Task[]
}

model Task {
  id          String      @id @default(cuid())
  userId      String      // Foreign key to UserProfile or direct Clerk ID
  title       String
  status      String      // 'BACKLOG', 'SCHEDULED', 'COMPLETED'
  duration    Int         // Minutes
  timeBlocks  TimeBlock[]
  user        UserProfile @relation(fields: [userId], references: [id])
  createdAt   DateTime    @default(now())
  deletedAt   DateTime?   // Soft delete

  @@index([userId])
}

model TimeBlock {
  id        String   @id @default(cuid())
  taskId    String
  startTime DateTime
  endTime   DateTime
  isActual  Boolean  @default(false)
  task      Task     @relation(fields: [taskId], references: [id])
}
```

-----

## 5 Directory Structure & File Standards

```text
/app
  /api
    /webhooks
      /clerk        # Sync Clerk user to Supabase
  /(dashboard)      # Authenticated Group
    /inbox
      page.js
    /schedule
      page.js
  layout.js         # Wraps children in <ClerkProvider>
  middleware.ts     # Clerk Middleware
/components
  /scheduler
    TimeSlot.js
    TimeSlot.module.styl
/lib
  /supabase         # Supabase client (for Realtime subscriptions)
  /db               # Prisma client
  /store            # Zustand
```

-----

## 6 Functional Requirements (The "Rules")

### 6.1 Coding Standards (Standard.js)

  * **Code:** `const isLoading = true` (Auxiliary verbs).
  * **Iteration:** Use `.map` and `.reduce`; avoid `for` loops.
  * **Conditionals:** `if (err) return handle(err)` (Early returns).
  * **Stylus:** Use parent selector `&` for hover states.

### 6.2 Real-time Implementation (Supabase)

  * **Mechanism:** Client-side subscription to the `Task` and `TimeBlock` tables via Supabase JS Client.
  * **Filter:** `channel.on('postgres_changes', { event: '*', schema: 'public', table: 'Task', filter: 'userId=eq.' + clerkId })`.
  * **Behavior:**
    1.  User drags task (optimistic update via Zustand).
    2.  Server Action persists to DB via Prisma.
    3.  Supabase detects change $\rightarrow$ pushes update to other clients.
    4.  Client receives update $\rightarrow$ reconciles Zustand store.

### 6.3 Security

  * **RLS (Row Level Security):** Even though we use Prisma (Server side), enable RLS on Supabase tables to prevent unauthorized access via the exposed Supabase URL/Anon Key.
  * **Validation:** Verify `auth().userId` in every Server Action.

### 6.4 Accessibility (a11y)

  * **Drag & Drop:** Must support keyboard controls (Space to lift, Arrow keys to move, Enter to drop).
  * **Contrast:** Ensure Stylus colors meet WCAG AA standards.