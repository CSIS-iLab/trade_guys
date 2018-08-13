import * as SoundCloudAudio from 'soundcloud-audio'

export default function player() {
  let players = []

  const init = (URL, lengthDisplay) => {
    let scPlayer = new SoundCloudAudio('e1b9039f824fdaf6ec1fc594037c1ac7')
    scPlayer.resolve(URL, function(track) {
      let minutes = millisToMinutesAndSeconds(track.duration)
      lengthDisplay.textContent = minutes
    })
    players.push(scPlayer)
  }

  const millisToMinutesAndSeconds = millis => {
    const minutes = Math.floor(millis / 60000)
    const seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const progressBar = (progressDisplay, i) => {
    setInterval(() => {
      if (players[i].playing) {
        let progressPercent =
          (players[i].audio.currentTime / players[i].audio.duration) * 100
        progressDisplay.style.width = `${progressPercent}%`
      }
    }, 300)
  }

  const addSeeker = (player, i) => {
    player.querySelector('.Rectangle-4').addEventListener('click', e => {
      if (e.target.classList.contains('Rectangle-4')) {
        let progressBarWidth = e.target.offsetWidth
        let progressMillis =
          (e.offsetX / progressBarWidth) * players[i].audio.duration
        players[i].audio.currentTime = progressMillis
      }
    })
  }

  document.querySelectorAll('.player').forEach(player => {
    let URL = player.querySelector('.audio-control').dataset.url
    let lengthDisplay = player.querySelector('.length')
    init(URL, lengthDisplay)
  })

  document.querySelectorAll('.player').forEach((player, i) => {
    player.querySelectorAll('.audio-control, .status').forEach(element => {
      let progressDisplay = player.querySelector('.progress')
      element.addEventListener('click', () => {
        let control = player.querySelector('.audio-control')
        control.classList.toggle('icon-pause')
        control.classList.toggle('icon-play')

        let status = player.querySelector('.status')
        status.textContent === 'LISTEN'
          ? (status.textContent = 'PLAYING')
          : (status.textContent = 'LISTEN')

        if (players[i] && players[i].playing) {
          players[i].pause()
        } else if (players[i] && !players[i].playing) {
          players[i].play()
          addSeeker(player, i)
          progressBar(progressDisplay, i)
        }
      })
    })
  })
}
