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

---

## 🧠 Key Features
- Parallax intro animation: Users must scroll to reveal the moon. Once fully visible, scrolling is disabled and the app loads.

- Dynamic authentication UI: Easily switch between login and register, with real-time feedback and emoji-based toggle (😴 / 💤).

- Immersive design: Fonts, colors, and shadows evoke calmness and dream-like visuals.

- Modular architecture: Clean, reusable component and hook structure.

----

## 📁 Project Structure

```bash
src/
├── views/
│   ├── Auth.jsx               # Authentication screen
│   ├── Home.jsx               # Main user view
│   ├── Profile.jsx            # User profile page
│   └── ParallaxBackground.jsx # Animated intro scroll view
├── components/
│   └── Authentication/
│       └── LoginRegister.jsx  # Login/Register form
│   └── Background/
│       └── FixedBackground.jsx # Static background after parallax completes
├── hooks/
│   └── useParallaxBackground.js # Handles scroll + opacity animation
│   └── useAuthentication.js     # Login/Register logic
├── app.scss
└── App.jsx                    # Routes & core app logic
```

---

## 📬 Contact

Created by **Facundo Robert** – [GitHub](https://github.com/RobertFacundo)  

Feel free to reach out for collaboration or feedback!!

----
