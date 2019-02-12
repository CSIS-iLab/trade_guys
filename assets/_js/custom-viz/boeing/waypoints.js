import 'waypoints/lib/noframework.waypoints.min'

const WaypointsJS = () => {
  console.log('testing waypoint')

  let loadScrollytelling = new Waypoint({
    element: document.getElementById('scroll-wrapper'),
    handler: function(direction) {
      if (direction == 'down') {
        document.getElementById('scroll-wrapper').classList.add('full-screen')
        console.log('scroll wrapper entered screen')

        document.getElementById('plane').classList.add('sticky')
        console.log('plane is full screen')
      }
    }
  })

  let loadText = function() {
    let firstWaypoint = document.getElementById('s1')
    console.log('loadText function')
    firstWaypoint.waypoint(function() {
      console.log('arrived at first waypoint')
    })
  }

  let loadMap = new Waypoint({
    element: document.getElementById('map'),
    handler: function(direction) {
      if (direction == 'down') {
        console.log('DOWN: going' + direction)
      } else if (direction == 'up') {
        console.log('UP: going' + direction)
      }
    }
  })

  loadScrollytelling()
  loadText()
  loadMap()
}

export default WaypointsJS
