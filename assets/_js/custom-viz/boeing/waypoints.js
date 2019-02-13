import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const WaypointsJS = () => {
  let loadScrollytelling = new Waypoint.Inview({
    element: document.getElementById('boeing-scroll'),
    enter: function(direction) {
      console.log('enter')
      if (direction == 'down') {
        console.log('enter-down: ' + direction)
        document.getElementById('plane-svg').classList.add('fade-in')
        document.getElementById('s1').classList.add('fade-in')
        document.getElementById('s1').classList.add('visible')
        document.getElementById('plane-svg').classList.add('fade-in')
      } else if (direction == 'up') {
        console.log('enter-up: ' + direction)
        // document.getElementById('plane-svg').classList.remove('fade-in')
        // document.getElementById('s1').classList.remove('fade-in')
      }
    },
    offset: 20
  })

  let fixScroll = new Waypoint({
    element: document.getElementById('plane-svg'),
    handler: function(direction) {
      console.log('plane is at top of window: ' + direction)
      document.getElementById('boeing-scroll').classList.add('fixed')
      // document.getElementById('s1').classList.remove('visible')
      // document.getElementById('s2').classList.add('visible')
    },
    offset: '0%'
  })

  let loadText2 = new Waypoint({
    element: document.getElementById('s2'),
    handler: function(direction) {
      console.log('s2 is on top of window: ' + direction)
      document.getElementById('s1').classList.remove('visible')
      document.getElementById('s2').classList.remove('visible')
      document.getElementById('s3').classList.add('visible')
    },
    offset: '0%'
  })

  loadScrollytelling()
  loadText()
  loadText2()
}

export default WaypointsJS
