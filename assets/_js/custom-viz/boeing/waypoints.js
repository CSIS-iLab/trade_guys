const Waypoint = require('waypoints/lib/noframework.waypoints.js')

const WaypointsJS = () => {
  console.log('testing waypoint')
  let waypoint = new Waypoint()

  //Everything commented out is pseudo-code.
  let loadScrollytelling = new Waypoint.Sticky({
    element: document.getElementById('scroll-wrapper'),
    enter: function(direction) {
      //When textbox enters viewpoint
      document.getElementById('scroll-wrapper').addClass('full-screen')
      console.log('scroll wrapper entered screen');

      document.getElementById('plane').addClass('sticky')
      console.log('plane is full screen');

    },
    exit: function(direction) {
      document.getElementById('scroll-wrapper').removeClass('full-screen')
      console.log('scroll wrapper exits screen');

      document.getElementById('plane').removeClass('sticky')
    }
  })

  let loadText = function() {
    let firstWaypoint = document.getElementById('s1')

    let waypoint1 = new Waypoint {
      enter: function(direction) {
        document.getElementById('s1').addClass('sticky')
      },
      exit: function(direction) {
        document.getElementById('s1').addClass('sticky')
      }
    }
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

  loadScrollytelling()
  loadText()
  loadMap()
}

export default WaypointsJS
