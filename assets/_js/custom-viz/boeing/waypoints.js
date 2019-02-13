import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const WaypointsJS = () => {
  let loadScrollytelling = new Waypoint.Inview({
    element: document.getElementById('boeing-scroll'),
    enter: function(direction) {
      console.log('enter: ' + direction)
      if (direction == 'down') {
        console.log('enter-down: ' + direction)
        // document.getElementById('boeing-scroll').classList.add('full-screen')
        document.getElementById('plane-svg').classList.add('visible')
        document.getElementById('s1').classList.add('visible')
      } else if (direction == 'up') {
        //fade out effect
      }
    },
    offset: 20
  })

  let s1 = new Waypoint({
    element: document.getElementById('s1'),
    handler: function(direction) {
      if (direction == 'down') {
        document.getElementById('s1').classList.remove('visible')
        document.getElementById('s2').classList.add('visible')
      }
    }
  })

  let s2 = new Waypoint({
    element: document.getElementById('s2'),
    handler: function(direction) {
      if (direction == 'down') {
        document.getElementById('s2').classList.remove('visible')
        document.getElementById('s3').classList.add('visible')
      }
    }
  })

  loadScrollytelling()
  s1()
  s2()
}

export default WaypointsJS
