# Multitenant Time Tracker (React Frontend)

Minimalist & robust frontend for tracking time, projects, clients, and technologies, supporting secure multi-tenant organizations.

---

## 📋 Architectural Overview

- **Platform:** React (SPA)
- **UI Structure:** Sidebar navigation, top bar (actions/user), main dashboard area, modal dialogs for edit/add.
- **Theme:** Modern, minimalist, auto-adapting (light/dark).
- **REST API:** Communicates via JSON with FastAPI backend (endpoints as per architecture docs).
- **State:** Stateless between sessions; session/user/tenant info kept in browser (token/cookie).

**Component Map:**

- `App`: Root application, theme/context providers, routes setup
- `Sidebar`: Persistent navigation (Dashboard, Clients, Projects, Time Entries, Reports, Settings/Profile)
- `TopBar`: Quick actions (timer, add), theme toggle, current user/org
- `Dashboard`: Widgets for hour/project/tech/client summaries, recent activity
- `Auth`: Login / Register / Tenant select flows, using backend auth endpoints
- `Clients`, `Projects`, `Technologies`: CRUD pages/tables for each entity, with modal dialogs
- `TimeEntries`: List of recorded work, manual entry/edit
- `Timer`: Floating or top-bar timer UI (start, stop, active session view)
- `Reports`: Filters, export actions, summary
- `Profile/Settings`: Password/email update, tenant switching
- `NotFound`: 404/Error view

---

## 🎯 Features (See also Product Requirements)

- Authentication & multi-tenant login (JWT/session, per-tenant scope)
- Dashboard: Summaries for hours by project, client, technology, user, recent activity
- Start/stop timers for tracked sessions (precise, prevents overlap)
- Manual time entry (edit/correct sessions)
- Technologies/tagging for sessions & projects
- CRUD UI for clients, projects, technologies, time entries (all tenant-scoped)
- Export reporting (CSV, Excel) with advanced filters
- Responsive, accessible layout (mobile/desktop parity)
- Minimalist, modern, A11Y-compliant design
- Strict tenant scoping on all data/actions

---

## 🏛️ Mapping - User Stories & Requirements Compliance

| Feature/Epic             | Frontend Component         | Status     | Tests   |
|------------------------- |---------------------------|------------|---------|
| Auth & Tenant Login      | `Auth/Login/SelectTenant` | Todo       | [ ]     |
| Dashboard                | `Dashboard`, `Widgets`    | Planned    | [ ]     |
| Timer & Time Entry       | `Timer`, `TimeEntries`    | Planned    | [ ]     |
| CRUD: Clients/Projects   | `Clients`, `Projects`     | Planned    | [ ]     |
| Tech Tags Mgmt           | `Technologies`            | Planned    | [ ]     |
| Reporting/Export         | `Reports`                 | Planned    | [ ]     |
| Profile/Settings         | `Profile/Settings`        | Future     | [ ]     |
| A11Y/Theme               | `ThemeProvider`, global   | ✅ Initial | [x]     |

- See [kavia-docs/user-stories.md](../kavia-docs/user-stories.md) for acceptance criteria details.

---

## 🧑‍💻 Development/Extensibility Notes

- All components use plain React; no heavy UI libraries (CSS in App.css and per-component).
- Sidebar and TopBar are present on all main pages, adapt responsively. Routing via `react-router-dom`.
- REST API base configured per environment (env var), all API calls scoped to signed-in tenant.
- Theming, A11Y and mobile responsiveness considered core (see `App.css` for variables).
- Add new features by dropping into `/src/components` and connecting to routes/context.
- For E2E/unit tests see `/src/__tests__/` and [setupTests.js](src/setupTests.js).

---

## 🛂 Security & Compliance (QA)

- All data strictly filtered by tenant session.
- App forces login/session on all main routes except `/login`.
- No direct DB or external API requests outside backend REST layer.
- JS tests are required for critical auth/session UI, core CRUD forms, and API error handling.

---

## 🚦 Quickstart

See below for running/testing.

(In the project directory):

- `npm start` — dev mode at [localhost:3000](http://localhost:3000)
- `npm test` — runs all test suites
- `npm run build` — production build to `/build`
- `npm run lint` — lint

---

## 🎨 Customization (Colors, Components)

- Main colors in [src/App.css](src/App.css):
  ```
  :root {
    --primary-dark: #1a202c;
    --secondary: #2d3748;
    --accent: #3182ce;
    ...
  }
  ```
- Add or change components in `/src/components`, styles in `/src/App.css` or component CSS.
- Common component conventions: Buttons (`.btn`), Containers (`.container`), Sidebar (`.sidebar`), TopBar (`.topbar`), Widgets, Modals.

---

## 🔗 References

- [Architecture Docs](../kavia-docs/architecture.md)
- [UI & Design Docs](../kavia-docs/ui-and-architecture-design.md)
- [Product Requirements](../kavia-docs/product-requirements.md)
- [User Stories](../kavia-docs/user-stories.md)
- [Database Schema](../kavia-docs/database-schema.md)
- [QA Checklist](../kavia-docs/qa-checklist.md)
- [Frontend Gap Analysis](../kavia-docs/frontend-gap-analysis.md)

---

## ⚡️ Next Steps

See `kavia-docs/frontend-gap-analysis.md` for checklist and track delivery & compliance as features land.

