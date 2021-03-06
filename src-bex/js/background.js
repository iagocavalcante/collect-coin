chrome.runtime.onMessage.addListener(function (req, sender) {
  chrome.storage.local.set({ address: req.address })
  chrome.pageAction.show(sender.tab.id)
  chrome.pageAction.setTitle({ tabId: sender.tab.id, title: req.address })
})

chrome.runtime.onInstalled.addListener(function () {
  if (document.domain === 'www.twitch.tv') {
    chrome.alarms.create('COLLECT_COIN', { delayInMinutes: 0.01, periodInMinutes: 0.1 })
  }
})

chrome.runtime.onStartup.addListener(function () {
  if (document.domain === 'www.twitch.tv') {
    chrome.alarms.create('COLLECT_COIN', { delayInMinutes: 0.01, periodInMinutes: 0.1 })
    window.console.log('Starting browser... updating icon.')
  }
})
