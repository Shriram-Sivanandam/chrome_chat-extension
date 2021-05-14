chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { message: "load" });
});

let contextMenuItem = {
  id: "redirectChat",
  title: "Chat with people in this URL",
  contexts: ["all"],
};
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(contextMenuItem);
});
chrome.contextMenus.onClicked.addListener((clickData) => {
  console.log(clickData);
  if (clickData.menuItemId === "redirectChat") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          getInfo: true,
        },
        (response) => {
          if (response.videoElementPresent) {
            chrome.tabs.sendMessage(tabs[0].id, {
              redirect: true,
              redirectURL: `http://localhost:3000/?url=${clickData.pageUrl}`,
            });
          } else {
            chrome.tabs.sendMessage(tabs[0].id, {
              type: "alert",
              message: "Could not find any video element in the page.",
            });
          }
        }
      );
    });
  }
});

// let contextMenuItem = {
//   id: "chatRoom",
//   title: "Chat in this URL",
//   contexts: ["all"],
// };

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create(contextMenuItem);
// });

// chrome.contextMenus.onClicked.addListener((clickData) => {
//   if (clickData.menuItemId === "reportRedirect") {
//     console.log(window.location.toString());
//   }
// });
