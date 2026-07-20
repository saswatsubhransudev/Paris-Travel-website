<div align="center">

# ☀️ Sunrock Banner Replicator

**A pixel-perfect recreation of the Sunrock solar energy landing page hero banner** — built with React, TypeScript, and the Gemini API.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/license-unspecified-lightgrey)

</div>

<!--
  Add a screenshot or short GIF of the banner here, e.g.:
  ![Sunrock Banner Preview](./docs/preview.png)
-->

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgments)
- [Contributing](#contributing)
- [License](#license)

## Overview

**Sunrock Banner Replicator** faithfully reproduces the hero banner from Sunrock's solar energy landing page — matching its pure black background, [DM Sans](https://fonts.google.com/specimen/DM+Sans) typography, and precise layout alignment down to the pixel. The project is built on a modern React + Vite stack and integrates Google's **Gemini API** through a lightweight, server-side proxy so credentials are never exposed to the client.

## Features

- 🎯 Pixel-perfect layout matching the original Sunrock banner design
- ⚫ Pure black background aesthetic with careful spacing and alignment
- 🔤 DM Sans typography throughout
- 🤖 Gemini API integration, proxied through a small Express server to keep credentials secure
- 🎬 Smooth animations powered by [Motion](https://motion.dev/)
- 🧩 Icon set via [Lucide](https://lucide.dev/)
- ⚡ Fast dev loop courtesy of Vite 6 and React 19
- 🛡️ Type-safe end to end with TypeScript

## Tech Stack

| Category        | Technology                                                   |
|------------------|----------------------------------------------------------------|
| Framework        | [React 19](https://react.dev/)                                 |
| Language         | [TypeScript 5.8](https://www.typescriptlang.org/)               |
| Build Tool       | [Vite 6](https://vite.dev/)                                     |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com/)                      |
| Animation        | [Motion](https://motion.dev/)                                   |
| Icons            | [Lucide React](https://lucide.dev/)                              |
| AI / ML          | [Google Gemini API](https://ai.google.dev/) (`@google/genai`)    |
| Server           | [Express](https://expressjs.com/)                                |
| Env Management   | [dotenv](https://www.npmjs.com/package/dotenv)                    |

## Prerequisites

- **Node.js** 18 or later
- A **Gemini API key** — available from [Google AI Studio](https://aistudio.google.com/apikey)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/sunrock-banner-replicator.git
cd sunrock-banner-replicator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

## Available Scripts

| Command             | Description                                          |
|-----------------------|---------------------------------------------------------|
| `npm run dev`         | Starts the development server on port `3000`             |
| `npm run build`       | Builds the app for production                            |
| `npm run preview`     | Previews the production build locally                    |
| `npm run lint`        | Type-checks the project (`tsc --noEmit`)                  |
| `npm run clean`       | Removes build artifacts (`dist/`, `server.js`)             |

## Project Structure

```
sunrock-banner-replicator/
├── src/
│   └── main.tsx        # Application entry point
├── index.html            # HTML shell
├── metadata.json          # App metadata
├── vite.config.ts          # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json
└── .env.local                 # Local environment variables (not committed)
```

## Deployment

This project includes a lightweight Express server for handling Gemini API calls server-side, so it needs a Node-capable host rather than static-only hosting — platforms like [Render](https://render.com/), [Railway](https://railway.app/), or [Fly.io](https://fly.io/) work well. Whichever platform you choose, remember to set `GEMINI_API_KEY` as an environment variable there too.

## Acknowledgments

This project was scaffolded with [Google AI Studio](https://ai.studio/). You can view or continue editing the original app [here](https://ai.studio/apps/0b8b5fe9-fdd2-4d6e-92f1-dcccadcb8e53).

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## License

This project doesn't yet include a license. If you plan to share or open-source it, consider adding one — [MIT](https://choosealicense.com/licenses/mit/) is a common permissive choice for projects like this.

---

<div align="center">

Built with React, Vite, and the Gemini API

</div>
