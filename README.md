# Eubert Bong Nocepida — Portfolio

Personal portfolio site for Eubert Bong Nocepida, Senior Full Stack Developer. Built with Create React App.

## Run locally

```bash
npm install
npm start
```

Opens at http://localhost:3000.

## Build

```bash
npm run build
```

The static site is written to `build/`. `.env.production` turns off the ESLint build step so CI hosts (which treat warnings as errors) can build the project.

## Deploy

Any static host works. Client-side routes (`/about`, `/projects`, …) are rewritten to `index.html` by:

- `vercel.json` for Vercel
- `public/_redirects` for Netlify

Build command: `npm run build` · Output directory: `build`

## Editing content

| What | Where |
| --- | --- |
| Banner, photo, resume link | `src/containers/partials/banner.jsx` |
| Skills | `src/containers/partials/skills.jsx` |
| Projects | `src/containers/partials/portfolio.jsx`, `src/containers/projects.jsx`, `src/containers/projectDetail.jsx` |
| About, experience, education | `src/containers/about.jsx` |
| Contact details | `src/containers/partials/contact.jsx`, `src/containers/contactPage.jsx`, `src/layout/footer.jsx` |
| Images and resume PDF | `public/img/` |
