chrome.devtools.panels.create(
  "DevTools panel",
  null,
  "panel.html",
  function(panel) {
    console.log("Hello from callback");
  });
