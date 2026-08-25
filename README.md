<div align="center">
  <h1>🪪 petri.zip</h1>
  <p><b>My personal page. One screen, no dependency beyond the framework.</b></p>

  ![Website](https://img.shields.io/website?url=https%3A%2F%2Fpetri.zip)
  ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Petri-Hub/portfolio/quality-gate.yml)
  ![GitHub top language](https://img.shields.io/github/languages/top/Petri-Hub/portfolio)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/t/Petri-Hub/portfolio)
</div>

<br>
<h2>Table of Contents</h2>

- [About](#About)
- [Stack](#Stack)
- [Structure](#Structure)
- [Running Locally](#RunningLocally)
- [Deployment](#Deployment)

<br>
<h2 id="About">About</h2>

**TL;DR:** a single static page on Next.js 16, black and white, no runtime dependency other than React and Next itself.

This is the provisional version. It exists because the domain was already published on my LinkedIn and GitHub while the site was down, so the priority was a page that loads and says who I am, not the final design.

Everything renders at build time. There is no CMS, no database, no analytics and no contact form.

<br>
<h2 id="Stack">Stack</h2>

- **Next.js 16 with the App Router:** the whole site is three files under `app/`. The routing is a formality here, but it is what the deployment target expects.
- **Plain CSS:** no framework. One layout with a single breakpoint does not pay for the setup a utility framework asks for.
- **next/font:** Geist Sans and Geist Mono are downloaded at build time and served from the same origin, **so the page makes no third-party request at runtime.**
- **next/og:** the Open Graph image is generated during the build, which avoids keeping a binary in the repository.

<br>
<h2 id="Structure">Structure</h2>

```
app
├── layout.tsx            metadata, Open Graph, fonts
├── page.tsx              the entire page
├── globals.css           every style
├── icon.svg              favicon
└── opengraph-image.tsx   OG image, generated at build time
```

<br>
<h2 id="RunningLocally">Running Locally</h2>

Node 24 is required, and it is pinned through `engines` in `package.json`.

```sh
npm install
npm run dev
```

To reproduce what gets deployed, build it and serve the output. Under a minute on a warm cache:

```sh
npm run build
npm start
```

Types are checked separately with `npm run typecheck`, which is what CI runs before the build so a type error fails fast.

<br>
<h2 id="Deployment">Deployment</h2>

Deployed on Vercel. `master` is the production branch, so every push to it publishes.

The Quality Gate workflow runs the typecheck, the build and the tests on every push and pull request targeting `master`.
