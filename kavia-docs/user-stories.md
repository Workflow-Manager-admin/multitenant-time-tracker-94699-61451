# User Stories & Acceptance Criteria
## Multitenant Time Tracker

---

This document contains feature epics, user stories (in classic "As a... I want... So that..." form), and explicit acceptance criteria. Stories are grouped by major epic/feature and written to provide clear, testable definitions for development, QA, and future unit/integration testing.

---

## Epic 1: Multi-Tenant User Authentication & Isolation

### User Story 1.1: Tenant Signup & Workspace Creation
**As a** new organization representative  
**I want** to register a new tenant (company or group) and create its workspace  
**So that** my team can start using the time tracker, isolated from other organizations.

**Acceptance Criteria:**
- A user can submit a registration form with org name, email, and admin details.
- After registration, the user is placed in a new tenant scope with a unique tenant ID.
- No users, clients, or projects from other tenants are visible at any time.

---

### User Story 1.2: Tenant-scoped User Login
**As a** user belonging to a tenant  
**I want** to log in with my email/password to the correct tenant workspace  
**So that** all data and features are scoped to my organization's data only.

**Acceptance Criteria:**
- Login requires both tenant context and user credentials.
- Upon successful login, user only sees their own tenant's data.
- If credentials are wrong or tenant is wrong, display a clear error.
- User's JWT/session contains tenant_id.

---

### User Story 1.3: Tenant-based Access Control Enforcement
**As a** backend developer  
**I want** all database queries and API calls to be automatically tenant-filtered  
**So that** no user can ever access, view, or modify another tenant's data.

**Acceptance Criteria:**
- All CRUD APIs require tenant context (passed in auth/session).
- Every query against business tables uses tenant_id as filter.
- Attempts to specify another tenant's ID fail securely with error.
- Automated audit log (potential future) scoped by tenant.

---

## Epic 2: Client & Project Management (CRUD)

### User Story 2.1: Add/Edit/Delete Clients
**As a** tenant user  
**I want** to create, update, and remove clients for my organization  
**So that** projects and time entries can be associated with the correct client context.

**Acceptance Criteria:**
- Client creation form validates required fields, handles optional notes/contact.
- Edits update existing client data within tenant context.
- Delete disables (archives) a client if it has projects, else removes entry.
- Only my tenant's clients are ever listed.

---

### User Story 2.2: Add/Edit/Delete Projects
**As a** tenant user  
**I want** to manage the full lifecycle of projects, associating them with clients  
**So that** time entries can be tracked by project for reporting and billing.

**Acceptance Criteria:**
- Project form allows choosing from tenant's available clients.
- No cross-tenant relationships allowed.
- Projects are searchable, filterable, can be archived (inactive).
- Deleting a project with entries disables (archives) it but doesn't delete time entries.

---

### User Story 2.3: Projects Use Technology Tags
**As a** user creating or editing a project  
**I want** to associate relevant technologies so that skill/time tracking is possible.

**Acceptance Criteria:**
- Projects allow zero or more tags (technologies) at creation/edit time.
- Only technologies from the tenant's list can be used.
- Project_technology join table is correctly updated.

---

## Epic 3: Technology Tag Management

### User Story 3.1: Add/Edit/Delete Technology Tags
**As a** tenant admin  
**I want** to maintain a list of technologies used within my team  
**So that** we can tag projects and sessions accurately and keep the list relevant.

**Acceptance Criteria:**
- Technologies have a name, optional description, and can be archived.
- Names are unique per tenant.
- Deleting a technology removes it from tag relations but does not affect time entries/projects.

---

## Epic 4: Time Entry Recording & Management

### User Story 4.1: Track Time via Start/Stop Timer
**As a** logged-in user  
**I want** to start and stop a timer for project work  
**So that** precise work sessions are logged without manual entry.

**Acceptance Criteria:**
- Timer button starts a new time entry for chosen project.
- Stopping sets end_time; start and stop times are required.
- Cannot start a new timer if one is already running for the user.

---

### User Story 4.2: Manual Time Entry & Editing
**As a** user  
**I want** to enter sessions manually or correct/edit existing ones  
**So that** mistakes or missed intervals can be accurately recorded.

**Acceptance Criteria:**
- Can add manual entries, specifying start/end, project, technology.
- Cannot overlap with existing time entries for user.
- Edits and deletes only affect user's tenant.

---

### User Story 4.3: Tag Time Entries with Technologies
**As a** user logging time  
**I want** to tag each session with one or more technologies  
**So that** reporting by skills/technology use is possible.

**Acceptance Criteria:**
- Tag picker populated from tenant's active technologies.
- Join table (time_entry_technology) is updated.
- At least one tag recommended, but not strictly required.

---

## Epic 5: Dashboard, Reporting, and Exports

### User Story 5.1: Visualize Hours by Project, Client, Technology, Date
**As a** team member or admin  
**I want** dashboard charts/cards showing my time distribution  
**So that** I can quickly review effort spent by category over time.

**Acceptance Criteria:**
- Dashboard widgets show only current tenant's data.
- Summaries: hours by project, client, technology, user, date.
- No cross-tenant data appears, ever.

---

### User Story 5.2: Filtered Data Export (CSV/Excel)
**As a** user  
**I want** to export my (tenant's) time entry/report data by filters  
**So that** I can use it for invoices or import into other tools.

**Acceptance Criteria:**
- Export API or button on dashboard list/views.
- Filters work by date range, project, client, user, technology.
- Exported file contains only tenant-scoped data.
- At least CSV is supported, Excel encouraged.

---

## Epic 6: Admin & User Management

### User Story 6.1: Add or Remove Users in My Tenant
**As a** tenant admin  
**I want** to invite my colleagues or remove access  
**So that** I can control who can use our workspace.

**Acceptance Criteria:**
- User invite/creation emails a signup link or creates a record.
- Only tenant admins see the user management area.
- Deleting users disables account (soft delete).
- Cannot remove self if only admin left.

---

## Epic 7: Security, Compliance, and Accessibility

### User Story 7.1: Accessibility Standards
**As a** user of any ability  
**I want** the application to comply with accessibility best practices  
**So that** it is usable for all, on any device.

**Acceptance Criteria:**
- High color contrast, keyboard navigation, aria-labels everywhere.
- Forms have correct field labels and error hints.
- UI works fluidly on mobile and desktop.

---

### User Story 7.2: Strict Multi-Tenant Data Security
**As a** product owner  
**I want** technical and process controls to ensure tenant data never leaks  
**So that** customers trust their business is protected.

**Acceptance Criteria:**
- row-level security enforced by design (tenant_id in every business table).
- Backend APIs reject mismatched/joined tenant queries.
- Regular audits/checks for leaks or misfiltered queries.

---

*End of User Stories & Acceptance Criteria*
