export default function collectCoin (data, bridge) {
  console.log('Entrou na funcao', data)
  const amountOfCoin = document.querySelectorAll('.tw-animated-number')
  console.log('Total de moedas => ', amountOfCoin[1].textContent)
  // bridge.send('collect.coin', amountOfCoin)
  const buttonCoin = document.querySelector('.tw-button--success')
  console.log('Total de moedas => ', buttonCoin)
  if (buttonCoin) {
    buttonCoin.click()
    bridge.send('collected.coin', amountOfCoin)
  }
}
