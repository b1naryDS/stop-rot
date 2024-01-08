chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    tab.url &&
    tab.url.includes("youtube.com/watch") &&
    changeInfo.status === "complete"
  ) {
    chrome.tabs.sendMessage(tabId, {
      message: "new YouTube video",
      tabId: tabId,
    });
  }
});
