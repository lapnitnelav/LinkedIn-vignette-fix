chrome.webNavigation.onHistoryStateUpdated.addListener(
  function (event) {
    chrome.tabs.executeScript(event.tabId, {
       file:"content-script.js"
       });
  },
  { url: 
       [  {urlMatches: 'linkedin.com/search/results/'} ]
  }
);
