// background.js
let lastUrl = null;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('https://www.youtube.com/watch') && tab.url !== lastUrl) {
        // Send a message to the last tab that was on a YouTube video
        lastUrl = tab.url.toString();
        //chrome.tabs.sendMessage(tabId, { type: 'youtube_navigated', msg: Math.random(10) });
        //chrome.browserAction.setPopup({
        //    popup: "popup.html"
        //});
        //chrome.browserAction.popup();
        window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");

        //chrome.tabs.create({url: "popup.html"});
        return true;
    }
    return;
});

