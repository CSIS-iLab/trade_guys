const Waypoint = require('waypoints/lib/noframework.waypoints.js')

const WaypointsJS = () => {
  console.log('testing waypoint')
  let wrapper = document.getElementById('scroll-wrapper')
  let text = document.getElementByClass('text-scroll')

  //pseudo-code as I start to lay this out!
  let initPlane = new Waypoint({
    element: wrapper,
    handler: function(direction) {
      if (direction == 'down') {
        console.log('DOWN: going' + direction)
      } else if (direction == 'up') {
        console.log('UP: going' + direction)
      }
      //make plane element sticky at the top of the page for mobile version
    }
  })

  let initText = new Waypoint({
    element: text,
    handler: function(direction) {
      //for each 'scroll-text' class
      //have to identified by specific #id bc specific actions are triggered
      //total text boxes: 9
      if (direction == 'down') {
        console.log('DOWN: going' + direction)
      } else if (direction == 'up') {
        console.log('UP: going' + direction)
      }
    }
  })

  //waypoint for map (?)
  //triggers css animations once map is in full-view
  let initMap = new Waypoint({
    element: text,
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
