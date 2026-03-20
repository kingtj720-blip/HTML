# HTMLcraft 🌐

> Learn HTML from zero to hero — interactive, hands-on, no fluff.

A fully self-contained HTML learning website with 15 lessons, live code editors, and quizzes covering everything from basic page structure to advanced Canvas & SVG techniques.

**[Live Demo →](https://your-username.github.io/htmlcraft)**

![HTMLcraft screenshot](https://via.placeholder.com/900x500/0c0c0f/ff6b35?text=HTMLcraft)

---

## ✨ Features

- **15 structured lessons** across three levels — Basics, Intermediate, Advanced
- **Live code editor** on every lesson — edit HTML and see it render instantly
- **Quiz** at the end of each lesson with instant feedback
- **Progress tracking** — mark lessons complete, see your progress in the topbar
- **Fully responsive** — works on desktop, tablet, and mobile
- **Dark theme** — easy on the eyes
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript. No build step, no npm, no framework

---

## 📚 Curriculum

### 🟢 Basics
| # | Lesson |
|---|--------|
| 01 | HTML Structure & DOCTYPE |
| 02 | Headings, Paragraphs & Text |
| 03 | Links & Images |
| 04 | Lists — Ordered, Unordered & Description |
| 05 | Attributes — Customizing Elements |

### 🟡 Intermediate
| # | Lesson |
|---|--------|
| 06 | Tables |
| 07 | Forms & Input Elements |
| 08 | Semantic HTML5 |
| 09 | Media — Video, Audio & Embed |
| 10 | Div, Span & Layout Containers |

### 🟣 Advanced
| # | Lesson |
|---|--------|
| 11 | Meta Tags & SEO |
| 12 | Accessibility (a11y) & ARIA |
| 13 | Data Attributes |
| 14 | Canvas & SVG |
| 15 | HTML Best Practices |

---

## 🚀 Getting Started

### Option 1 — Open locally (no server needed)

```bash
git clone https://github.com/your-username/htmlcraft.git
cd htmlcraft
open index.html   # macOS
# or just double-click index.html in your file manager
```

> **Note:** The live editor uses `<iframe>` srcdoc which works fine when opened as a local file.

### Option 2 — Deploy to GitHub Pages

```bash
git clone https://github.com/your-username/htmlcraft.git
cd htmlcraft
git checkout -b gh-pages
git push origin gh-pages
```

Then go to **Settings → Pages → Branch: gh-pages → Save**.  
Your site will be live at `https://your-username.github.io/htmlcraft`.

### Option 3 — Deploy to Netlify / Vercel

Drop the repo folder onto [netlify.com/drop](https://app.netlify.com/drop) or connect your GitHub repo in the Netlify/Vercel dashboard. No build command needed — just set the publish directory to `/` (root).

---

## 📁 Project Structure

```
htmlcraft/
├── index.html          # Main HTML shell — structure and navigation
├── css/
│   └── style.css       # All styles — design system, layout, responsive
├── js/
│   ├── lessons.js      # Lesson data — content, code examples, quizzes
│   └── app.js          # Application logic — rendering, navigation, state
├── README.md
├── .gitignore
└── LICENSE
```

---

## 🛠️ Customising

### Adding a new lesson

Open `js/lessons.js` and add an object to the `lessons` array:

```js
{
  title: "My New Lesson",
  level: "basics",          // "basics" | "intermediate" | "advanced"
  intro: "A short intro sentence shown below the title.",
  content: `
    <div class="section-block">
      <h2>Your Section Heading</h2>
      <p>Your content here. Use <code>&lt;code&gt;</code> for inline tags.</p>
    </div>
  `,
  code: `<p>Your starter code here</p>`,
  quiz: {
    q: "Your quiz question?",
    opts: ["Option A", "Option B", "Option C", "Option D"],
    ans: 1   // 0-indexed correct answer
  }
}
```

Then add a nav item in `index.html`:

```html
<div class="nav-item" onclick="openLesson(15)" id="nav-15">
  <span class="nav-num">16</span>My New Lesson<span class="nav-check">✓</span>
</div>
```

And update the total count in the topbar: `0 / 16`.

### Changing the colour scheme

All colours are CSS custom properties in `css/style.css`:

```css
:root {
  --accent:  #ff6b35;  /* primary orange — buttons, active states */
  --accent2: #7c6af7;  /* purple — section headings, tips */
  --accent3: #2dd4a0;  /* green — success, checkmarks */
  --warn:    #f7c948;  /* amber — intermediate level */
}
```

---

## 🤝 Contributing

Contributions are welcome! A few ideas:

- Add more lessons (CSS basics, intro to JavaScript)
- Improve quiz questions
- Add a search bar for lessons
- Persist progress in `localStorage`
- Add keyboard shortcuts (arrow keys to navigate lessons)

Please open an issue first to discuss significant changes.

---

## 📄 License

MIT — free to use, share, and modify. See [LICENSE](LICENSE).

---

*Built with pure HTML, CSS, and vanilla JavaScript. No frameworks harmed.*
