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

// import * as SoundCloudAudio from 'soundcloud-audio'
//
// export default function player() {
//   let players = []
//   let initializeAll = () => {}
//   let addControls = () => {}
//   let init = () => {}
//   let millisToMinutesAndSeconds = () => {}
//   let progressBar = () => {}
//   let addSeeker = () => {}
//
//   initializeAll()
//
//   init = (URL, lengthDisplay) => {
//     let scPlayer = new SoundCloudAudio('e1b9039f824fdaf6ec1fc594037c1ac7')
//     scPlayer.resolve(URL, function(track) {
//       let minutes = millisToMinutesAndSeconds(track.duration)
//       lengthDisplay.textContent = minutes
//     })
//     players.push(scPlayer)
//   }
//
//   millisToMinutesAndSeconds = millis => {
//     const minutes = Math.floor(millis / 60000)
//     const seconds = ((millis % 60000) / 1000).toFixed(0)
//     return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
//   }
//
//   progressBar = (progressDisplay, i) => {
//     setInterval(() => {
//       if (players[i].playing) {
//         let progressPercent =
//           (players[i].audio.currentTime / players[i].audio.duration) * 100
//         progressDisplay.style.width = `${progressPercent}%`
//       }
//     }, 300)
//   }
//
//   addSeeker = (player, i) => {
//     player.querySelector('.Rectangle-4').addEventListener('click', e => {
//       let progressBarWidth = e.target.classList.contains('Rectangle-4')
//         ? e.target.offsetWidth
//         : 501
//       let progressMillis =
//         (e.offsetX / progressBarWidth) * players[i].audio.duration
//       players[i].audio.currentTime = progressMillis
//     })
//   }
//
//   initializeAll = () => {
//     document.querySelectorAll('.player').forEach(player => {
//       let URL = player.querySelector('.audio-control').dataset.url
//       let lengthDisplay = player.querySelector('.length')
//       init(URL, lengthDisplay)
//       addControls()
//     })
//   }
//
//   addControls = () => {
//     document.querySelectorAll('.player').forEach((player, i) => {
//       console.log(document.querySelectorAll('.player'), 'all')
//       player.querySelectorAll('.audio-control, .status').forEach(element => {
//         let progressDisplay = player.querySelector('.progress')
//         element.addEventListener('click', () => {
//           let control = player.querySelector('.audio-control')
//           control.classList.toggle('icon-pause')
//           control.classList.toggle('icon-play')
//
//           let status = player.querySelector('.status')
//           status.textContent === 'LISTEN'
//             ? (status.textContent = 'PLAYING')
//             : (status.textContent = 'LISTEN')
//
//           if (players[i] && players[i].playing) {
//             players[i].pause()
//           } else if (players[i] && !players[i].playing) {
//             players[i].play()
//             addSeeker(player, i)
//             progressBar(progressDisplay, i)
//           }
//         })
//       })
//     })
//   }
// }
