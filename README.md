# Dhaka University Content Blocker 🛡️

*Made for fun by [Pickko](https://github.com/pikadexofc)*

A highly aggressive, enterprise-grade Chrome Extension designed to completely eradicate any content, posts, or network requests related to Dhaka University (DU) across the web. 

Unlike standard keyword blockers that fail on modern Single Page Applications (SPAs) like Facebook, Twitter, or Google Search grids, this extension utilizes hardware-efficient caching, deep DOM tree traversal, and network-level firewalls to obliterate content without leaking memory or causing lag.

## 🚀 Elite Features

* **SPA-Defeating Upwards DOM Traversal:** Modern React-based feeds constantly shred and inject text asynchronously. This extension hunts for deep-nested keywords (like author names) and climbs the HTML tree (`el.closest`) to obliterate the entire parent post container.
* **Pre-Hydration Defense:** Built-in `requestAnimationFrame` loops prevent silent crashes on ultra-fast static sites, ensuring the script strikes exactly when the `<body>` tag hydrates.
* **Network-Level Firewall:** Uses Manifest V3 `declarativeNetRequest` to intercept and block HTTP requests to DU-related domains before they even leave your browser. Zero bytes transferred.
* **Zero-Lag `WeakSet` Caching:** Built with an ultra-fast JavaScript `WeakSet` engine to track scanned nodes. It operates in constant `O(1)` time, completely preventing the CPU spikes and memory leaks normally associated with infinite scrolling on social media.
* **Pre-cog Accessibility & Link Scrubbing:** Doesn't just scan visible text. Actively extracts and scrubs `<a href>` links, `<img alt>` tags, and `[aria-label]` metadata to catch hidden keywords.
* **Unicode Bypass Destruction**: Resolves and unwraps complex Unicode Mathematical Bold characters, cursive, and other evasion tactics back into Latin letters before checking against the filter.
* **Obfuscated Grid Sweeping:** Actively targets heavily obfuscated UI classes like Google Images (`.isv-r`) and Google Shopping cards (`g-card`), alongside standard `h1-h6` news headings.
* **Stealth Mode & Node Poisoning:** If a page title triggers the blocker, it seamlessly replaces the DOM with a natively styled "Connection Interrupted" fake error. If a React component resists CSS hiding, it actively overwrites the text node data with `⛔ [BLOCKED] ⛔`.

## 📦 Automated Releases (CI/CD)

This repository is equipped with a GitHub Actions CI/CD pipeline. Every push to the `main` branch automatically builds, zips, and deploys the latest production-ready version of the extension. 
👉 **[Download the latest release here](../../releases/latest)**

## 🛠️ Installation (Developer Mode)

1. Download the latest `.zip` from the Releases tab and extract it, or clone this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the extracted folder.
5. Pin the extension to your toolbar to access the UI, real-time analytics counter, and Soft Block (Blur) toggles.

## ⚙️ Configuration

Click the extension icon to open the UI. The blocker comes pre-loaded with highly optimized English and Bengali keywords. You can add unlimited custom keywords via the settings menu.

## 💻 Tech Stack
* **Manifest V3**
* **Vanilla JavaScript (ES6+)**
* **CSS3 Glassmorphism UI**
* **HTML5**
* **GitHub Actions (CI/CD)**
