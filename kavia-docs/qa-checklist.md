# QA Checklist: Multitenant Time Tracker

This QA checklist ensures that the multitenant time tracker application is robust, secure, user-friendly, and meets all specified requirements and user stories. All items below should be verified prior to release.

---

## 1. Functionality

- [ ] Users can register, log in, and log out successfully.
- [ ] Users can select or switch tenants (organizations).
- [ ] Full CRUD operations available for:
  - [ ] Clients
  - [ ] Projects
  - [ ] Technologies/tags
  - [ ] Work sessions/time entries
- [ ] Users can start, pause, and stop timers for recording project work.
- [ ] Manual time entry and editing functions are available and work correctly.
- [ ] Technologies can be assigned to projects and to sessions.
- [ ] Dashboard correctly summarizes project/client/technology/time data.
- [ ] Reports are filterable by date, client, project, user, and technology.
- [ ] Export (CSV/Excel) produces correct, tenant-scoped data.
- [ ] Mobile browser access provides all key actions (timing, CRUD, export).

---

## 2. Multi-Tenancy & Data Isolation

- [ ] Data accessed and displayed is always filtered strictly to the current tenant.
- [ ] It is impossible to view, access, or mutate other tenants' data, even by manipulating HTTP requests.
- [ ] Database schema enforces tenant ID columns on all business entities.
- [ ] Users from other tenants cannot be invited or managed unless they are in the same tenant scope.
- [ ] Attempts to use, join, or query another tenant's ID in requests are securely rejected.
- [ ] Automated testing or QA scripts confirm no cross-tenant data leakage under all operations.

---

## 3. Security (Authentication, Authorization, Data Leakage)

- [ ] Signup, login, logout flows are protected against common attacks (XSS, CSRF, brute force).
- [ ] Sessions/tokens securely encode the user's tenant ID and user ID.
- [ ] JWT or session tokens expire and can be refreshed securely.
- [ ] All API endpoints require authentication and validate tenant context.
- [ ] No sensitive data is exposed in logs, error messages, or API responses.
- [ ] Passwords are properly hashed on the backend; no plaintext passwords are stored.
- [ ] CORS is configured to only allow trusted origins.
- [ ] Database connections do not permit untrusted direct access from the frontend.
- [ ] Penetration tests include attempts at horizontal privilege escalation.
- [ ] Error messages do not leak underlying implementation or data structure.

---

## 4. UI/UX (Web and Mobile)

- [ ] Application adapts smoothly to mobile, tablet, and desktop screen sizes.
- [ ] All interactive elements have accessible labels, focus management, and tab order.
- [ ] High-contrast themes and a theme switcher are available and function correctly.
- [ ] Forms validate all required fields and provide meaningful error messages.
- [ ] Visual feedback is provided for operations (loading, errors, success messages).
- [ ] Sidebar navigation and dashboard are intuitive and easy to navigate.
- [ ] Modal dialogs for editing/adding are keyboard accessible.
- [ ] All color contrast and font sizes meet accessibility standards (WCAG 2.1 AA).
- [ ] Core workflows (timer, CRUD, reporting) are easily discoverable with minimal steps.

---

## 5. Dashboard & Reporting

- [ ] Dashboard displays accurate summaries and charts for:
  - [ ] Hours tracked by client, by project, by technology, by user, by date
  - [ ] Recent activity
- [ ] No cross-tenant data ever appears in any dashboard widget.
- [ ] Reporting filters (date, project, client, tech, user) work precisely.
- [ ] Exported report data matches what is displayed in dashboard summaries.
- [ ] Export files open in Excel/Sheets without formatting errors.

---

## 6. Data CRUD Quality

- [ ] Create/Edit/Delete client, project, technology, and session work as expected.
- [ ] Editing/updating a project or client affects only that entity and does not break associations.
- [ ] Tagging/untagging of technologies functions for both projects and time entries.
- [ ] Deleting/archiving does not create orphaned records or unintentional data loss.
- [ ] Users cannot delete records they do not own or outside their tenant.

---

## 7. CSV/Export

- [ ] CSV/Excel export can be triggered from dashboard or reports view.
- [ ] Export prompts for and respects all filters applied in the UI.
- [ ] Files contain only tenant-relevant data, correctly delimited and encoded.
- [ ] Large exports (thousands of rows) complete successfully and quickly.
- [ ] Exported files contain no extraneous data or columns.

---

## 8. Acceptance from User Stories and Epics

- [ ] All acceptance criteria in user stories are met for each epic:
  - [ ] Multi-tenant authentication & isolation
  - [ ] Client/project/technology CRUD
  - [ ] Work session tracking (timer/manual)
  - [ ] Dashboard & reporting
  - [ ] Admin/user management (if present)
  - [ ] Accessibility and security standards

---

## 9. Architectural/Scalability Requirements

- [ ] Strict separation between frontend, backend, and data layers is maintained.
- [ ] APIs and schema support horizontal scaling (stateless backend, DB isolation).
- [ ] Modular design permits easy addition of new features (technologies, reports, integrations).
- [ ] Minimal dependencies; all libraries used are up-to-date and reputable.
- [ ] Versioning and extensibility plans are documented where applicable.

---

## 10. Additional Quality/Release Criteria

- [ ] All automated and manual tests pass (unit, integration, E2E).
- [ ] No critical or high-priority bugs remain open.
- [ ] Deployment and backup/restore procedures are documented.
- [ ] Stakeholders have reviewed and signed off on feature completeness and UX.
- [ ] Documentation is complete, including architecture, schema, PRD, user stories, and this checklist.

---

*End of QA Checklist*
