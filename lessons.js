// HTMLcraft — Lesson data
// Each lesson: title, level, intro, content (HTML string), code (starter), quiz

const lessons = [
// ── 0 ──────────────────────────────────────────────────────────────────────
{
  title: "HTML Structure & DOCTYPE",
  level: "basics",
  intro: "Every HTML page shares the same skeleton. Understanding this structure is the first step to building anything on the web.",
  content: `
    <div class="section-block">
      <h2>The HTML Skeleton</h2>
      <p>Every webpage is made of HTML — <strong>HyperText Markup Language</strong>. Think of it as the bones of a webpage. CSS adds the skin, and JavaScript adds movement.</p>
      <p>All HTML documents share the same foundational structure:</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>&lt;!DOCTYPE html&gt;</h4><p>Tells the browser this is a modern HTML5 document. Always the very first line.</p></div>
      <div class="concept-card"><h4>&lt;html&gt;</h4><p>Root element. Everything else lives inside this. Add lang="en" for accessibility.</p></div>
      <div class="concept-card"><h4>&lt;head&gt;</h4><p>Metadata container. Not visible on page — holds title, charset, CSS links, etc.</p></div>
      <div class="concept-card"><h4>&lt;body&gt;</h4><p>Everything visible on the webpage goes here — text, images, buttons, all of it.</p></div>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Tags vs Elements:</strong> A <em>tag</em> is the syntax (<code>&lt;p&gt;</code>). An <em>element</em> is the opening tag + content + closing tag together. Most elements have both — <code>&lt;p&gt;Hello&lt;/p&gt;</code> — but some are <em>self-closing</em>, like <code>&lt;br&gt;</code> and <code>&lt;img&gt;</code>.</p>
    </div>
    <div class="section-block">
      <h2>Try it — Edit the code below</h2>
    </div>`,
  code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`,
  quiz: { q: "What does the &lt;!DOCTYPE html&gt; declaration do?", opts: ["Styles the page", "Links to CSS", "Tells the browser this is HTML5", "Creates the title"], ans: 2 }
},

// ── 1 ──────────────────────────────────────────────────────────────────────
{
  title: "Headings, Paragraphs & Text",
  level: "basics",
  intro: "Text is the foundation of the web. HTML gives you semantic tags that mean something — not just visual styles.",
  content: `
    <div class="section-block">
      <h2>Heading Levels</h2>
      <p>HTML has <strong>six heading levels</strong>: <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>. Use them hierarchically — one <code>&lt;h1&gt;</code> per page, then <code>&lt;h2&gt;</code> for major sections, <code>&lt;h3&gt;</code> for sub-sections, and so on.</p>
    </div>
    <table class="tag-table">
      <thead><tr><th>Tag</th><th>Purpose</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>&lt;h1&gt;</td><td>Main page title (only one per page)</td><td>Page or article title</td></tr>
        <tr><td>&lt;h2&gt;</td><td>Section headings</td><td>Chapter titles</td></tr>
        <tr><td>&lt;h3&gt;</td><td>Sub-section headings</td><td>Sub-topics</td></tr>
        <tr><td>&lt;p&gt;</td><td>Paragraph of text</td><td>Body content</td></tr>
        <tr><td>&lt;strong&gt;</td><td>Bold — semantically important</td><td>Critical information</td></tr>
        <tr><td>&lt;em&gt;</td><td>Italic — emphasized text</td><td>Titles, stress emphasis</td></tr>
        <tr><td>&lt;br&gt;</td><td>Line break (self-closing)</td><td>Address lines</td></tr>
        <tr><td>&lt;hr&gt;</td><td>Horizontal divider (self-closing)</td><td>Section separator</td></tr>
      </tbody>
    </table>
    <div class="warn-block">
      <div class="tip-icon">⚠️</div>
      <p><strong>Don't use headings for size.</strong> Use CSS for visual sizing. Headings carry semantic meaning — search engines and screen readers use them to understand your page structure.</p>
    </div>`,
  code: `<h1>Welcome to My Site</h1>
<h2>About Me</h2>
<p>I'm learning <strong>HTML</strong> and
it's <em>really</em> exciting!</p>

<h2>My Skills</h2>
<h3>Web Technologies</h3>
<p>Currently learning HTML basics.</p>

<hr>
<p>Line one.<br>Line two (same paragraph).</p>`,
  quiz: { q: "Which tag makes text bold AND carries semantic meaning (importance)?", opts: ["&lt;b&gt;", "&lt;bold&gt;", "&lt;strong&gt;", "&lt;em&gt;"], ans: 2 }
},

// ── 2 ──────────────────────────────────────────────────────────────────────
{
  title: "Links & Images",
  level: "basics",
  intro: "Links connect the web. Images make it visual. Together they're two of the most used elements in HTML.",
  content: `
    <div class="section-block">
      <h2>Hyperlinks — &lt;a&gt;</h2>
      <p>The <code>&lt;a&gt;</code> tag (anchor) creates links. The <code>href</code> attribute tells the browser <em>where to go</em>.</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>External link</h4><p>href="https://..." — full URL including https://</p></div>
      <div class="concept-card"><h4>Internal link</h4><p>href="about.html" — relative path to another page</p></div>
      <div class="concept-card"><h4>Anchor link</h4><p>href="#section" — jumps to an element with that id</p></div>
      <div class="concept-card"><h4>Email link</h4><p>href="mailto:x@y.com" — opens email client</p></div>
    </div>
    <div class="section-block">
      <h2>Images — &lt;img&gt;</h2>
      <p>The <code>&lt;img&gt;</code> tag is self-closing — it has no content or closing tag. Always include <code>alt</code> text for accessibility and when the image fails to load.</p>
    </div>
    <div class="tip-block">
      <div class="tip-icon">♿</div>
      <p><strong>Alt text matters:</strong> Screen readers read <code>alt</code> to describe images to blind users. Write descriptive alt text like <code>alt="A golden retriever playing fetch on the beach"</code>, not just <code>alt="dog"</code>.</p>
    </div>`,
  code: `<!-- Links -->
<a href="https://example.com">Visit Example</a>
<br>
<a href="https://example.com" target="_blank"
   rel="noopener noreferrer">Opens in new tab</a>
<br>
<a href="#bottom">Jump to bottom</a>
<br>
<a href="mailto:hello@example.com">Email me</a>

<br><br>

<!-- Images -->
<img
  src="https://picsum.photos/300/150?random=1"
  alt="A random scenic photo"
  width="300"
  height="150"
>

<div id="bottom" style="margin-top:20px; color:gray;">
  — bottom of page —
</div>`,
  quiz: { q: "What attribute on &lt;img&gt; describes the image to screen readers?", opts: ["title", "src", "alt", "caption"], ans: 2 }
},

// ── 3 ──────────────────────────────────────────────────────────────────────
{
  title: "Lists — Ordered, Unordered & Description",
  level: "basics",
  intro: "HTML has three types of lists, each with a distinct purpose. Pick the right one based on your content, not how you want it to look.",
  content: `
    <div class="section-block">
      <h2>Three List Types</h2>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>&lt;ul&gt;</h4><p>Unordered list — bulleted. Use when order doesn't matter (ingredients, features).</p></div>
      <div class="concept-card"><h4>&lt;ol&gt;</h4><p>Ordered list — numbered. Use when sequence matters (steps, rankings).</p></div>
      <div class="concept-card"><h4>&lt;dl&gt;</h4><p>Description list — term + definition pairs. Glossaries, FAQs.</p></div>
      <div class="concept-card"><h4>&lt;li&gt;</h4><p>List item — used inside &lt;ul&gt; and &lt;ol&gt;.</p></div>
    </div>
    <div class="section-block">
      <h2>Nesting Lists</h2>
      <p>Lists can be nested — put a <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> inside an <code>&lt;li&gt;</code> to create a sub-list. This is great for navigation menus and outlines.</p>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Semantic choice:</strong> Using <code>&lt;ol&gt;</code> for a recipe's steps is correct — a screen reader user knows step 3 comes after step 2. Using <code>&lt;ul&gt;</code> would imply order doesn't matter.</p>
    </div>`,
  code: `<h3>Unordered (bullets)</h3>
<ul>
  <li>HTML</li>
  <li>CSS
    <ul>
      <li>Flexbox</li>
      <li>Grid</li>
    </ul>
  </li>
  <li>JavaScript</li>
</ul>

<h3>Ordered (numbers)</h3>
<ol>
  <li>Boil water</li>
  <li>Add pasta</li>
  <li>Cook for 10 minutes</li>
  <li>Drain and serve</li>
</ol>

<h3>Description list</h3>
<dl>
  <dt><strong>HTML</strong></dt>
  <dd>Structure of the page</dd>
  <dt><strong>CSS</strong></dt>
  <dd>Visual styling</dd>
</dl>`,
  quiz: { q: "Which list type should you use for a step-by-step recipe?", opts: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;dl&gt;", "&lt;li&gt;"], ans: 1 }
},

// ── 4 ──────────────────────────────────────────────────────────────────────
{
  title: "Attributes — Customizing Elements",
  level: "basics",
  intro: "Attributes give HTML elements extra information or behavior. They live inside the opening tag and come in name=value pairs.",
  content: `
    <div class="section-block">
      <h2>Attribute Syntax</h2>
      <p>Attributes go inside the opening tag: <code>&lt;tagname attribute="value"&gt;</code>. Some attributes are global (work on any element), others are specific to certain tags.</p>
    </div>
    <table class="tag-table">
      <thead><tr><th>Attribute</th><th>Works on</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>id</td><td>Any element</td><td>Unique identifier on the page</td></tr>
        <tr><td>class</td><td>Any element</td><td>Group elements for CSS/JS targeting</td></tr>
        <tr><td>style</td><td>Any element</td><td>Inline CSS styles (use sparingly)</td></tr>
        <tr><td>title</td><td>Any element</td><td>Tooltip text on hover</td></tr>
        <tr><td>href</td><td>&lt;a&gt;</td><td>Link destination</td></tr>
        <tr><td>src</td><td>&lt;img&gt;, &lt;script&gt;</td><td>Resource URL</td></tr>
        <tr><td>alt</td><td>&lt;img&gt;</td><td>Alt text for image</td></tr>
        <tr><td>type</td><td>&lt;input&gt;, &lt;button&gt;</td><td>Input/button type</td></tr>
        <tr><td>disabled</td><td>Form elements</td><td>Makes element non-interactive (boolean)</td></tr>
        <tr><td>placeholder</td><td>&lt;input&gt;</td><td>Ghost text before input</td></tr>
      </tbody>
    </table>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Boolean attributes:</strong> Some attributes like <code>disabled</code>, <code>checked</code>, and <code>required</code> don't need a value — their presence alone means "true". <code>&lt;input disabled&gt;</code> and <code>&lt;input disabled="disabled"&gt;</code> mean the same thing.</p>
    </div>`,
  code: `<!-- id and class -->
<p id="intro" class="highlight">
  This paragraph has an id and class.
</p>

<!-- style attribute (inline CSS) -->
<p style="color: coral; font-weight: bold;">
  Styled with the style attribute.
</p>

<!-- title (hover tooltip) -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- Multiple classes -->
<p class="card featured large">
  Has three CSS classes.
</p>

<!-- Boolean attributes -->
<input type="text" placeholder="Type here...">
<br><br>
<input type="text" placeholder="Disabled" disabled>`,
  quiz: { q: "Which attribute creates a unique identifier for an element?", opts: ["class", "name", "id", "ref"], ans: 2 }
},

// ── 5 ──────────────────────────────────────────────────────────────────────
{
  title: "Tables",
  level: "intermediate",
  intro: "HTML tables are for displaying structured, tabular data — think spreadsheets, schedules, and comparison grids.",
  content: `
    <div class="section-block">
      <h2>Table Structure</h2>
      <p>Tables are built with nested elements. The hierarchy is: <code>&lt;table&gt;</code> → <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code>/<code>&lt;tfoot&gt;</code> → <code>&lt;tr&gt;</code> → <code>&lt;th&gt;</code>/<code>&lt;td&gt;</code>.</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>&lt;table&gt;</h4><p>The outer wrapper for the whole table.</p></div>
      <div class="concept-card"><h4>&lt;thead&gt;</h4><p>Header section — contains column labels.</p></div>
      <div class="concept-card"><h4>&lt;tbody&gt;</h4><p>Body section — contains the actual data rows.</p></div>
      <div class="concept-card"><h4>&lt;tfoot&gt;</h4><p>Footer section — totals, notes, summaries.</p></div>
      <div class="concept-card"><h4>&lt;tr&gt;</h4><p>Table row — a horizontal line of cells.</p></div>
      <div class="concept-card"><h4>&lt;th&gt;</h4><p>Header cell — bold & centered by default.</p></div>
      <div class="concept-card"><h4>&lt;td&gt;</h4><p>Data cell — regular table content.</p></div>
      <div class="concept-card"><h4>colspan / rowspan</h4><p>Merge cells horizontally or vertically.</p></div>
    </div>
    <div class="warn-block">
      <div class="tip-icon">⚠️</div>
      <p><strong>Don't use tables for layout!</strong> Back in the 1990s, developers used tables to create page layouts. Today, use CSS Flexbox or Grid for layout. Tables are only for tabular data.</p>
    </div>`,
  code: `<table border="1" style="border-collapse:collapse; width:100%">
  <thead>
    <tr style="background:#f0f0f0">
      <th style="padding:8px">Name</th>
      <th style="padding:8px">Role</th>
      <th style="padding:8px">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px">Alice</td>
      <td style="padding:8px">Designer</td>
      <td style="padding:8px">92</td>
    </tr>
    <tr>
      <td style="padding:8px">Bob</td>
      <td style="padding:8px">Developer</td>
      <td style="padding:8px">88</td>
    </tr>
    <tr>
      <td style="padding:8px" colspan="2">Average</td>
      <td style="padding:8px"><strong>90</strong></td>
    </tr>
  </tbody>
</table>`,
  quiz: { q: "Which element should contain column header labels in a table?", opts: ["&lt;td&gt;", "&lt;th&gt;", "&lt;tr&gt;", "&lt;caption&gt;"], ans: 1 }
},

// ── 6 ──────────────────────────────────────────────────────────────────────
{
  title: "Forms & Input Elements",
  level: "intermediate",
  intro: "Forms are how users send data to your server — sign-ups, logins, search boxes, and contact forms all use HTML forms.",
  content: `
    <div class="section-block">
      <h2>The &lt;form&gt; Element</h2>
      <p>The <code>&lt;form&gt;</code> wrapper has two key attributes: <code>action</code> (where to send the data) and <code>method</code> — either <code>GET</code> (data in URL) or <code>POST</code> (data in request body, more private).</p>
    </div>
    <table class="tag-table">
      <thead><tr><th>Input type</th><th>Creates</th></tr></thead>
      <tbody>
        <tr><td>type="text"</td><td>Single-line text box</td></tr>
        <tr><td>type="email"</td><td>Email field (validates @ symbol)</td></tr>
        <tr><td>type="password"</td><td>Hidden text (shows dots)</td></tr>
        <tr><td>type="number"</td><td>Number input with spinners</td></tr>
        <tr><td>type="checkbox"</td><td>Tick box (multiple selections)</td></tr>
        <tr><td>type="radio"</td><td>Radio button (one selection from group)</td></tr>
        <tr><td>type="range"</td><td>Slider</td></tr>
        <tr><td>type="file"</td><td>File picker</td></tr>
        <tr><td>type="date"</td><td>Date picker</td></tr>
        <tr><td>type="submit"</td><td>Submit button</td></tr>
      </tbody>
    </table>
    <div class="tip-block">
      <div class="tip-icon">♿</div>
      <p><strong>Always use &lt;label&gt;.</strong> Link labels to inputs using <code>for="inputId"</code> matching the input's <code>id</code>. This makes clicking the label focus the input, and screen readers announce the label when the input is focused.</p>
    </div>`,
  code: `<form action="#" method="post" style="font-family:sans-serif; max-width:320px">

  <label for="name">Full Name *</label><br>
  <input type="text" id="name" name="name"
    placeholder="e.g. Priya Sharma" required
    style="width:100%;margin:4px 0 14px;padding:8px;"><br>

  <label for="email">Email *</label><br>
  <input type="email" id="email" name="email"
    placeholder="you@example.com" required
    style="width:100%;margin:4px 0 14px;padding:8px;"><br>

  <label for="role">Role</label><br>
  <select id="role" style="width:100%;margin:4px 0 14px;padding:8px;">
    <option>Student</option>
    <option>Developer</option>
    <option>Designer</option>
  </select><br>

  <label>
    <input type="checkbox" name="newsletter">
    Subscribe to newsletter
  </label><br><br>

  <button type="submit"
    style="background:#ff6b35;color:white;padding:10px 20px;border:none;border-radius:5px;cursor:pointer">
    Send →
  </button>
</form>`,
  quiz: { q: "Which form method sends data in the URL (visible in address bar)?", opts: ["POST", "PUT", "GET", "SEND"], ans: 2 }
},

// ── 7 ──────────────────────────────────────────────────────────────────────
{
  title: "Semantic HTML5",
  level: "intermediate",
  intro: "Semantic elements tell the browser — and humans — what each part of the page means. They make your code readable, accessible, and SEO-friendly.",
  content: `
    <div class="section-block">
      <h2>Semantic vs Non-Semantic</h2>
      <p>A <code>&lt;div&gt;</code> means nothing — it's just a container. A <code>&lt;nav&gt;</code> tells everyone "this is navigation." Always prefer semantic elements.</p>
    </div>
    <table class="tag-table">
      <thead><tr><th>Tag</th><th>Meaning</th><th>Typical use</th></tr></thead>
      <tbody>
        <tr><td>&lt;header&gt;</td><td>Page or section header</td><td>Logo, nav, hero</td></tr>
        <tr><td>&lt;nav&gt;</td><td>Navigation links</td><td>Menu, breadcrumbs</td></tr>
        <tr><td>&lt;main&gt;</td><td>Primary content (one per page)</td><td>Article, product, dashboard</td></tr>
        <tr><td>&lt;article&gt;</td><td>Self-contained piece of content</td><td>Blog post, news story</td></tr>
        <tr><td>&lt;section&gt;</td><td>Thematic group of content</td><td>Features, team, contact</td></tr>
        <tr><td>&lt;aside&gt;</td><td>Tangentially related content</td><td>Sidebar, ads, related links</td></tr>
        <tr><td>&lt;footer&gt;</td><td>Page or section footer</td><td>Copyright, links, contact</td></tr>
        <tr><td>&lt;figure&gt;</td><td>Self-contained media</td><td>Image + caption</td></tr>
        <tr><td>&lt;figcaption&gt;</td><td>Caption for figure</td><td>Image description</td></tr>
        <tr><td>&lt;time&gt;</td><td>Date or time</td><td>Published dates, schedules</td></tr>
      </tbody>
    </table>`,
  code: `<header>
  <nav>
    <a href="#">Home</a> |
    <a href="#">About</a> |
    <a href="#">Blog</a>
  </nav>
  <h1>My Website</h1>
</header>

<main>
  <article>
    <h2>My Latest Post</h2>
    <p>Published on
      <time datetime="2025-06-15">June 15, 2025</time>
    </p>
    <p>This is the article content...</p>

    <figure>
      <img src="https://picsum.photos/200/80?random=5"
           alt="Article image">
      <figcaption>An illustrative photo</figcaption>
    </figure>
  </article>

  <aside>
    <h3>Related Links</h3>
    <ul><li><a href="#">Learn CSS</a></li></ul>
  </aside>
</main>

<footer>
  <p>© 2025 My Website. All rights reserved.</p>
</footer>`,
  quiz: { q: "Which semantic element should wrap a standalone blog post?", opts: ["&lt;section&gt;", "&lt;div&gt;", "&lt;article&gt;", "&lt;aside&gt;"], ans: 2 }
},

// ── 8 ──────────────────────────────────────────────────────────────────────
{
  title: "Media — Video, Audio & Embed",
  level: "intermediate",
  intro: "HTML5 brought native media support. No plugins needed — embed video, audio, and external content directly in the browser.",
  content: `
    <div class="section-block">
      <h2>Native Video & Audio</h2>
      <p>The <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements are HTML5. Both support the <code>controls</code> attribute to show default browser UI, and <code>autoplay</code>, <code>loop</code>, <code>muted</code> as boolean attributes.</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>&lt;video&gt;</h4><p>Embeds a video player. Use multiple &lt;source&gt; for format fallbacks.</p></div>
      <div class="concept-card"><h4>&lt;audio&gt;</h4><p>Embeds an audio player. Same structure as video.</p></div>
      <div class="concept-card"><h4>&lt;source&gt;</h4><p>Alternate media sources. Browser picks the first supported format.</p></div>
      <div class="concept-card"><h4>&lt;iframe&gt;</h4><p>Embeds another webpage — YouTube, Google Maps, Figma, etc.</p></div>
      <div class="concept-card"><h4>&lt;picture&gt;</h4><p>Responsive images — show different images at different screen sizes.</p></div>
      <div class="concept-card"><h4>&lt;track&gt;</h4><p>Subtitles/captions for video. Accepts VTT files.</p></div>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Autoplay & muted:</strong> Browsers block autoplay with audio. If you need autoplay, add <code>muted</code> — then it works. User gesture (click/tap) is required for unmuted autoplay.</p>
    </div>`,
  code: `<!-- Responsive image with srcset -->
<picture>
  <img
    src="https://picsum.photos/300/150"
    alt="Responsive image"
    style="max-width:100%"
  >
</picture>

<br>

<!-- YouTube embed via iframe -->
<iframe
  width="300" height="170"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video"
  frameborder="0"
  allowfullscreen
></iframe>

<br><br>

<!-- Audio player -->
<audio controls>
  <source
    src="https://www.w3schools.com/html/horse.ogg"
    type="audio/ogg">
  Your browser doesn't support audio.
</audio>`,
  quiz: { q: "What attribute enables the default browser controls on &lt;video&gt; and &lt;audio&gt;?", opts: ["play", "controls", "ui", "toolbar"], ans: 1 }
},

// ── 9 ──────────────────────────────────────────────────────────────────────
{
  title: "Div, Span & Layout Containers",
  level: "intermediate",
  intro: "Div and span are the two generic containers of HTML. They carry no meaning on their own — they exist to be styled and scripted.",
  content: `
    <div class="section-block">
      <h2>Block vs Inline — The Core Difference</h2>
      <p>Every HTML element is either <strong>block-level</strong> or <strong>inline-level</strong> by default.</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>&lt;div&gt; — block</h4><p>Takes full width, starts on a new line. Use to group sections, build card layouts, wrappers.</p></div>
      <div class="concept-card"><h4>&lt;span&gt; — inline</h4><p>Sits inside text, no line break. Use to style a word or phrase within a sentence.</p></div>
    </div>
    <div class="section-block">
      <h2>Common Block Elements</h2>
      <p><code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code></p>
      <h2>Common Inline Elements</h2>
      <p><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;label&gt;</code></p>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Prefer semantic elements</strong> over bare divs when they exist. Use <code>&lt;nav&gt;</code> over <code>&lt;div class="nav"&gt;</code>. But when no semantic tag fits, <code>&lt;div&gt;</code> is perfectly fine.</p>
    </div>`,
  code: `<div style="display:flex; gap:12px; flex-wrap:wrap">

  <div style="background:#e6f1fb; padding:16px; border-radius:8px; flex:1; min-width:120px">
    <h3 style="margin:0 0 8px">Card One</h3>
    <p style="margin:0; color:#555; font-size:14px">
      This whole card is a <strong>div</strong>.
    </p>
  </div>

  <div style="background:#eaf3de; padding:16px; border-radius:8px; flex:1; min-width:120px">
    <h3 style="margin:0 0 8px">Card Two</h3>
    <p style="margin:0; color:#555; font-size:14px">
      Another block-level div.
    </p>
  </div>

</div>

<p style="margin-top:16px">
  This sentence has a
  <span style="color:coral; font-weight:bold">highlighted word</span>
  using an inline span — no line break!
</p>`,
  quiz: { q: "Which element is inline by default?", opts: ["&lt;div&gt;", "&lt;p&gt;", "&lt;span&gt;", "&lt;section&gt;"], ans: 2 }
},

// ── 10 ─────────────────────────────────────────────────────────────────────
{
  title: "Meta Tags & SEO",
  level: "advanced",
  intro: "Meta tags live in the <head> and communicate with search engines, social platforms, and browsers — invisible to users, critical for discovery.",
  content: `
    <div class="section-block">
      <h2>Essential Meta Tags</h2>
    </div>
    <table class="tag-table">
      <thead><tr><th>Tag</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>&lt;meta charset="UTF-8"&gt;</td><td>Character encoding — always include, always UTF-8</td></tr>
        <tr><td>&lt;meta name="viewport"&gt;</td><td>Mobile responsiveness — critical</td></tr>
        <tr><td>&lt;meta name="description"&gt;</td><td>Page summary shown in search results (150–160 chars)</td></tr>
        <tr><td>&lt;meta name="robots"&gt;</td><td>Tell search crawlers what to index</td></tr>
        <tr><td>&lt;meta property="og:title"&gt;</td><td>Open Graph — title when shared on Facebook/LinkedIn</td></tr>
        <tr><td>&lt;meta property="og:image"&gt;</td><td>Image shown when page is shared on social media</td></tr>
        <tr><td>&lt;meta name="twitter:card"&gt;</td><td>Twitter card format for shared links</td></tr>
        <tr><td>&lt;link rel="canonical"&gt;</td><td>Tells Google the "official" URL for duplicate pages</td></tr>
        <tr><td>&lt;link rel="icon"&gt;</td><td>Favicon — the browser tab icon</td></tr>
      </tbody>
    </table>
    <div class="tip-block">
      <div class="tip-icon">🔍</div>
      <p><strong>The &lt;title&gt; tag</strong> is the most important SEO element. It appears in browser tabs AND as the clickable blue link in Google results. Keep it under 60 characters and put your keyword first.</p>
    </div>`,
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Essential -->
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <title>Learn HTML – HTMLcraft</title>

  <!-- SEO -->
  <meta name="description"
    content="Master HTML from basics to advanced with interactive lessons and live code editors.">
  <meta name="robots" content="index, follow">
  <link rel="canonical"
    href="https://htmlcraft.dev/learn">

  <!-- Open Graph (Social sharing) -->
  <meta property="og:title"
    content="Learn HTML – HTMLcraft">
  <meta property="og:description"
    content="Interactive HTML course for beginners.">
  <meta property="og:image"
    content="https://htmlcraft.dev/og-image.png">
  <meta property="og:url"
    content="https://htmlcraft.dev/learn">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
  <p>View page source to see meta tags!</p>
</body>
</html>`,
  quiz: { q: "Which meta tag controls how your page appears when shared on social media?", opts: ["meta description", "meta viewport", "Open Graph meta tags", "meta charset"], ans: 2 }
},

// ── 11 ─────────────────────────────────────────────────────────────────────
{
  title: "Accessibility (a11y) & ARIA",
  level: "advanced",
  intro: "Accessibility means building websites everyone can use — including people who use screen readers, keyboards, or other assistive technology.",
  content: `
    <div class="section-block">
      <h2>Why Accessibility Matters</h2>
      <p>1 in 7 people worldwide have some form of disability. Accessibility isn't optional — it's the law in many countries, and it makes your site better for everyone.</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>Semantic HTML</h4><p>The #1 accessibility tool. Use correct tags and you get most accessibility for free.</p></div>
      <div class="concept-card"><h4>Alt text</h4><p>All images need alt attributes. Decorative images get alt="" (empty, not missing).</p></div>
      <div class="concept-card"><h4>Labels for inputs</h4><p>Every input needs a &lt;label&gt; — always, no exceptions.</p></div>
      <div class="concept-card"><h4>Keyboard navigation</h4><p>All interactive elements must be reachable and usable with Tab + Enter/Space.</p></div>
      <div class="concept-card"><h4>Color contrast</h4><p>Text must have 4.5:1 contrast ratio against its background (WCAG AA).</p></div>
      <div class="concept-card"><h4>ARIA roles</h4><p>Add role and aria-* attributes when semantic HTML isn't enough.</p></div>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>ARIA rule #1:</strong> Don't use ARIA if a native HTML element does the job. <code>&lt;button&gt;</code> is better than <code>&lt;div role="button"&gt;</code>. Native elements have built-in keyboard support and semantics.</p>
    </div>`,
  code: `<!-- Good: semantic button (keyboard accessible) -->
<button type="button" onclick="alert('Clicked!')">
  Click me
</button>

<!-- Skip navigation link (for screen readers) -->
<a href="#main-content"
   style="position:absolute;left:-9999px">
  Skip to main content
</a>

<!-- Accessible image -->
<img
  src="https://picsum.photos/200/60?random=7"
  alt="Team members collaborating around a table">

<!-- Decorative image (no meaning) -->
<img
  src="https://picsum.photos/200/40?random=8"
  alt=""
  aria-hidden="true">

<!-- ARIA live region (announces dynamic changes) -->
<div
  id="main-content"
  role="main"
  aria-live="polite"
  style="margin-top:10px; padding:8px; background:#f0f8f0; border-radius:4px">
  <p>This region announces updates to screen readers.</p>
</div>`,
  quiz: { q: "What attribute value should a purely decorative image have for alt?", opts: ["alt='decorative'", "alt='' (empty)", "no alt attribute", "alt='image'"], ans: 1 }
},

// ── 12 ─────────────────────────────────────────────────────────────────────
{
  title: "Data Attributes",
  level: "advanced",
  intro: "Data attributes let you store custom data in HTML elements — accessible via CSS and JavaScript — without hacks or hidden inputs.",
  content: `
    <div class="section-block">
      <h2>The data-* Attribute</h2>
      <p>Any attribute starting with <code>data-</code> is a valid custom data attribute. You can add as many as you need: <code>data-id</code>, <code>data-price</code>, <code>data-category</code>, etc.</p>
      <p>Access them in JavaScript via <code>element.dataset.id</code>, <code>element.dataset.price</code> (the <code>data-</code> prefix is removed, and hyphens become camelCase).</p>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>Syntax</h4><p>data-anything="value" — "anything" can be any lowercase, hyphenated name.</p></div>
      <div class="concept-card"><h4>CSS access</h4><p>attr(data-*) in content:, and [data-active="true"] in selectors.</p></div>
      <div class="concept-card"><h4>JS access</h4><p>element.dataset.name — no data- prefix, hyphens → camelCase.</p></div>
      <div class="concept-card"><h4>Use cases</h4><p>Product cards with prices/ids, interactive tabs, sortable tables, tooltips.</p></div>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Don't overuse data attributes for user-visible content</strong> — they're for data your JavaScript needs, not for content users should see. Don't store sensitive data in them; they're fully visible in the DOM.</p>
    </div>`,
  code: `<style>
  [data-tag="sale"]::after {
    content: " 🏷️ SALE";
    color: red;
    font-size: 12px;
  }
  .active-tab { font-weight:bold; border-bottom: 2px solid coral; }
</style>

<!-- Product cards with data attributes -->
<div data-product-id="42" data-price="999" data-tag="sale"
     style="border:1px solid #ddd; padding:12px; margin:8px; border-radius:6px; display:inline-block; cursor:pointer"
     onclick="showInfo(this)">
  🎧 Headphones
</div>

<div data-product-id="17" data-price="1499"
     style="border:1px solid #ddd; padding:12px; margin:8px; border-radius:6px; display:inline-block; cursor:pointer"
     onclick="showInfo(this)">
  💻 Laptop Stand
</div>

<p id="info" style="margin-top:12px; color:#555; font-family:monospace"></p>

<script>
function showInfo(el) {
  const d = el.dataset;
  document.getElementById('info').textContent =
    'ID: ' + d.productId + ' | Price: ₹' + d.price;
}
<\/script>`,
  quiz: { q: "How do you access data-user-id in JavaScript?", opts: ["element.data.userId", "element.dataset.userId", "element.getAttribute('data-user-id')", "Both B and C are correct"], ans: 3 }
},

// ── 13 ─────────────────────────────────────────────────────────────────────
{
  title: "Canvas & SVG",
  level: "advanced",
  intro: "HTML5 Canvas and SVG both create graphics in the browser — but they work very differently. SVG is vector, Canvas is pixel-based.",
  content: `
    <div class="section-block">
      <h2>Canvas vs SVG</h2>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>Canvas</h4><p>Pixel-based. Drawn imperatively via JavaScript. Great for games, data visualizations, image manipulation.</p></div>
      <div class="concept-card"><h4>SVG</h4><p>Vector-based. Declared in HTML. Scales perfectly at any size. Great for icons, logos, charts, illustrations.</p></div>
      <div class="concept-card"><h4>Canvas accessibility</h4><p>Not accessible by default — add fallback content inside the &lt;canvas&gt; tag.</p></div>
      <div class="concept-card"><h4>SVG accessibility</h4><p>Add &lt;title&gt; and &lt;desc&gt; inside SVG. Use role="img" and aria-labelledby.</p></div>
    </div>
    <div class="tip-block">
      <div class="tip-icon">💡</div>
      <p><strong>Which to use?</strong> SVG for logos, icons, UI graphics — anything that needs to scale. Canvas for games, animations with thousands of objects, or real-time data. For charts, libraries like Chart.js use Canvas under the hood.</p>
    </div>`,
  code: `<!-- SVG (inline, scales perfectly) -->
<svg width="200" height="100"
     viewBox="0 0 200 100"
     xmlns="http://www.w3.org/2000/svg"
     aria-label="Simple SVG chart">

  <!-- Background -->
  <rect width="200" height="100" fill="#f8f8f8" rx="6"/>

  <!-- Bars -->
  <rect x="20" y="40" width="30" height="50" fill="#7c6af7"/>
  <rect x="65" y="20" width="30" height="70" fill="#ff6b35"/>
  <rect x="110" y="55" width="30" height="35" fill="#2dd4a0"/>
  <rect x="155" y="30" width="30" height="60" fill="#f7c948"/>

  <!-- Labels -->
  <text x="35" y="98" text-anchor="middle"
    font-size="10" fill="#888">Jan</text>
  <text x="80" y="98" text-anchor="middle"
    font-size="10" fill="#888">Feb</text>
  <text x="125" y="98" text-anchor="middle"
    font-size="10" fill="#888">Mar</text>
  <text x="170" y="98" text-anchor="middle"
    font-size="10" fill="#888">Apr</text>
</svg>

<br><br>

<!-- Canvas (drawn with JavaScript) -->
<canvas id="myCanvas" width="200" height="100"
  style="border:1px solid #ddd; border-radius:6px">
  Canvas not supported.
</canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw gradient circle
const grad = ctx.createRadialGradient(100,50,10,100,50,50);
grad.addColorStop(0,'#ff6b35');
grad.addColorStop(1,'#7c6af7');
ctx.fillStyle = grad;
ctx.beginPath();
ctx.arc(100, 50, 45, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'white';
ctx.font = 'bold 14px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Canvas!', 100, 55);
<\/script>`,
  quiz: { q: "Which technology produces scalable vector graphics embedded directly in HTML?", opts: ["Canvas", "WebGL", "SVG", "JPEG"], ans: 2 }
},

// ── 14 ─────────────────────────────────────────────────────────────────────
{
  title: "HTML Best Practices",
  level: "advanced",
  intro: "Writing HTML that works is easy. Writing HTML that's maintainable, accessible, performant, and professional — that's what separates good developers from great ones.",
  content: `
    <div class="section-block">
      <h2>The Golden Rules</h2>
    </div>
    <div class="concept-grid">
      <div class="concept-card"><h4>✅ Use semantic HTML</h4><p>Always pick the most meaningful tag. Use &lt;button&gt; for buttons, not &lt;div&gt;.</p></div>
      <div class="concept-card"><h4>✅ Validate your HTML</h4><p>Run your code through validator.w3.org to catch errors browsers silently fix.</p></div>
      <div class="concept-card"><h4>✅ Separate concerns</h4><p>HTML = structure. CSS = style. JS = behavior. Don't mix them up.</p></div>
      <div class="concept-card"><h4>✅ Performance matters</h4><p>Load CSS in &lt;head&gt;, JS at end of &lt;body&gt; (or use defer). Optimize images.</p></div>
      <div class="concept-card"><h4>✅ Mobile-first</h4><p>Always include &lt;meta name="viewport"&gt;. Design for small screens first.</p></div>
      <div class="concept-card"><h4>✅ Consistent formatting</h4><p>2-space indentation. Lowercase tags. Quoted attribute values. Clean, predictable code.</p></div>
      <div class="concept-card"><h4>❌ Inline styles</h4><p>Avoid &lt;p style="color:red"&gt; — use CSS classes instead. Hard to maintain.</p></div>
      <div class="concept-card"><h4>❌ Missing alt text</h4><p>Never omit alt attributes on images. Empty string is fine for decorative.</p></div>
    </div>
    <div class="tip-block">
      <div class="tip-icon">🎯</div>
      <p><strong>The defer attribute</strong> on script tags makes them load asynchronously and execute after HTML parsing — giving you the performance of putting JS at the bottom without the maintenance headache: <code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code> in the &lt;head&gt;.</p>
    </div>
    <div class="section-block">
      <h2>🎉 You've completed HTMLcraft!</h2>
      <p>You now know HTML from fundamentals to advanced techniques. Your next steps: learn <strong>CSS</strong> for styling, then <strong>JavaScript</strong> for interactivity. You've got this!</p>
    </div>`,
  code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0">
  <meta name="description"
    content="A well-structured, professional HTML page.">
  <title>Professional Page – Site Name</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer><\/script>
</head>
<body>

  <a href="#main" class="skip-link">Skip to content</a>

  <header role="banner">
    <nav aria-label="Main navigation">
      <a href="/" aria-current="page">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main id="main" role="main">
    <article>
      <h1>Page Title</h1>
      <p>Content goes here.</p>
    </article>
  </main>

  <footer role="contentinfo">
    <p>© 2025 My Site</p>
  </footer>

</body>
</html>`,
  quiz: { q: "Where should &lt;script&gt; tags ideally go for best performance?", opts: ["Inside &lt;head&gt; without defer", "At the end of &lt;body&gt; OR &lt;head&gt; with defer", "Inside &lt;nav&gt;", "Before DOCTYPE"], ans: 1 }
}
];
