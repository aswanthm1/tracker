# Task Tracker  `v1.0`
### A high-density, minimalist task engine for focused workflows.



Most productivity tools are bloated. 

## ⚡ The Philosophy
* **Zero-Latency UI**: No frameworks. No virtual DOM overhead. Just pure, optimized Vanilla JS.
* **Typography as UI**: Leveraging *Bricolage Grotesque* for personality and *Inter* for maximum legibility.
* **Privacy by Default**: Your data never leaves your browser. Zero tracking, zero cookies, 100% `localStorage`.

---

  ##  Live Demo **[Launch the Activity Tracker →](https://aswanthm1.github.io/tracker/)**

---

##  Features
* **Geometric Branding**: Replaces cluttered emojis with a sophisticated, minimalist design language.
* **State-Syncing**: Automatic persistence—refreshing the page never loses your progress.
* **Reactive Progress**: Custom SVG dash-array logic that calculates your "Day-Velocity" in real-time.
* **Priority Matrix**: Color-coded categorization to separate the "Noise" from the "Signal."

##  Quick Start
No build step required. This project is a tribute to the simplicity of the web.

1.  **Clone**
    ```bash
    git clone https://github.com/aswanthm1/tracker.git
    ```
2.  **Launch**
    Open `index.html` in any modern browser.

---

##  Technical Breakdown

### Core Stack
* **Engine:** Vanilla JavaScript (ES6+)
* **Design:** CSS3 Variables (Custom Properties) & CSS Grid
* **Fonts:** Bricolage Grotesque & Inter (via Google Fonts)

### Performance
The entire application (HTML/CSS/JS) is less than **20KB** gzipped. It achieves a 100/100 Performance score on Google Lighthouse because there are no external dependencies or heavy libraries.

---

##  Architecture
```text
├── index.html   # Semantic structure & SEO-friendly markup
├── style.css    # Modular CSS using the :root design system
└── script.js   # State management & LocalStorage controller
```

## Customizing the Aesthetic
You can change the entire look by editing the `--accent` and `--accent2` variables in `style.css`.
```css
:root {
  --accent: #1a1917;   /* Main Tech Black */
  --accent2: #6366f1;  /* Modern Indigo Accent */
}
```

---

##  Contributing
I built this because I wanted a tracker that didn't feel like a toy. If you have ideas for **Keyboard Shortcuts** or **Micro-animations**, feel free to open a PR.

1.  Fork the repo
2.  Create your branch (`git checkout -b feature/ui-improvement`)
3.  Commit changes (`git commit -m 'Added smooth fade-in'`)
4.  Push (`git push origin feature/ui-improvement`)

---

**Designed for the minimalists.**  By Anand
