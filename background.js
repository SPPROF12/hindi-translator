chrome.webRequest.onCompleted.addListener(
    function(details) {
      chrome.tabs.sendMessage(details.tabId, {
        type: 'TRACKING_INFO',
        url: details.url,
        initiator: details.initiator,
        method: details.method
      });
    },
    { urls: ["<all_urls>"] }
  );
  