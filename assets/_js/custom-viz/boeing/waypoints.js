import 'waypoints/lib/noframework.waypoints.min'

const WaypointsJS = () => {
  let scrollWrapper = document.getElementById('scroll-wrapper')
  let scrollingText = document.getElementsByClassName('scroll-text')

  let loadScrollytelling = new Waypoint({
    element: scrollWrapper,
    handler: function(direction) {
      if (direction == 'down') {
        // document.getElementById('scroll-wrapper').classList.add('full-screen')
        // console.log('scroll wrapper entered screen')

        document.getElementById('plane-svg').classList.add('sticky')
        console.log('plane is full screen')
      }
    }
  })

  let loadText = new Waypoint({
    element: scrollingText,
    handler: function(direction) {
      if (direction == 'down') {
        document.getElementById('scroll-wrapper').classList.add('full-screen')
        console.log('scroll wrapper entered screen')
      }
    }
  })

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
