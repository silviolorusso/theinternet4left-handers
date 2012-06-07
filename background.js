var current;
var status = 0;

function onOff() {
    if (status == 1) 
    {   
        status = 0;
        current = "icon-right.png";
        chrome.browserAction.setTitle({title:'Activate The Internet for Left-Handers©'});
        chrome.tabs.query({}, function (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {file: "decursor.js"});
                }
            }
        );
    }
    else 
    {
        status = 1;
        current = "icon-left.png";
        chrome.browserAction.setTitle({title:'Deactivate The Internet for Left-Handers©'});
        chrome.tabs.query({}, function (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    chrome.tabs.executeScript(tabs[i].id, {file: "cursor.js"});
                }
            }
        );
    }
    chrome.browserAction.setIcon({path:current});
}
function startLeft() {
    if (status == 1) {
    chrome.tabs.executeScript({file: "cursor.js"});
    }
}
chrome.browserAction.onClicked.addListener(onOff);
chrome.tabs.onUpdated.addListener(startLeft);














