# Mandlacx Studio

A modern surveillance dashboard built with Next.js, React, and Tailwind CSS. Features include:

- Responsive Navbar with logo and navigation icons  
- Incident list with color-coded event tags  
- Interactive timeline with camera events and video controls  
- Optimized image loading using Next.js Image component  

## 🚀 Deployment

Here is the deployed project:  
👉 [https://mand-lacx.vercel.app/](https://mand-lacx.vercel.app/) 


## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/kumarabhishek188/MandLacx.git
   cd MandLacx
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
studio/
├── public/                     # Static assets (logo, icons, images)
├── src/
│   ├── app/                    # App entry point, layout, global styles
│   └── components/             # Reusable UI components
│       ├── Navbar.tsx
│       ├── Timeline.tsx
│       ├── EventTag.tsx
│       ├── IncidentList.tsx
│       └── IncidentPlayer.tsx
├── styles/                     # Tailwind and global styles
├── .eslintrc.js                # ESLint configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md


- `src/components/` — UI components (Navbar, IncidentList, Timeline, IncidentPlayer, EventTag)
- `public/` — Static assets (images, logo, icons)
- `src/app/` — App entry and global styles
```

## 🧠 Tech Decisions:
- Next.js – Chosen for file-based routing, SSR/SSG, and Vercel integration.

- React – Declarative, component-based structure makes it ideal for dynamic UIs.

- Tailwind CSS – Utility-first styling for fast development and consistent design.

- TypeScript – Adds type safety and better developer tooling.

- Vercel – Smoothest deployment experience for Next.js apps.


## 🌱 Future Improvements:
- 🔄 Real-time video stream integration (WebRTC)

- 🔍 Event filtering by type, camera, or severity

- 🔐 Authentication and role-based permissions

- 📡 Show camera online/offline status

- 📁 Download/export event logs

- 🌙 Dark/Light theme toggle

- 📱 Better mobile UX with touch-friendly timeline

- 🔔 Push alerts for critical events
