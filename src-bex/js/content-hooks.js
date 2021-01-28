// Hooks added here have a bridge allowing communication between the BEX Content Script and the Quasar Application.
// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/content-hooks
import collectCoin from './dom/collect-coin'
export default function attachContentHooks (bridge) {
  // Hook into the bridge to listen for events sent from the client BEX.
  bridge.on('collect.coin', event => {
    console.log('coletando', event.data)
    collectCoin(bridge)
  })
}
