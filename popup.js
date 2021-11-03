document.addEventListener('DOMContentLoaded', function() {
  const background = chrome.extension.getBackgroundPage();

  Object.keys(background.links).forEach(function (url) {
    const div = document.createElement('div');
    div.textContent = `${url}`

    document.body.appendChild(div)
  })
});

function onclick() {
  chrome.tabs.query(
      {currentWindow : true, active : true},
      function(tabs) { chrome.tabs.sendMessage(tabs[0].id, 'hi') });
}
