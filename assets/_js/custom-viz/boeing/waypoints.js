import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const Waypoints = () => {
  console.log('waypoints on')
  let wrapper = document.getElementById('boeing-scroll')
  let scrollText = document.getElementsByClassName('scroll-text')

  for (let i = 0; i < scrollText.length; i++) {
    new Waypoint({
      element: scrollText[i],
      handler: function() {
        console.log('fade in & out test')
      },
      continuous: false,
      offset: '0%',
      context: wrapper
    })
  }
}

export default Waypoints
