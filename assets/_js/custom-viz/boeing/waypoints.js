const Waypoint = require('waypoints/lib/noframework.waypoints.js')

const WaypointsJS = () => {
  console.log('testing waypoint')
  let wrapper = document.getElementById('scroll-wrapper')
  let text = document.getElementByClass('text-scroll')

  //Pseudo-code as I start to lay this out!
  let initPlane = new Waypoint({
    element: wrapper,
    handler: function(direction) {
      //below is just test code
      if (direction == 'down') {
        console.log('DOWN: going' + direction)
      } else if (direction == 'up') {
        console.log('UP: going' + direction)
      }
      //make plane element sticky at the top of the page for mobile version
      //on desktop, plane is sticky on the right side of the page
    }
  })

  let initText = new Waypoint({
    element: text,
    handler: function(direction) {
      //each function triggers specific action for text box
      //when user arrives at each waypoint ---> triggers change in svg
      //pieces mentioned change in opacity (with delayed transition if multiple pieces are mentioned)
      //total text boxes: 9

      //below is just test code
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

  //bonus: hovering on piece in text triggers action on svg
}

export default WaypointsJS
