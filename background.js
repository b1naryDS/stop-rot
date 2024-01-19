// background.js

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('https://www.youtube.com/watch')) {
        // Send a message to the last tab that was on a YouTube video
        chrome.tabs.sendMessage(tabId, { type: 'youtube_navigated' });
        return true;
    }
});
