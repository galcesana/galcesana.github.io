# galcesana.com

Personal portfolio site for **Gal Cesana** — Software Engineer at CrowdStrike, CS @ Hebrew University, based in Tel Aviv.

🔗 **[galcesana.com](https://galcesana.com)**

## What's on the site

- **About** — background, education, current role
- **Now** — what I'm up to these days
- **Projects** — [HUJI RUN](https://huji-run.galcesana.com), [Water Tracker](https://water.galcesana.com), [CV Tailor](https://cv-tailor-1093941780877.europe-west1.run.app/)
- **Research** — persona-based sentiment analysis with LLMs, blood cancer phylogenetics
- **Links** — GitHub, LinkedIn, resume, email

## Tech stack

Plain HTML + CSS + JS. No frameworks, no build step, no dependencies.

Hosted on GitHub Pages with a custom domain via `CNAME`.

## Project structure

```
├── index.html          # single-page content
├── style.css           # Courier Prime monospace theme
├── script.js           # minimal JS
├── favicon.ico
├── CNAME               # custom domain → galcesana.com
├── assets/
│   ├── docs/           # resume PDF, research papers
│   └── images/         # profile photo, project thumbnails
└── onlyfans/           # easter egg page
```

## Run locally

Open `index.html` directly, or serve it:

```sh
python -m http.server 8000
# then open http://localhost:8000
```

## License

© Gal Cesana
