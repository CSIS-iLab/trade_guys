// let currentPlayer
//
// const init = (URL, lengthDisplay) => {
//   console.log(URL)
//   SC.initialize({
//     client_id: `{{site.soundcloud_client_id}}`
//   })
//
//   SC.resolve(URL).then(json => {
//     let minutes = millisToMinutesAndSeconds(json.duration)
//     lengthDisplay.textContent = minutes
//   })
// }
//
// const millisToMinutesAndSeconds = millis => {
//   const minutes = Math.floor(millis / 60000)
//   const seconds = ((millis % 60000) / 1000).toFixed(0)
//   return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
// }
//
// const progressBar = progressDisplay => {
//   if (currentPlayer.isPlaying()) {
//     let progress =
//       (currentPlayer.currentTime() / currentPlayer.getDuration()) * 100
//     console.log(progress)
//     progressDisplay.style.width = `${progress}%`
//   }
// }
//
// const setCurrent = (URL, lengthDisplay, progressDisplay) => {
//   SC.initialize({
//     client_id: `{{site.soundcloud_client_id}}`
//   })
//
//   SC.resolve(URL).then(json => {
//     let trackPath = `tracks/${json.id}`
//     SC.stream(trackPath).then(player => {
//       currentPlayer = player
//       player.play()
//       progressBar(progressDisplay)
//     })
//   })
// }
//
// document.querySelectorAll('.player').forEach(player => {
//   let URL = player.getElementsByClassName('audio-control')[0].dataset.url
//   let lengthDisplay = player.getElementsByClassName('length')[0]
//   let progressDisplay = player.getElementsByClassName('progress')[0]
//
//   player.querySelectorAll('.audio-control, .status').forEach(element => {
//     element.addEventListener('click', () => {
//       let control = document.querySelector('.audio-control')
//       control.classList.toggle('icon-pause')
//       control.classList.toggle('icon-play')
//
//       let status = document.querySelector('.status')
//       status.textContent === 'LISTEN'
//         ? (status.textContent = 'PLAYING')
//         : (status.textContent = 'LISTEN')
//
//       if (currentPlayer && currentPlayer.isPlaying()) {
//         currentPlayer.pause()
//       } else if (currentPlayer && !currentPlayer.isPlaying()) {
//         currentPlayer.play()
//         progressBar(progressDisplay)
//       } else {
//         setCurrent(URL, lengthDisplay, progressDisplay)
//       }
//     })
//   })
//   init(URL, lengthDisplay, progressDisplay)
// })
