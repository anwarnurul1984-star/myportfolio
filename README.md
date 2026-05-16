# Md Nurul Anwar — Portfolio

Personal portfolio website for **Md Nurul Anwar**, owner of **H. S. Enterprise** (Import & Export) and **Kurnia Holiday Travels** (Tour & Travel).

## Tech Stack

- **Backend:** Node.js, Express
- **View Engine:** EJS
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Icons:** Font Awesome 6 (CDN)
- **Assets:** Static images

## Getting Started

```bash
npm install
npm start
```

Visit `http://localhost:3000`.

## Structure

```
├── app.js
├── routes/
│   ├── index.js              # Home
│   ├── importExport.js       # H. S. Enterprise
│   └── tourTravel.js         # Kurnia Holiday Travels
├── views/
│   ├── layouts/main.ejs      # Master layout
│   ├── partials/             # Header, nav, footer
│   └── pages/                # Page templates
├── public/
│   ├── css/                  # Stylesheets
│   ├── js/                   # Scripts
│   └── images/               # Logo & business images
└── data/                     # JSON data files
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — Md Nurul Anwar |
| `/import-export` | H. S. Enterprise |
| `/tour-travel` | Kurnia Holiday Travels |
