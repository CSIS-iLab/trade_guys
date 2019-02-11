require('waypoints/lib/jquery.waypoints.min.js')
const $ = require('jquery')

const WaypointsJS = () => {
  console.log('testing waypoint')

  $('#scroll-wrapper').waypoint(function(direction) {
    if (direction == 'down') {
      $('.scroll-wrapper').addClass('full-screen')
      $('.plane').addClass('sticky')
    }
    if (direction == 'up') {
      console.log('UP: going' + direction)
    }
  })

  /*let loadScrollytelling = new Waypoint({
    element: document.getElementById('scroll-wrapper'),
    handler: function(direction) {
      if (direction == 'down') {
        document.getElementById('scroll-wrapper').addClass('full-screen')
        console.log('scroll wrapper entered screen')

        document.getElementById('plane').addClass('sticky')
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
  loadMap()*/
}

export default WaypointsJS
