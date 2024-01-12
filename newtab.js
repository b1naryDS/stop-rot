alert("aa")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    alert("aaasdf")
    if (request.action === 'showAlert') {
        alert('A new YouTube video has started!');
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^https:\/\/www\.youtube\.com\/watch/.test(tab.url!)) {
        chrome.runtime.sendMessage({ action: 'showAlert' });
    }
});
