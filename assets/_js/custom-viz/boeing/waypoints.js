import $ from 'jquery'
import 'waypoints/lib/jquery.waypoints.min.js'

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
}

export default WaypointsJS
