const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.attributeName === 'class' && mutation.target.classList.contains('html5-main-video')) {
      observer.disconnect();
      chrome.runtime.sendMessage({ action: 'showAlert' });
    }
  }
});

observer.observe(document.body, { attributes: true, childList: false, subtree: false });
