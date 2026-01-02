# Portfolio site

Static personal portfolio site built with plain HTML/CSS/JS (no framework, no build step).

## Live

- https://galcesana.com

## Files

```txt
.
├─ index.html
├─ style.css
├─ script.js
└─ assets/
   └─ images/
```

## Run locally

### Option 1: open the file

Open `index.html` in your browser.

### Option 2: local server (recommended)

From the project folder:

**PowerShell**

```powershell
python -m http.server 8000
```

Open:

- http://localhost:8000

If `python` is not found, try:

```powershell
py -m http.server 8000
```

## Edit

- Content/sections/links: `index.html`
- Styling/responsive layout: `style.css`
- Interactions (menu, reveal animations, etc.): `script.js`

## Notes

- The profile photo can be wrapped in a link to a Google Maps location.
