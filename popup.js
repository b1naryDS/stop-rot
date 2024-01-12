
alert("hahah");
document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showAlert') {
      alert('A new YouTube video has started!');
    }
  });
});
