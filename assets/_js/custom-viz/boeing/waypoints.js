import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const WaypointsJS = () => {
  let loadScrollytelling = new Waypoint.Inview({
    element: document.getElementById('scroll-wrapper'),
    enter: function(direction) {
      console.log('enter: ' + direction)
      if (direction == 'down') {
        console.log('enter-down: ' + direction)
        document.getElementById('scroll-wrapper').classList.add('full-screen')
        document.getElementById('plane-svg').classList.add('visible')
      } else if (direction == 'up') {
        console.log('enter-up: ' + direction)
      }
    },
    entered: function(direction) {
      console.log('entered: ' + direction)
      if (direction == 'down') {
        console.log('entered-up: ' + direction)
      } else if (direction == 'up') {
        console.log('entered-up: ' + direction)
      }
      document.getElementById('plane-svg').classList.add('sticky-top')
      document.getElementById('scroll-wrapper').classList.add('sticky-top')
    },
    exit: function(direction) {
      console.log('exit: ' + direction)
      if (direction == 'down') {
        console.log('exit-down: ' + direction)
      } else if (direction == 'up') {
        console.log('exit-up: ' + direction)
      }
    },
    exited: function(direction) {
      console.log('exited: ' + direction)
      document.getElementById('plane-svg').classList.remove('sticky-top')
      document.getElementById('scroll-wrapper').classList.remove('full-screen')
      document.getElementById('scroll-wrapper').classList.remove('sticky-top')
    }
  })

  let loadText = new Waypoint({
    element: document.getElementById('text-wrapper'),
    handler: function(direction) {
      document.getElementById('text-wrapper').classList.add('sticky-bottom')
      console.log('loadText: ' + direction)
    }
  })

  // let loadText = new Waypoint({
  //   element: document.getElementsByClassName('scroll-text'),
  //   handler: function(direction) {
  //     if (direction == 'down') {
  //       document.getElementById('scroll-wrapper').classList.add('full-screen')
  //       console.log('scroll wrapper entered screen')
  //     } else if (direction == 'up') {
  //       console.log('scroll wrapper leaving screen' + direction)
  //       document.getElementById('scroll-wrapper').classList.remove('sticky-top')
  //     }
  //   }
  // })

  loadScrollytelling()
  loadText()
}

export default WaypointsJS
