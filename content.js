// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'youtube_navigated') {
        alert('You have navigated to a new YouTube video!'+ request.msg);
    }
});
