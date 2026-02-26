# Frontend Mentor - Advice Generator App

![Design preview](./public/design/desktop-preview.jpg)

## Overview

Solution for
the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot](./public/design/desktop-design.jpg)

### Links

- Solution URL: [GitHub](https://github.com/dxdxdie/advice-generator-mentor)
- Live Site URL: _coming soon_

---

## Built with

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- [Advice Slip API](https://api.adviceslip.com/)

## Features

- Fetches a random advice from the Advice Slip API on load
- New advice on button click
- Cache-busting via `?timestamp=` to avoid repeated responses from the API
- Responsive layout — mobile-first, adapts to tablet and desktop
- Different divider SVGs for mobile and desktop breakpoints
- Loading and error states handled gracefully
- Glow effect on dice button hover

## Project Structure

```
src/
  App.tsx        # Main component with fetch logic and UI
  index.css      # Tailwind CSS v4 import
  main.tsx       # React entry point
types/
  index.ts       # AdviceResponse and Advice types
public/
  icon-dice.svg
  pattern-divider-mobile.svg
  pattern-divider-desktop.svg
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## What I learned

- Mobile-first responsive design with Tailwind CSS breakpoints (`md:`, `lg:`)
- Positioning elements outside their parent using `absolute` + `translate-y-1/2`
- Hiding/showing different assets per breakpoint with `hidden` and `lg:block`
- Cache-busting API requests with `Date.now()` to avoid stale responses
- TypeScript typing for API responses with interfaces and type aliases

---

## Author

- Frontend Mentor — [@dxdxdie](https://www.frontendmentor.io/profile/dxdxdie)
- GitHub — [@dxdxdie](https://github.com/dxdxdie)