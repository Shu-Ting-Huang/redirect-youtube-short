chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: "Say Hello World",
    contexts: ["all"],
    id: "helloWorld", // Add an ID for the context menu item
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "helloWorld") {
    console.log("Hello World");
    console.log(tab);
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   const currentTab = tabs[0];
    //   console.log("Current URL:", tabs);
    // });
  }
});
