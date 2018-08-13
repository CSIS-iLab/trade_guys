// import * as SoundCloudAudio from 'soundcloud-audio'
//
// export default SoundCloudAudio

import * as SoundCloudAudio from 'soundcloud-audio'

export function player() {
  let currentPlayer, scPlayer
  const init = (URL, lengthDisplay) => {
    scPlayer = new SoundCloudAudio(`{{site.soundcloud_client_id}}`)

    scPlayer.resolve(URL, function(track) {
      console.log(track.duration, lengthDisplay)
    })
  }

  // const millisToMinutesAndSeconds = millis => {
  //   const minutes = Math.floor(millis / 60000)
  //   const seconds = ((millis % 60000) / 1000).toFixed(0)
  //   return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  // }

  const progressBar = progressDisplay => {
    if (currentPlayer.isPlaying()) {
      let progress =
        (currentPlayer.currentTime() / currentPlayer.getDuration()) * 100
      console.log(progress)
      progressDisplay.style.width = `${progress}%`
    }
  }

  const setCurrent = (URL, lengthDisplay, progressDisplay) => {
    scPlayer.initialize({
      client_id: `{{site.soundcloud_client_id}}`
    })

    scPlayer.resolve(URL).then(json => {
      let trackPath = `tracks/${json.id}`
      scPlayer.stream(trackPath).then(player => {
        currentPlayer = player
        player.play()
        progressBar(progressDisplay)
      })
    })
  }

  document.querySelectorAll('.player').forEach(player => {
    let URL = player.getElementsByClassName('audio-control')[0].dataset.url
    let lengthDisplay = player.getElementsByClassName('length')[0]
    let progressDisplay = player.getElementsByClassName('progress')[0]

    player.querySelectorAll('.audio-control, .status').forEach(element => {
      element.addEventListener('click', () => {
        let control = document.querySelector('.audio-control')
        control.classList.toggle('icon-pause')
        control.classList.toggle('icon-play')

        let status = document.querySelector('.status')
        status.textContent === 'LISTEN'
          ? (status.textContent = 'PLAYING')
          : (status.textContent = 'LISTEN')

        if (currentPlayer && currentPlayer.isPlaying()) {
          currentPlayer.pause()
        } else if (currentPlayer && !currentPlayer.isPlaying()) {
          currentPlayer.play()
          progressBar(progressDisplay)
        } else {
          setCurrent(URL, lengthDisplay, progressDisplay)
        }
      })
    })
    init(URL, lengthDisplay, progressDisplay)
  })
}
