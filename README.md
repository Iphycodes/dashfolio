# Dashfolio — Repository Architecture Map

> A dashboard-style personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Ant Design 5**, **Tailwind CSS**, and **Framer Motion**.
>
> This document is the **source of truth for architecture**. Any new feature must follow the conventions described here. Do not invent new patterns when one already exists.

---

## 1️⃣ Project Overview

| Aspect | Detail |
| --- | --- |
| Framework | Next.js `14.2.15` (App Router) |
| Language | TypeScript (`strict: true`) |
| UI System | Ant Design `^5.21` + Tailwind CSS `^3.4` |
| Styling | Tailwind utility classes + SCSS overrides + CSS variables (HSL theming) |
| Animation | Framer Motion `^11` |
| Theming | `next-themes` (class strategy, default `dark`) |
| Icons | Remix Icon (`ri-*` classes), `react-icons`, `iconsax-react`, Lordicon/Lottie |
| Carousels | `react-slick` + `slick-carousel` |
| State | React Context (`AppContext`) + local component state |
| Data | **Static / hardcoded in component files** — there is currently **no backend API layer** |
| Package manager | Yarn (`yarn.lock` present) |
| Path alias | `@/*` → `./src/*` |

---

## 2️⃣ Key Directories

```
src/
├── app/                      # Next.js App Router (routing + layouts)
│   ├── layout.tsx            # Root layout: fonts, ThemeProvider, AntdRegistry, global CSS
│   ├── page.tsx              # "/" → renders <HomePage/>
│   ├── nav.tsx               # Central nav config (menu / resources / connect items)
│   ├── fonts.ts              # next/font definitions (Space Grotesk)
│   └── (ui)/                 # Route group for the app shell
│       ├── layout.tsx        # BaseLayout: AntD ConfigProvider (theme algorithm) + AppProvider
│       └── (dashboard)/      # Route group for dashboard pages
│           ├── layout.tsx    # Dashboard shell: Sidebar + Content + Footer (collapsible Sider)
│           ├── about/page.tsx
│           ├── projects/page.tsx
│           ├── blog/page.tsx
│           ├── blog/[id]/page.tsx
│           ├── certification/page.tsx
│           ├── experience/page.tsx
│           ├── explore/page.tsx
│           ├── services/page.tsx
│           ├── stacks/page.tsx
│           ├── courses/page.tsx     (route exists; nav item commented out)
│           ├── feeds/page.tsx       (route exists; nav item commented out)
│           └── boutique/page.tsx    (route exists; nav item commented out)
│
├── app-context/              # Global React Context (AppContext / AppProvider)
│
├── components/               # All React components (feature + shared UI)
│   ├── home/                 # Landing page ("/")
│   ├── auth/login/           # Login UI
│   ├── layout/               # App shell pieces: side-bar, app-header, footer
│   ├── ui/                   # Primitive/reusable UI (e.g. badge.tsx, CVA-based)
│   └── (dashboard)/          # One folder per dashboard feature (see §6)
│       ├── about/            #   index.tsx + lib/<sub-section>/
│       ├── projects/
│       ├── blog/
│       ├── certification/
│       ├── work-experience/
│       ├── stack/
│       ├── services/
│       ├── courses/
│       └── explore/
│
├── _shared/                  # Cross-cutting shared layer
│   ├── theme-provider/       # next-themes wrapper
│   ├── components/           # responsiveness, app-loader, theme toggler, nav-arrows
│   ├── constants/            # (currently empty — place global constants here)
│   ├── helpers/              # pure helper functions (e.g. generatePastelColor)
│   ├── namespace/            # global TS types (index.d.ts: NavItem, Pagination)
│   └── assets/svg/           # SVG-as-component exports (SVGR) + barrel index.ts
│
├── hooks/                    # Reusable hooks
│   ├── usePagination/
│   └── useSearch/            # debounced search (lodash/debounce)
│
├── lib/                      # Low-level utils
│   └── utils.ts              # cn() — clsx + tailwind-merge
│
├── utils/                    # Misc utils (lordicon.ts)
│
├── types/                    # Ambient module declarations (svg.d.ts, lord-icon.d.ts)
│
└── styles/                   # globals.css (Tailwind + CSS vars) + _override.scss (AntD overrides)
```

```
public/asset/
├── imgs/      # raster images (avatars, project shots, etc.)
└── svgs/      # static svgs
```

---

## 3️⃣ Core Architectural Modules

### Routing & Layout Chain
The app uses **nested App Router layouts** via route groups (folders in parentheses do not affect the URL):

