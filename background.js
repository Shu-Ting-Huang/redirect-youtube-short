chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: "Watch Short as Regular Video",
    contexts: ["all"],
    id: "watchShortAsRegular"
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "watchShortAsRegular") {
    if (tab.url.startsWith("https://www.youtube.com/shorts/")) {
      chrome.tabs.update(tab.id, {url: tab.url.replace("shorts/","watch?v=")})
    }
  }
});
