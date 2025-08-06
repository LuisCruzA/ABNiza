
<p align="center">
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Next.js" width="60" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" width="60" height="40"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" width="60" height="40"/>
  </a>
  <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
    <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL" width="60" height="40"/>
  </a>
  <a href="https://vercel.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="Vercel" width="60" height="40"/>
  </a>
</p>

---

# AB Niza – Literacy Learning Software

**AB Niza** is an educational software designed to support early literacy (reading and writing) through playful learning experiences. Built with a modular architecture and modern technologies, it enables an interactive, gamified environment for kids.

---

## 📚 Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Code Standards](#code-standards)
- [Git Workflow](#git-workflow)
- [Commit & Branch Rules](#commit--branch-rules)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [License](#license)
- [Live Demo](#live-demo)

---

## ⚙️ Tech Stack

- **Language:** TypeScript  
- **Framework:** Next.js  
- **UI Library:** React  
- **CSS Framework:** Tailwind CSS  
- **Database:** PostgreSQL  
- **Hosting:** Vercel  

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/LuisCruzA/ABNiza.git
npm install
npm run dev
```

---

## 🧠 Code Standards

### Naming Conventions

- **Variables:** `camelCase` or `PascalCase`  
- **Types/Interfaces:** `PascalCase`  
- **Functions:** `camelCase` or `PascalCase`  

### Code Organization

- Proper spacing between declarations, functions, and classes  
- Clean and consistent import/export structure  

---

## 🔀 Git Workflow

We follow a **Simplified Gitflow** model.

### Main Branches

- `main` → Production-ready code  
- `Develop` → Integration branch  

### Workflow

- Create a **feature branch** from `Develop`
- Once finished, merge it back into `Develop`
- HotFixes: If a bug occurs in production, a hotfix branch is created from Develop
After the fix is implemented, it's merged into both Main and Development to keep branches synchronized

> This ensures stable production while allowing continuous development.

---

## ✅ Commit & Branch Rules

### Conventional Commits

Use the following format:

```
<type>: <description>
```

**Examples:**

- `feat: add interactive letter game`
- `fix: correct audio playback issue`

### Supported Commit Types

- 
feat : New features
fix : Bug fixes
docs : Documentation changes
style : Code style changes (formatting, etc.)
refactor : Code changes that neither fix bugs nor add features
test : Adding or modifying tests
chore : Changes to the build process or auxiliary tools
revert : Reverting previous changes
perf : Performance improvements
build : Changes affecting build system
ci : Changes to CI configuration
wip : Work in progress

### Branch Naming Convention

```
<type>/<kebab-case-description>
```

**Examples:**

- `feature/new-home-page`
- `fix/login-error`

---

## 🧱 Architecture

- **Design Pattern:** Modular  
- **Framework:** Next.js (React + TypeScript)  
- **Styling:** Tailwind CSS  
- **Database:** PostgreSQL  
- **Hosting Platform:** Vercel  

---


