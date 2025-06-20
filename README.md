# 📘 Dream Journal — Frontend

A modern, animated interface for a dream journal app. Includes user authentication and a parallax scrolling effect that gradually reveals the moon in a night sky. Built to integrate with a NestJS backend, this frontend provides an immersive and polished experience from the first scroll.

--- 
## 🌙 Live Demo
🔗 **Frontend App (Live)**: [https://dream-journal-f.vercel.app/](https://dream-journal-f.vercel.app/)

---

## 🚀 Tech Stack

- React 18 — Core UI library

- React Router DOM — Routing between views

- SCSS — Custom styles and animations

- Vercel — Frontend hosting

- Parallax + Opacity Animation — Smooth scroll-triggered transitions

- User Authentication — Connected to a NestJS backend

- react-calendar — Calendar UI component to visualize dreams

---

## 🧠 Key Features
- Parallax intro animation: Users must scroll to reveal the moon. Once fully visible, scrolling is disabled and the app loads.

- Dynamic authentication UI: Easily switch between login and register, with real-time feedback and emoji-based toggle (😴 / 💤).

- Immersive design: Fonts, colors, and shadows evoke calmness and dream-like visuals.

- Modular architecture: Clean, reusable component and hook structure.
  
- Users can add one or more dreams, which are displayed interactively in a calendar within their profile page.

----

## 📁 Project Structure

```bash
src/
├── assets/
│   └── react.svg
├── components/
│   ├── Authentication/
│   │   ├── LoginRegister.jsx
│   │   └── LoginRegister.scss
│   ├── Background/
│   │   ├── FixedBackground.jsx
│   │   └── FixedBackground.scss
│   ├── Home/
│   │   ├── Facts/
│   │   │   ├── DreamyFacts.jsx
│   │   │   ├── DreamyFacts.scss
│   │   │   ├── FactCard.jsx
│   │   │   └── FactCard.scss
│   │   ├── MoonMessage/
│   │   │   ├── MoonMessage.jsx
│   │   │   └── MoonMessage.scss
│   │   ├── MoonModal/
│   │   │   ├── MoonModal.jsx
│   │   │   └── MoonModal.scss
│   │   ├── REM/
│   │   │   ├── RemInfo.jsx
│   │   │   └── RemInfo.scss
│   │   ├── HomeLayout.jsx
│   │   ├── WelcomeModal.jsx
│   │   └── WelcomeModal.scss
│   ├── NavBar/
│   │   ├── NavBar.jsx
│   │   └── NavBar.scss
│   └── Profile/
│       ├── DreamCalendar.jsx
│       ├── DreamCalendar.scss
│       ├── DreamSideBar.jsx
│       └── DreamSideBar.scss
├── config/
│   └── axiosConfig.js
├── contexts/
│   └── UserContext.jsx
├── hooks/
│   ├── useAddDream.js
│   ├── useAuthentication.js
│   ├── useDreamForm.js
│   ├── useModalVisibility.js
│   ├── useParallaxBackground.js
│   ├── useProfile.js
│   └── useWelcomeModal.js
├── services/
│   ├── AuthServices.js
│   ├── DreamServices.js
│   └── UserServices.js
├── views/
│   ├── Authentication.jsx
│   ├── Home.jsx
│   ├── Home.scss
│   ├── ParallaxBackground.jsx
│   ├── ParallaxBackground.scss
│   ├── Profile.jsx
│   └── Profile.scss
├── app.scss
├── App.jsx
└── main.jsx
```

---

## 📬 Contact

Created by **Facundo Robert** – [GitHub](https://github.com/RobertFacundo)  

Feel free to reach out for collaboration or feedback!!

----
