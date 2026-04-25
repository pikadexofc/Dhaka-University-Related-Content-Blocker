document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('keywords');
  const saveBtn = document.getElementById('save');
  const msg = document.getElementById('msg');

  // Load existing keywords
  chrome.storage.local.get(['customKeywords'], (data) => {
    box.value = (data.customKeywords || []).join(', ');
  });

  // Save parsed keywords
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
});
