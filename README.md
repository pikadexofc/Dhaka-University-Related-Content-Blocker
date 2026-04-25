# Dhaka University Content Blocker 🛡️

Made for fun by Pickko

A highly aggressive, enterprise-grade Chrome Extension designed to completely eradicate any content, posts, or network requests related to Dhaka University (DU) across the web. 

Unlike standard keyword blockers that fail on modern Single Page Applications (SPAs) like Facebook or Twitter, this extension utilizes hardware-efficient caching and deep DOM tree traversal to obliterate content without leaking memory or causing lag.

## 🚀 Elite Features

* **SPA-Defeating Upwards DOM Traversal:** Modern React-based feeds constantly shred and inject text asynchronously. This extension hunts for deep-nested keywords (like author names) and climbs the HTML tree (`el.closest`) to obliterate the entire parent post container.
* **Network-Level Firewall:** Uses Manifest V3 `declarativeNetRequest` to intercept and block HTTP requests to DU-related domains before they even leave your browser. Zero bytes transferred.
* **Zero-Lag `WeakSet` Caching:** Built with an ultra-fast JavaScript `WeakSet` engine to track scanned nodes. It operates in constant `O(1)` time, completely preventing the CPU spikes and memory leaks normally associated with infinite scrolling on social media.
* **Pre-cog Accessibility & Link Scrubbing:** Doesn't just scan visible text. Actively extracts and scrubs `<a href>` links, `<img alt>` tags, and `[aria-label]` metadata to catch hidden keywords.
* **Unicode Bypass Destruction**: Resolves and unwraps complex Unicode Mathematical Bold characters, cursive, and other evasion tactics back into Latin letters before checking against the filter.
* **Stealth Mode & Node Poisoning:** If a page title triggers the blocker, it seamlessly replaces the DOM with a natively styled "Connection Interrupted" fake error. If a React component resists CSS hiding, it actively overwrites the text node data with `⛔ [BLOCKED] ⛔`.

## 🛠️ Installation (Developer Mode)

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing this extension.
5. The extension is now active! Pin it to your toolbar to access the settings.

## ⚙️ Configuration

Click the extension icon to open the UI. The blocker comes pre-loaded with highly optimized English and Bengali keywords, covering everything from core university names to specific residential halls and campus landmarks. 

You can add unlimited custom keywords via the comma-separated text box.

## 💻 Tech Stack
* **Manifest V3**
* **Vanilla JavaScript (ES6+)**
* **CSS3**
* **HTML5**