```
app/layout.tsx (RootLayout)
  → html/body, Montserrat font, ThemeProvider (next-themes), AntdRegistry, global CSS imports
    └── app/(ui)/layout.tsx (BaseLayout)
          → AntD ConfigProvider (dark/default algorithm from theme), <AppProvider>, <Suspense>, AntD <App>
            └── app/(ui)/(dashboard)/layout.tsx (Layout)
                  → AntD <Sider> (collapsible) hosting <Sidebar/>, <Content> for page, <Footer/>
```

- `app/page.tsx` (the public landing page) lives **outside** the `(ui)` group and renders `components/home`.
- Every page under `(dashboard)` is a thin wrapper that renders a feature component from `components/(dashboard)/<feature>`.

### Page → Feature Component Convention
Pages are intentionally thin. Example pattern (replicate exactly):

```tsx
// src/app/(ui)/(dashboard)/about/page.tsx
import About from '@/components/(dashboard)/about';
import React from 'react';

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
```

All real UI/logic lives in `components/(dashboard)/<feature>/index.tsx` and its `lib/` subfolder.

---

## 4️⃣ State Management

- **Global state:** `src/app-context/index.tsx` — `AppContext` / `AppProvider`.
  - Currently exposes `toggleSider` / `setToggleSider` (sidebar collapse state).
  - Consumed via `useContext(AppContext)` (e.g. dashboard layout + sidebar).
  - **To add new global state:** extend `AppContextPropType`, add `useState` in `AppProvider`, and include it in the `values` object. Do not create a second context provider.
- **Theme state:** managed by `next-themes` (`useTheme()`), persisted to `localStorage` under key `dashfolio-theme-key`.
- **Local state:** standard `useState` / `useEffect` inside feature components.

---

## 5️⃣ Hooks, Utilities & Helpers

| Module | Location | Purpose |
| --- | --- | --- |
| `usePagination` | `src/hooks/usePagination/index.tsx` | Returns `{ paginate, pagination, setTotal }` for AntD-style pagination |
| `useSearch` | `src/hooks/useSearch/index.ts` | Debounced search (`lodash/debounce`), returns `{ searchValue, debouncedChangeHandler, setSearchValue }` |
| `useMediaQuery` + `mediaSize` | `src/_shared/components/responsiveness/index.tsx` | Responsive breakpoints (`desktop`/`mobile`/`tablet`) + `<Desktop>`/`<Mobile>`/`<Tablet>` wrappers |
| `cn()` | `src/lib/utils.ts` | Merge Tailwind classes (`clsx` + `tailwind-merge`) — use for all conditional className logic |
| `generatePastelColor()` | `src/_shared/helpers/index.ts` | Deterministic pastel color from a seed string |

**Always reuse these** rather than re-implementing pagination, search debouncing, responsive checks, or className merging.

---

## 6️⃣ Feature Module Pattern (`components/(dashboard)/<feature>`)

Each dashboard feature follows the same internal structure. Example — `about`:

```
components/(dashboard)/about/
├── index.tsx                 # Feature entry: composes the sub-sections, owns hero + layout
└── lib/
    ├── personal-info/
    │   ├── index.tsx         # Sub-section (holds its own static data array)
    │   └── info-card.tsx     # Presentational card used by the sub-section
    ├── education/
    │   ├── index.tsx
    │   └── education-card.tsx
    ├── career-journey/
    │   ├── index.tsx
    │   └── career-card.tsx
    ├── interests/
    │   ├── index.tsx
    │   └── interest-card.tsx
    └── tech-passion/
        ├── index.tsx
        ├── tech-stack.tsx
        └── contribution.tsx
```

**Conventions to replicate for any new feature:**
1. `index.tsx` is the feature root, marked `'use client'`, composes `lib/*` sub-sections.
2. Each sub-section lives in `lib/<kebab-case-name>/index.tsx`.
3. A sub-section that renders a repeated card extracts it into a sibling `*-card.tsx`.
4. **Static data** (arrays of items) is declared as a `const` at the top of the relevant file. Some data is exported for reuse across routes (e.g. `blogPosts` is exported from `components/(dashboard)/blog` and imported by `blog/[id]/page.tsx`).
5. Animations use `framer-motion` (`motion.*`, `initial`/`animate`/`transition`, shared `fadeUp`-style variants).
6. Responsiveness uses `useMediaQuery(mediaSize.mobile|tablet)` — not raw `window.matchMedia`.

### Dynamic routes
`blog/[id]/page.tsx` reads the id via `useSearchParams()` (query-param style: `?id=`), looks the item up in the exported static `blogPosts` array, and renders `lib/blog-post-content`. Replicate this lookup pattern for other detail pages.

---

## 7️⃣ Navigation

Central nav config lives in **`src/app/nav.tsx`** — a single `appNav` object with three groups:

