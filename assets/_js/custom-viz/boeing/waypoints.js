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

  let text2 = document.getElementById('s2')
  let forward_cargo_doors = document.getElementById('cargo_access_doors')
  let label3 = document.getElementById('cargo_access_doors_label')

  let text3 = document.getElementById('s3')
  let midForwardFuselage = document.getElementById('mid-forward_fuselage')
  let centerWingBox = document.getElementById('center-wing-box')
  let wingBodyFairings = document.getElementById('wing-body-fairing-landing-gear-doors')
  let label4 = document.getElementById('mid-forward-fuselage-label')
  let label5 = document.getElementById('center-wing-box-label')
  let label6 = document.getElementById('center_fuselage_label')
  let label7 = document.getElementById('wing-body-fairing-landing-gear-doors-label')

  let text4 = document.getElementById('s4')
  let wings = document.getElementById('wings')
  let engines = document.getElementById('engines')
  let nacelles = document.getElementById('nacelles')
  let label8 = document.getElementById('engines_label')
  let label9 = document.getElementById('nacelles_label')

  fixed and moveable leading front edge
  tailing edge
  fixed tailing edge

  let text5 = document.getElementById('s5')
  enginesnacelles

  let text6 = document.getElementById('s6')
  landing gearwheels

  let text7 = document.getElementById('s7')

  let wrapper = document.getElementById('boeing-scroll')
  let plane_wrapper = document.getElementById('plane-wrapper')
  let plane_svg = document.getElementsByClassName('part-svg')

  let text1 = document.getElementById('s1')
  let forward_fuselage = document.getElementById('forward-fuselage')
  let forward_landing_gear = document.getElementById('landing-gear')
  let forward_fuselage_label = document.getElementById('forward_fuselage_label')
  let forward_landing_gear_label = document.getElementById('landing_gear_label')

  let loadScrollytelling = new Waypoint.Inview({
    element: document.getElementById('boeing-scroll'),
    handler: function(direction) {
      console.log('inside loadScrollytelling: ' + direction)
      if (direction == 'down') {
        plane_svg.classList.add('fade-out')
      } else if (direction == 'up') {
        plane_svg.classList.add('fade-in')
      }
    },
    offset: '0%'
  })

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

  let initText = new Waypoint.Inview({
    element: text1,
    handler: function(direction) {
      console.log('text is at top of window: ' + direction)
      if (direction == 'down') {
        console.log('scrolling down')
        plane_svg.classList.add('faded')
        text1.classList.add('fade-in')
        forward_fuselage.classList.add('visible')
        forward_fuselage_label.classList.add('visible')
        setTimeout(function() {
          forward_landing_gear.classList.add('visible')
          forward_landing_gear_label.classList.add('visible')
        }, 250)
      } else if (direction == 'up') {
        text1.classList.remove('fade-out')
      }
    },
    offset: '0%',
    context: document.getElementById('boeing-scroll')
  })

  let loadParts1 = new Waypoint.Inview({
    element: text1,
    handler: function(direction) {
      console.log('scroll1: ' + direction)
      text1.classList.add('visible')
    },
    offset: '0%',
    context: document.getElementById('boeing-scroll')
  })

  let loadNextPart = new Waypoint.Inview({
    element: text1,
    enabled: false,
    handler: function(direction) {
      console.log('load next part: ' + direction)
    },
    offset: '0%',
    context: document.getElementById('boeing-scroll')
  })

  setTimeout(function() {
    loadParts1.enable()
    loadNextPart.enable()
  }, 250)

  loadScrollytelling()
  initText()
  scrollText()
}

export default Waypoints
