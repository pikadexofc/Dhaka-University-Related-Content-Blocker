(async function () {
  const defaultKeywords = [
    "du", "d.u.", "dhaka university", "university of dhaka", "dhaka univ", "univ of dhaka", "dhaka u", "du campus", "uod", "dhaka viswavidyalaya", "ঢাবি", "ঢাকা বিশ্ববিদ্যালয়", "ঢাকা ভার্সিটি", "ঢাবি ক্যাম্পাস", "ঢাবির", "ঢাকা বিশ্ববিদ্যালয়ের", "ঢাকা বিশ্ববিদ্যালয়", "ঢাকা ইউনিভার্সিটি", "ডিইউ", "ডি.ইউ.", "sm hall", "salimullah muslim hall", "jagannath hall", "shahidullah hall", "dr muhammad shahidullah hall", "fazlul huq muslim hall", "fh hall", "zahurul haq hall", "surja sen hall", "masterda surja sen hall", "haji muhammad mohsin hall", "mohsin hall", "ruqayyah hall", "rokeya hall", "shamsun nahar hall", "bangamata sheikh fazilatunnesa mujib hall", "bangamata hall", "bangladesh-kuwait maitree hall", "kuwait maitree hall", "kabi sufia kamal hall", "sufia kamal hall", "bijoy ekattor hall", "sir a.f. rahman hall", "af rahman hall", "amar ekushey hall", "kabi jasimuddin hall", "jasimuddin hall", "muktijoddha ziaur rahman hall", "zia hall", "bangabandhu sheikh mujibur rahman hall", "bangabandhu hall", "iba hostel", "ier hostel", "isrt hostel", "charukola hostel", "ruqayyah", "shamsunnahar", "এসএম হল", "সলিমুল্লাহ মুসলিম হল", "জগন্নাথ হল", "শহীদুল্লাহ হল", "ড. মুহম্মদ শহীদুল্লাহ হল", "ফজলুল হক মুসলিম হল", "এফএইচ হল", "জহুরুল হক হল", "মাস্টারদা সূর্যসেন হল", "সূর্যসেন হল", "হাজী মুহম্মদ মুহসীন হল", "মুহসীন হল", "রোকেয়া হল", "শামসুন নাহার হল", "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল", "বঙ্গমাতা হল", "বাংলাদেশ-কুয়েত মৈত্রী হল", "কুয়েত মৈত্রী হল", "কবি সুফিয়া কামাল হল", "সুফিয়া কামাল হল", "বিজয় একাত্তর হল", "স্যার এ.এফ. রহমান হল", "এএফ রহমান হল", "অমর একুশে হল", "কবি জসীমউদ্দীন হল", "জসীমউদ্দীন হল", "মুক্তিযোদ্ধা জিয়াউর রহমান হল", "জিয়া হল", "বঙ্গবন্ধু শেখ মুজিবুর রহমান হল", "বঙ্গবন্ধু হল", "আইবিএ হোস্টেল", "tsc", "teacher-student centre", "teacher student center", "curzon hall", "carzon hall", "madhur canteen", "raju sculpture", "raju vashkorjo", "raju memorial sculpture", "aparajeyo bangla", "oporajeyo bangla", "arts building du", "kala bhaban", "kola bhaban", "hakim chattar", "mall chattar", "daser tong", "iblis chattar", "swoparjito shadhinota", "shoparjito shadhinata", "du central library", "du science library", "du medical centre", "nabab nawab ali chowdhury senate bhaban", "senate bhaban du", "rc majumdar auditorium", "muzaffar ahmed chowdhury auditorium", "mokarram bhaban", "annex bhaban", "kazi motahar hossain bhaban", "টিএসসি", "ছাত্র-শিক্ষক কেন্দ্র", "কার্জন হল", "মধুর ক্যান্টিন", "রাজু ভাস্কর্য", "সন্ত্রাসবিরোধী রাজু স্মারক ভাস্কর্য", "অপরাজেয় বাংলা", "কলা ভবন", "হাকিম চত্বর", "মল চত্বর", "দাসের টং", "ইবলিশ চত্বর", "স্বোপার্জিত স্বাধীনতা", "ঢাবি কেন্দ্রীয় গ্রন্থাগার", "বিজ্ঞান গ্রন্থাগার", "ঢাবি মেডিকেল সেন্টার", "নবাব নওয়াব আলী চৌধুরী সিনেট ভবন", "সিনেট ভবন ঢাবি", "আর.সি. মজুমদার মিলনায়তন", "মোজাফফর আহমেদ চৌধুরী মিলনায়তন", "মোকাররম ভবন", "অ্যানেক্স ভবন", "কাজী মোতাহার হোসেন ভবন", "টি এস সি", "শ্যাডো", "চারুকলা", "du iba", "iba du", "institute of business administration du", "du ier", "institute of education and research du", "du isrt", "du iit", "institute of information technology du", "du infs", "du dmlc", "du charukola", "fine arts du", "fbs du", "faculty of business studies du", "fsss du", "faculty of science du", "faculty of arts du", "faculty of social sciences du", "pharmacy du", "du law", "du economics", "du english", "du physics", "du cse", "du eee", "du chemistry", "du botany", "du zoology", "du sociology", "du political science", "ঢাবি আইবিএ", "ব্যবসায় প্রশাসন ইনস্টিটিউট ঢাবি", "ঢাবি শিক্ষা ও গবেষণা ইনস্টিটিউট", "আইইআর ঢাবি", "চারুকলা ঢাবি", "চারুকলা অনুষদ", "ঢাবি বিজ্ঞান অনুষদ", "ঢাবি কলা অনুষদ", "ঢাবি সামাজিক বিজ্ঞান অনুষদ", "ঢাবি ব্যবসায় শিক্ষা অনুষদ", "ঢাবি আইন বিভাগ", "ঢাবি অর্থনীতি বিভাগ", "ঢাবি ইংরেজি বিভাগ", "ঢাবি পদার্থবিজ্ঞান", "ঢাবি কম্পিউটার বিজ্ঞান", "ঢাবি ফার্মেসি", "ঢাবি রসায়ন", "ঢাবি উদ্ভিদবিজ্ঞান", "ঢাবি প্রাণিবিদ্যা", "ঢাবি সমাজবিজ্ঞান", "ঢাবি রাষ্ট্রবিজ্ঞান", "ঢাবি আইআইটি", "ঢাবি ফলিত গণিত", "du admission", "du admission test", "du admission circular", "du result", "du exam routine", "du cgps", "du notice", "du academic calendar", "du syllabus", "a unit du", "b unit du", "c unit du", "d unit du", "e unit du", "cha unit du", "ka unit du", "kha unit du", "ga unit du", "gha unit du", "du a unit", "du b unit", "du c unit", "du d unit", "du cha unit", "du merit list", "du waiting list", "du subject choice", "du admit card", "du seat plan", "du viva", "du convocation", "ঢাবি ভর্তি", "ঢাবি ভর্তি পরীক্ষা", "ঢাবি ভর্তি বিজ্ঞপ্তি", "ঢাবি রেজাল্ট", "ঢাবি ফলাফল", "ঢাবি পরীক্ষার রুটিন", "ঢাবি নোটিশ", "ঢাবি ক ইউনিট", "ঢাবি খ ইউনিট", "ঢাবি গ ইউনিট", "ঢাবি ঘ ইউনিট", "ঢাবি চ ইউনিট", "ক ইউনিট ঢাবি", "খ ইউনিট ঢাবি", "গ ইউনিট ঢাবি", "ঘ ইউনিট ঢাবি", "চ ইউনিট ঢাবি", "ঢাবি মেধা তালিকা", "ঢাবি অপেক্ষমান তালিকা", "ঢাবি বিষয় নির্বাচন", "ঢাবি এডমিট কার্ড", "ঢাবি আসন বিন্যাস", "ঢাবি ভাইভা", "ঢাবি সমাবর্তন", "ducsu", "dhaka university central students union", "du vc", "vice chancellor du", "du pro vc", "du registrar", "du proctor", "asmj mqsud kamal", "niaz ahmed khan", "du bcl", "chhatra league du", "du chhatra dal", "jcd du", "du teachers association", "duta", "du syndicate", "du senate", "anti discrimination student movement du", "ডাকসু", "ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় ছাত্র সংসদ", "ঢাবি ভিসি", "ঢাবি উপাচার্য", "ঢাবি প্রো ভিসি", "ঢাবি উপ-উপাচার্য", "ঢাবি রেজিস্ট্রার", "ঢাবি প্রক্টর", "নিয়াজ আহমেদ খান", "ঢাবি ছাত্রলীগ", "ঢাবি ছাত্রদল", "ঢাবি ছাত্র ইউনিয়ন", "ঢাবি ছাত্রফ্রন্ট", "ঢাবি শিক্ষক সমিতি", "ঢাবি সিন্ডিকেট", "ঢাবি সিনেট", "বৈষম্যবিরোধী ছাত্র আন্দোলন ঢাবি", "dhaka university reading club", "durc", "duits", "du debating society", "duds", "dufilm society", "dufs", "du tourist society", "dhaka university mime action", "duma", "dhaka university model united nations", "dumuna", "joy dhoni", "srijon", "dhaka university career club", "ducc", "duja", "dhaka university journalists association", "ঢাবি ডিবেটিং সোসাইটি", "ঢাবি ক্যারিয়ার ক্লাব", "ঢাবি চলচ্চিত্র সংসদ", "জয়ধ্বনি", "ঢাবি সাংবাদিক সমিতি"
  ];

  // Inject bulletproof CSS to hide flagged elements permanently
  const style = document.createElement('style');
  style.textContent = `
    [data-scb-hide="true"],
    .scb-hidden-flag {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      position: absolute !important;
      width: 0 !important;
      height: 0 !important;
      z-index: -9999 !important;
    }
  `;
  // Wait for head to be available
  const injectStyles = setInterval(() => {
    if (document.head) {
      document.head.appendChild(style);
      clearInterval(injectStyles);
    }
  }, 100);

  let regex = null;

  // Core structure containers for social media posts
  const postContainers = [
    'ytd-video-renderer', 'ytd-grid-video-renderer', 'ytd-rich-item-renderer', 'ytd-compact-video-renderer',
    '[role="article"]', 'article', 'div[data-pagelet^="FeedUnit"]', 'div[data-testid="post_container"]',
    'div[role="feed"] > div', 'div[data-pagelet^="ProfileTimeline"] > div > div',
    '.update-components-update-v2', '.g', '.MjjYud', 
    '.WlydOe', '.SoaBEf', '.n0jPhd', 
    '.news-item', '.feed-item', '.post', '.tweet', '[data-testid="tweet"]',
    // Ultra-generic fallback for FB card wrapper
    'div.x1yztbdb.x1n2onr6.xh8yej3'
  ].join(',');

  // Initialize and build optimized regex
  chrome.storage.local.get(['customKeywords'], (data) => {
    const custom = data.customKeywords || [];
    // Expanding defaults heavily based on requested extreme expansion
    const extremeExpansion = [
      "sociology", "dept of sociology", "sociology dept", "department of sociology",
      "political science dept", "physics dept", "cse dept", "english dept",
      "campus", "faculty", "viswavidyalaya", "bhaban", "chatra", "chhatra",
      "𝐃𝐔 𝐂𝐚𝐦𝐩𝐮𝐬 𝐃𝐢𝐚𝐫𝐢𝐞𝐬"
    ];
    // Keep raw versions and normalized versions in memory if we need them, but lowercase is standard
    const allKeywords = [...defaultKeywords, ...custom, ...extremeExpansion].filter(Boolean);

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Semantic boundaries: Apply \b for English to stop substring false positives, raw for Bengali
    const pattern = allKeywords.map(k => {
      // Normalize keyword beforehand too
      const normalizedK = k.normalize("NFKC");
      const escaped = escapeRegExp(normalizedK.trim().toLowerCase());
      if (/^[a-z0-9\s]+$/.test(escaped)) return `\\b${escaped}\\b`;
      return escaped;
    }).join('|');

    // Add unicode flag 'u' to support surrogate pairs and full unicode case folding
    regex = new RegExp(pattern, 'iu');
    observeAndBlock();
  });

  function tagAndHide(el) {
    if (!el || el.dataset.scbHide) return;
    
    // Find the Master Post Container
    // 1. Explicit Selector Match
    let container = el.matches && el.matches(postContainers) ? el : el.closest(postContainers);
    
    // 2. Heuristic Search: Walk up to 8 levels looking for an interactive card wrapper
    if (!container) {
      let current = el.parentElement;
      for (let i = 0; i < 8; i++) {
        if (!current || current.tagName === 'BODY' || current.tagName === 'HTML' || current.id) break;
        // Check if this level represents a card (contains comment/share buttons or is a generic widget block)
        if (current.querySelector && current.querySelector('[aria-label="Comment"], [aria-label="Share"], [role="button"], [aria-label="Leave a comment"]')) {
           container = current;
           // Keep walking up just 1 or 2 more levels to ensure we get the full wrapper
           if (current.parentElement && current.parentElement.tagName === 'DIV') container = current.parentElement;
           break;
        }
        current = current.parentElement;
      }
    }

    // 3. Fallback to just obliterating the text's immediate block
    if (!container) {
      container = el.closest('div, p, span, a, section, header');
    }

    if (container) {
      container.dataset.scbHide = "true";
      container.classList.add('scb-hidden-flag');
      container.style.cssText += 'display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; height: 0 !important; overflow: hidden !important; border: none !important; margin: 0 !important; padding: 0 !important;';
    }
  }

  const checkedNodes = new WeakSet();
  const checkedElements = new WeakSet();

  function scanDOM() {
    if (!regex) return;

    // Phase 1: Pure TreeWalker checking absolutely EVERY text node on the page
    // This perfectly defeats <a> <span> obfuscation entirely
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    
    while ((node = walker.nextNode())) {
      if (checkedNodes.has(node)) continue;
      checkedNodes.add(node);

      const text = node.nodeValue || "";
      // Smart bypass defeat: Normalize Unicode compatibility characters (Mathematical bold, cursive, etc) back to basic Latin
      const normalizedText = text.normalize("NFKC").trim();
      
      if (normalizedText && regex.test(normalizedText)) {
        // ULTIMATE SANITY CHECK: Replace the text itself so even if React overrides CSS, the text is gone
        node.nodeValue = "⛔ [BLOCKED] ⛔";
        tagAndHide(node.parentElement);
      }
    }

    // Phase 2: Metadata & Link Sweeping (The Pre-cog & Accessibility checks)
    const sweepElements = document.querySelectorAll('a[href], img[alt], [aria-label]');
    for (let i = 0; i < sweepElements.length; i++) {
        const el = sweepElements[i];
        if (checkedElements.has(el)) continue;
        checkedElements.add(el);
        
        const href = (el.getAttribute('href') || '').toLowerCase();
        const alt = el.getAttribute('alt') || '';
        const aria = el.getAttribute('aria-label') || '';
        
        // Also catch explicit URL substrings
        const hasBadUrl = href.includes('du.ac.bd') || href.includes('dhaka-university') || href.includes('dhakauniversity');
        const combined = `${alt} ${aria} ${href}`.normalize("NFKC").trim();
        
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

    // Hardware-accelerated, debounced observer logic
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
