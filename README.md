# Smart Content Blocker Elite ⛔

**Made for fun by Pickko**

A highly aggressive, zero-lag, semantic content blocker designed to rip specific keywords and topics straight out of your browser. Built to outsmart modern web obfuscation natively.

## Features
- **Scorched-Earth Semantic Blocking**: Doesn't just hide elements, it overwrites the specific text-nodes with `[BLOCKED]` to ensure it never flashes on screen.
- **Unicode Bypass Destruction**: Resolves and unwraps complex Unicode Mathematical Bold characters, cursive, and other evasion tactics back into Latin letters before checking against the filter.
- **DOM Heuristic Tracing**: Specifically designed for Facebook and modern Single Page Applications (SPAs). Walk 8 levels up the container tree to find and delete the entire post card if a keyword is found.
- **Link Scrubbing (The Pre-cog Defense)**: Hunts down `href`, `alt`, and `aria-label` metadata inside `a` and `img` elements. Erases links and images containing keywords in their invisible URLs before they are clicked.
- **Network Level Firewall**: Integrates Chrome's `declarativeNetRequest` API to kill requests to specific domains before they even trigger a DNS lookup.
- **Hardware-Accelerated WeakSet Caching**: Features `O(1)` memory lookup traps. The MutationObserver knows exactly what it has already checked, eliminating CPU lag on infinite-scroll pages like Twitter or Facebook.

## Installation 
1. Download a zip wrapper of this repository.
2. Go to `chrome://extensions/`
3. Toggle on **Developer Mode** in the top right.
4. Click **Load unpacked** and select the folder.

Enjoy the silence!
