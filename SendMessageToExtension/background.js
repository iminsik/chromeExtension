/*
 * you can send a message in chrome console to this chrome extension
chrome.runtime.sendMessage("hfbfknebcgemlhdcoiponhnllgjbdbha", {greeting: "aloha"}, function(response) {
  console.log(JSON.stringify(response, null, 4));
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