- `menuNavitem` — primary dashboard routes (Home, Explore, About, Projects, Certification, Stacks, Work Experience)
- `resourcesNavItem` — Blog, Services (Feeds/Boutique/Courses are commented out but routed)
- `connectNavItem` — external social links (rendered with `url`, opened in a new tab)

`NavItem` type is defined in `src/_shared/namespace/index.d.ts`.

**To add a route to the sidebar:** add a `NavItem` (with a Remix `ri-*` icon) to the correct array in `nav.tsx`. The `key` must match the route segment (e.g. `key: 'about'` → `/about`). The `Sidebar` (`components/layout/side-bar`) drives navigation by pushing `/${key}` and highlights the active item via `usePathname()`. Keep the `footer` link list (`components/layout/footer`) in sync.

---

## 8️⃣ Styling & Theming

- **Tailwind** is the primary styling tool. Config: `tailwind.config.ts` (`darkMode: 'class'`).
- **CSS variables** (HSL) define the palette in `src/styles/globals.css` under `:root` and `.dark`; Tailwind colors like `background`, `card`, `muted`, `border` map to those variables.
- **Custom Tailwind tokens:** `neutral.800/900`, `sider.dark`, `blue`, `sky`, `blue-gradient`, `shadow-minimal`, `shadow-light`.
- **AntD overrides:** `src/styles/_override.scss`.
- **Dark mode** is the default theme; toggled via `CustomThemeToggler` (`_shared/components/custom-theme-toggler`).
- Use the `dark:` variant for dark-mode-specific styles, matching existing components.
- SVGs are imported as React components via **SVGR** (configured in `next.config.mjs`); see `_shared/assets/svg/index.ts` barrel.

---

## 9️⃣ Global Configuration Files

| File | Purpose |
| --- | --- |
| `next.config.mjs` | Next config + SVGR webpack loader for `*.svg` imports |
| `tsconfig.json` | TS config; `strict`, `@/*` path alias → `src/*` |
| `tailwind.config.ts` | Tailwind theme extensions, custom colors, `darkMode: 'class'` |
| `postcss.config.mjs` | PostCSS (Tailwind + autoprefixer) |
| `.eslintrc.json` | ESLint (next + typescript + prettier); `no-explicit-any` off |
| `.prettierrc` | Prettier (printWidth 100, single quotes, semicolons, es5 trailing comma) |
| `.env` | Env vars (`VERCEL_FORCE_NO_BUILD_CACHE`) |
| `Dockerfile` / `.dockerignore` | Containerization |
| `package.json` | Scripts: `dev`, `build`, `vercel-build`, `start`, `lint` |

---

## 🔟 Conventions Checklist (follow before writing code)

- [ ] **Path alias:** import via `@/...`, never long relative chains across `src`.
- [ ] **Client components:** add `'use client'` at the top of any component using hooks, context, framer-motion, or browser APIs.
- [ ] **New page:** create `app/(ui)/(dashboard)/<route>/page.tsx` that renders a feature component from `components/(dashboard)/<route>`; add the matching `NavItem` to `app/nav.tsx`.
- [ ] **New feature UI:** put it under `components/(dashboard)/<feature>/` with an `index.tsx` and `lib/` sub-sections; extract repeated cards into `*-card.tsx`.
- [ ] **Shared/reusable UI primitive:** put it in `components/ui/` (CVA + `cn()` pattern, see `badge.tsx`).
- [ ] **Cross-cutting helper/hook/type:** use `_shared/helpers`, `hooks/`, or `_shared/namespace` — reuse `usePagination`, `useSearch`, `useMediaQuery`, `cn()`.
- [ ] **Global state:** extend `AppContext` in `app-context/index.tsx`; do not add a new provider.
- [ ] **Styling:** Tailwind utilities + `dark:` variants + existing color tokens; merge classes with `cn()`.
- [ ] **Icons:** prefer Remix Icon `ri-*` classes (matches nav/feature usage).
- [ ] **Animation:** Framer Motion, consistent with existing `initial`/`animate`/`transition` usage.
- [ ] **Type safety:** strongly typed props; reuse types from `_shared/namespace`.

---

## ⚠️ Notes / Gaps (current state of the repo)

- **No backend/API layer exists.** All content is static data hardcoded in component files. If/when an API is introduced, define a dedicated `services`/`api` layer + query hooks — but do **not** assume one exists today.
- `_shared/constants/index.ts` is currently **empty** — it is the intended home for global constants.
- `components/auth/login` exists but is not wired into a route group yet.
- Some routes (`courses`, `feeds`, `boutique`) exist but their nav items are commented out in `nav.tsx`.

---

_Generated as a repository map. No features implemented in this pass — this document is the architectural baseline for all future work._
