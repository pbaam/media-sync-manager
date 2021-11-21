window.links = {};

chrome.runtime.onMessage.addListener(function(
    request, sender, sendResponse) { window.links[request.url] = request.url; })

chrome.browserAction.onClicked.addListener(function(
    tab) { chrome.tabs.create({url : 'popup.html'}); })