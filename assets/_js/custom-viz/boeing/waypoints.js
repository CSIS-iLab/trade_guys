import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const Waypoints = () => {
  let wrapper = document.getElementById('boeing-scroll')
  let planeSVG = document.getElementById('plane-svg')
  let planeParts = document.getElementsByClassName('parts')

  let text1 = document.getElementById('s1')
  let forward_fuselage = document.getElementById('Forward_fuselage')
  let forward_landing_gear = document.getElementById('Landing_gear')
  let label1 = document.getElementById('Forward_fuselage_label')
  let label2 = document.getElementById('Landing_Gear_label')

  let text2 = document.getElementById('s2')
  // let text3 = document.getElementById('s3')

  let loadScrollytelling = new Waypoint.Inview({
    element: wrapper,
    enter: function(direction) {
      console.log('enter')
      if (direction == 'down') {
        planeSVG.classList.add('fade-in')
      } else if (direction == 'up') {
        console.log('enter-up: ' + direction)
        // document.getElementById('plane-svg').classList.remove('fade-in')
        // document.getElementById('s1').classList.remove('fade-in')
      }
    },
    entered: function() {
      planeParts.classList.add('half-opacity')
    },
    offset: 20
  })

  /*
    second:
    - when boeing plane hits top of screen (offset: 0%)
    - handler:
      - first label appears
      - plane fades in opacity except for highlighted pieces (delayed timing)
  */
  let fixScroll = new Waypoint({
    element: planeSVG,
    handler: function(direction) {
      console.log('plane is at top of window: ' + direction)
      if (direction == 'down') {
        wrapper.classList.add('fixed')
        text1.classList.add('visible')
        forward_fuselage.classList.add('full-opacity')
        forward_landing_gear.classList.add('full-opacity')
        label1.classList.add('visible')
        label2.classList.add('visible')
      } else {
        text1.classList.remove('visible')
      }
      // document.getElementById('s2').classList.add('visible')
    },
    offset: '0%'
  })

  /*
    third:
    - after scrolling through 'boeing-text' parent div, s1 fades out, s2 fades in
  */
  let loadText2 = new Waypoint({
    element: text2,
    handler: function(direction) {
      console.log('s2 is on top of window: ' + direction)
      text1.classList.remove('visible')
      text2.classList.add('visible')
    },
    offset: '0%'
  })

  loadScrollytelling()
  loadText2()
  fixScroll()
}

export default Waypoints
