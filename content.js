chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "new YouTube video") {
    // Check if the message is for the current tab
    if (sender.tab && sender.tab.id === request.tabId) {
      alert("You've opened a new YouTube video!");
    }
  }
});
