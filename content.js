(async function () {
  const defaultKeywords = [
    "du", "d.u.", "dhaka university", "university of dhaka", "dhaka univ", "univ of dhaka", "dhaka u", "du campus", "uod", "dhaka viswavidyalaya", "ঢাবি", "ঢাকা বিশ্ববিদ্যালয়", "ঢাকা ভার্সিটি", "ঢাবি ক্যাম্পাস", "ঢাবির", "ঢাকা বিশ্ববিদ্যালয়ের", "ঢাকা বিশ্ববিদ্যালয়", "ঢাকা ইউনিভার্সিটি", "ডিইউ", "ডি.ইউ.", "sm hall", "tsc", "teacher student center", "curzon hall", "madhur canteen", "raju sculpture", "arts building du", "kala bhaban", "du admission", "du result", "ducsu", "dhaka central university all news"
  ];

  const style = document.createElement('style');
  style.textContent = `
    .scb_hidden_flag {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      position: absolute !important;
      width: 0 !important;
      height: 0 !important;
      z-index: -9999 !important;
    }
    .scb_blur_flag {
      filter: blur(15px) grayscale(100%) !important;
      transition: filter 0.4s ease !important;
      pointer-events: auto !important;
    }
    .scb_blur_flag:hover {
      filter: blur(0px) grayscale(0%) !important;
    }
  `;
  
  const injectStyles = setInterval(() => {
    if (document.head) {
      document.head.appendChild(style);
      clearInterval(injectStyles);
    }
  }, 100);

  let regex = null;
  let isBlurMode = false;

  chrome.storage.local.get(['blurMode', 'customKeywords'], (data) => {
    isBlurMode = !!data.blurMode;
    
    const custom = data.customKeywords || [];
    const extremeExpansion = ["sociology", "dept of sociology", "physics dept", "cse dept", "english dept", "campus", "faculty", "viswavidyalaya", "bhaban", "chatra", "chhatra"];
    const allKeywords = [...defaultKeywords, ...custom, ...extremeExpansion].filter(Boolean);

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const pattern = allKeywords.map(k => {
      const normalizedK = k.normalize("NFKC");
      const escaped = escapeRegExp(normalizedK.trim().toLowerCase());
      if (/^[a-z0-9\s]+$/.test(escaped)) return `\\b${escaped}\\b`;
      return escaped;
    }).join('|');

    regex = new RegExp(pattern, 'iu');
    observeAndBlock();
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.blurMode) isBlurMode = changes.blurMode.newValue;
  });

  const postContainers = [
    'ytd-video-renderer', 'ytd-grid-video-renderer', 'ytd-rich-item-renderer', 'ytd-compact-video-renderer',
    '[role="article"]', 'article', 'div[data-pagelet^="FeedUnit"]', 'div[data-testid="post_container"]',
    'div[role="feed"] > div', 'div[data-pagelet^="ProfileTimeline"] > div > div',
    '.update-components-update-v2', '.g', '.MjjYud', 
    '.WlydOe', '.SoaBEf', '.n0jPhd', 
    '.isv-r', 'div[data-ri]', 'g-card', '.sh-dgr__grid-result',
    '.news-item', '.feed-item', '.post', '.tweet', '[data-testid="tweet"]',
    'div.x1yztbdb.x1n2onr6.xh8yej3'
  ].join(',');

  function tagAndHide(el) {
    if (!el || el.dataset.scbHide) return;
    
    let container = el.matches && el.matches(postContainers) ? el : el.closest(postContainers);
    
    if (!container) {
      let current = el.parentElement;
      for (let i = 0; i < 8; i++) {
        if (!current || current.tagName === 'BODY' || current.tagName === 'HTML' || current.id) break;
        if (current.querySelector && current.querySelector('[aria-label="Comment"], [aria-label="Share"], [role="button"]')) {
           container = current;
           if (current.parentElement && current.parentElement.tagName === 'DIV') container = current.parentElement;
           break;
        }
        current = current.parentElement;
      }
    }

    if (!container) {
      container = el.closest('div, p, span, a, section, header, h1, h2, h3, h4, h5, h6, li, figure');
    }

    if (container) {
      container.dataset.scbHide = "true";
      
      // Safe Counter Update: Checks if extension context is still valid
      try {
        if (chrome.runtime && chrome.runtime.id) {
          chrome.storage.local.get(['blockedCount'], (data) => {
            // Double-check inside the async callback just to be safe
            if (chrome.runtime && chrome.runtime.id) {
              chrome.storage.local.set({ blockedCount: (data.blockedCount || 0) + 1 });
            }
          });
        }
      } catch (err) {
        // Context was invalidated (extension reloaded). We just quietly ignore it.
      }

      if (isBlurMode) {
        container.classList.add('scb_blur_flag');
      } else {
        container.classList.add('scb_hidden_flag');
      }
    }
  }

  const checkedNodes = new WeakSet();
  const checkedElements = new WeakSet();

  function scanDOM() {
    if (!regex) return;

    if (!document.body) {
      requestAnimationFrame(scanDOM);
      return;
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    
    while ((node = walker.nextNode())) {
      if (checkedNodes.has(node)) continue;
      checkedNodes.add(node);

      const text = node.nodeValue || "";
      const normalizedText = text.normalize("NFKC").replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
      
      if (normalizedText && regex.test(normalizedText)) {
        node.nodeValue = "⛔ [BLOCKED] ⛔";
        tagAndHide(node.parentElement);
      }
    }

    const sweepElements = document.querySelectorAll('a[href], img[alt], [aria-label]');
    for (let i = 0; i < sweepElements.length; i++) {
        const el = sweepElements[i];
        if (checkedElements.has(el)) continue;
        checkedElements.add(el);
        
        const href = (el.getAttribute('href') || '').toLowerCase();
        const alt = el.getAttribute('alt') || '';
        const aria = el.getAttribute('aria-label') || '';
        
        const hasBadUrl = href.includes('du.ac.bd') || href.includes('dhakauniversity');
        const combined = `${alt} ${aria} ${href}`.normalize("NFKC").replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
        
        if (hasBadUrl || (combined && regex.test(combined))) {
          if (el.tagName === 'IMG') {
            el.src = '';
            el.alt = 'BLOCKED IMAGE';
          }
          tagAndHide(el);
        }
    }
  }

  function observeAndBlock() {
    scanDOM(); 
    let rafId = null;
    const observer = new MutationObserver((mutations) => {
      let shouldScan = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0 || m.type === 'characterData') {
          shouldScan = true;
          break;
        }
      }
      if (shouldScan) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          scanDOM();
        });
      }
    });

    observer.observe(document, { childList: true, subtree: true, characterData: true });
  }
})();
