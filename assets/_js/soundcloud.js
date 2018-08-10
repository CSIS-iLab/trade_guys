import { SC } from 'sdk'
export function player() {
  console.log('player')
  SC.initialize({
    client_id: 'e1b9039f824fdaf6ec1fc594037c1ac7'
  })
  let URL =
    'https://soundcloud.com/csis-57169780/are-tariffs-the-greatest?in=csis-57169780/sets/the-trade-guys'

  SC.resolve(URL).then(json => {
    let trackPath = `tracks/${json.id}`
    console.log(trackPath)
    SC.stream(trackPath).then(player => {
      console.log(player)
      player.play()
    })
  })
}
