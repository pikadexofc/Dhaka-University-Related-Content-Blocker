document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('keywords');
  const saveBtn = document.getElementById('save');
  const msg = document.getElementById('msg');
  const killCountDisplay = document.getElementById('kill_count');
  const blurToggle = document.getElementById('blur_toggle');

  chrome.storage.local.get(['customKeywords', 'blockedCount', 'blurMode'], (data) => {
    box.value = (data.customKeywords || []).join(', ');
    killCountDisplay.textContent = data.blockedCount || 0;
    blurToggle.checked = !!data.blurMode;
  });

  blurToggle.addEventListener('change', (e) => {
    chrome.storage.local.set({ blurMode: e.target.checked });
  });

  saveBtn.addEventListener('click', () => {
    const arr = box.value.split(',')
      .map(v => v.trim())
      .filter(Boolean);

    chrome.storage.local.set({ customKeywords: arr }, () => {
      msg.classList.remove('hidden');
      saveBtn.textContent = 'Saved!';
      
      setTimeout(() => {
        msg.classList.add('hidden');
        saveBtn.textContent = 'Save Configuration';
      }, 2000);
    });
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.blockedCount) {
      killCountDisplay.textContent = changes.blockedCount.newValue;
    }
  });
});
