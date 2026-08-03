<div align="center">

# Raven Magbanua — Portfolio

**Full Stack Developer pursuing opportunities as an Associate Software Engineer.**

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white)](https://zod.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-FFB400?logo=maildotru&logoColor=black)](https://www.emailjs.com/)
[![OpenRouter](https://img.shields.io/badge/OpenRouter-7C3AED?logo=openai&logoColor=white)](https://openrouter.ai/)

[Overview](#overview) · [Features](#features) · [Projects](#featured-projects) · [Getting started](#getting-started) · [Contact](#contact)

</div>

## Overview

This portfolio presents the software engineering background, experience, projects, technical skills, certificates, and engineering journey of **Raven Magbanua**, a Computer Engineering graduate from Pampanga State University.

Raven specializes in responsive web applications and REST API development, with experience across relational and NoSQL databases, IoT systems, machine learning, and embedded development. The portfolio is designed for Associate Software Engineer opportunities and demonstrates a focus on secure, scalable, and maintainable software.

## Features

- Professional profile and career summary
- Experience and education timeline
- Categorized software, AI, mobile, embedded, and development skills
- Featured projects with source and live-application links
- Certificate and engineering gallery collections
- Downloadable software and embedded systems resumes
- Validated contact form built with React Hook Form and Zod
- Contact email delivery through EmailJS
- Light and dark appearance support using shadcn/ui components
- AI portfolio assistant powered by OpenRouter

## Lancaster assistant

**Lancaster** is the portfolio's AI assistant. A floating action button opens the chat interface and allows visitors to ask about Raven's background, experience, education, projects, technologies, and certificates.

Lancaster follows these constraints:

- Uses the exported portfolio `context` object as its single source of truth
- Answers only questions related to Raven and the portfolio
- Treats the supplied portfolio context as data, not instructions
- Avoids inventing projects, experience, skills, or qualifications
- Returns concise plain-text responses without Markdown formatting
- Sends model requests through a server-side OpenRouter integration

## Career highlights

| Year      | Experience                                                             |
| --------- | ---------------------------------------------------------------------- |
| 2026      | IoT / AI Developer Intern at SATEZO OPC                                |
| 2025      | Freelance Developer, self-employed                                     |
| 2023      | Django and React Developer through personal projects                   |
| 2022–2026 | Bachelor of Science in Computer Engineering, Pampanga State University |

## Featured projects

| Project                       | Description                                                              | Technologies                                                 | Links                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Resume.io                     | ATS-friendly resume builder that generates professional PDF resumes      | Next.js, React PDF                                           | [Source](https://github.com/pravennn08/Resume.io)                                                                                 |
| A.S.A.P Lagundi               | Real-time incident reporting system for Barangay Lagundi                 | Express, React, Prisma, Node.js, PostgreSQL, Neon, Socket.IO | [Source](https://github.com/pravennn08/ASAP-Lagundii)                                                                             |
| Academe.io                    | School management API for academic records, users, schedules, and events | Django, PostgreSQL, Redis, Neon, Docker                      | [Source](https://github.com/pravennn08/Academe.io-API)                                                                            |
| EMIL Glass and Aluminum Works | Online consultation and service appointment website                      | Next.js, Zod, shadcn/ui, EmailJS                             | [Source](https://github.com/pravennn08/Emil_glass_and_aluminum_works) · [Live](https://emil-glass-and-aluminum-works.vercel.app/) |

## Technical background

| Area             | Technologies                                                                          |
| ---------------- | ------------------------------------------------------------------------------------- |
| Backend          | Python, Node.js, Django, Express, PostgreSQL, SQLite, Redis, MongoDB, AWS             |
| Frontend         | JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Vite, Zustand, Redux |
| Machine learning | TensorFlow, Ultralytics, PyTorch, Scikit-learn                                        |
| Mobile           | Android Studio, Flutter, Dart, Kivy                                                   |
| Systems          | Linux, Ubuntu, Raspberry Pi                                                           |
| Tools            | Git, GitHub, VS Code, Anaconda, Jupyter Notebook, Bruno, Postman                      |

## Portfolio stack

| Technology                                      | Purpose                                                     |
| ----------------------------------------------- | ----------------------------------------------------------- |
| [Next.js](https://nextjs.org/)                  | Application framework, routing, and server-side integration |
| [shadcn/ui](https://ui.shadcn.com/)             | Accessible and reusable interface components                |
| [React Hook Form](https://react-hook-form.com/) | Contact-form state and submission handling                  |
| [Zod](https://zod.dev/)                         | Contact-form schema validation                              |
| [EmailJS](https://www.emailjs.com/)             | Contact email delivery                                      |
| [OpenRouter](https://openrouter.ai/)            | Language-model access for Lancaster                         |

## Selected recognition and learning

- MRSP Robotics Competition — 2nd Runner-up, 2025
- Exploring Natural Language Processing using Deep Learning — Analytics Vidhya, 2026
- Getting Started with Large Language Models — Analytics Vidhya, 2026
- JavaScript Essentials 1 — Cisco Networking Academy, 2026
- Python Essentials 1 — Cisco Networking Academy, 2026
- Internet of Things in Smart Cities — Department of Information and Communications Technology, 2025

## Getting started

### Prerequisites

- A current [Node.js LTS](https://nodejs.org/) release
- An [EmailJS](https://www.emailjs.com/) account and contact template
- An [OpenRouter](https://openrouter.ai/) API key
- npm or another Node.js package manager

### Environment variables

Create a `.env.local` file in the project root. Use the exact variable names referenced by the application if they differ from this example:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
OPENROUTER_API_KEY=your_openrouter_api_key
```

> [!IMPORTANT]
> Keep `OPENROUTER_API_KEY` server-side and never expose it through a `NEXT_PUBLIC_` variable. Configure EmailJS origin restrictions and usage limits before deploying the public contact form.

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
npm run build
npm run start
```

> [!NOTE]
> These commands use the standard Next.js npm scripts. Follow `package.json` if the project defines different scripts or uses another package manager.

## Contact

- [Email](mailto:magbanuaraven08@gmail.com?subject=Let%27s%20Connect)
- [GitHub](https://github.com/pravennn08)
- [LinkedIn](https://www.linkedin.com/in/raven-magbanua-baa77439b/)
- [Instagram](https://www.instagram.com/__pravennn/)
