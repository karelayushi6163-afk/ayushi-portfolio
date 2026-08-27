# Ayushi Karel — Portfolio

A premium, dark-themed personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/profile.jpg          ← your photo (already added)
  components/                 ← one file per section
  data/portfolioData.js       ← ALL editable text content lives here
  hooks/useTheme.js           ← dark/light mode logic
  hooks/useActiveSection.js   ← navbar active-link tracking
  index.css                   ← design tokens & global styles
  App.jsx
public/favicon.svg
```

## Editing content

Everything text-based (name, tagline, skills, projects, achievements, timeline)
lives in **`src/data/portfolioData.js`**. You won't need to touch component
files just to update wording.

## Configure the contact form (Formspree)

1. Go to https://formspree.io and create a free account.
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/xxxxabcd`.
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   with your real endpoint.
4. That's it — no API key needed, nothing sensitive is exposed client-side.

## Replacing your photo

Swap `src/assets/profile.jpg` with a new image (keep the same filename), or
change the import path in `src/components/Hero.jsx`.

## Deploying for free

**Vercel (recommended, easiest):**
1. Push this project to a GitHub repository.
2. Go to https://vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy — you'll get a free `.vercel.app` URL.

**GitHub Pages:**
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js`.
4. Run `npm run deploy`.

**Netlify:** drag-and-drop the `dist` folder after `npm run build`, or connect
your GitHub repo the same way as Vercel.
