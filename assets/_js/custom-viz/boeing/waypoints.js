require('waypoints/lib/noframework.waypoints.js')
require("waypoints/lib/shortcuts/sticky.js")

const WaypointsJS = () => {
  console.log('testing waypoint')

  //Everything commented out is pseudo-code.
  let loadScrollytelling = new Waypoint({
    element: document.getElementById('scroll-wrapper'),
    enter: function(direction) {
      //When textbox enters viewpoint
      if (direction == 'down') {
        document.getElementById('scroll-wrapper').addClass('full-screen')
        console.log('scroll wrapper entered screen')

        document.getElementById('plane').addClass('sticky')
        console.log('plane is full screen')
      } else if (direction == 'up') {
        console.log('up')
      }
    },
    exit: function(direction) {
      if (direction == 'down') {
        document.getElementById('scroll-wrapper').removeClass('full-screen')
        console.log('scroll wrapper exits screen')

        document.getElementById('plane').removeClass('sticky')
      } else if (direction == 'up') {
        console.log('up')
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

  //Waypoint for Map (?)
  //Triggers full-screen map to appear on screen at the end of the scrollytelling visualization
  //The waypoint could also trigger the CSS animations, which will likely be animated lines moving towards Everett, WA (where the 787s are manufactured)
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
}

export default WaypointsJS
