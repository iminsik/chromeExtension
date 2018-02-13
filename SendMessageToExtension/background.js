/*
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    sendResponse({status: 'SUCCESS', request: request});
});
*/

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    sendResponse(
      {
        farewell: "goodbye",
        request: request,
        sender: sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension'
      });
});
