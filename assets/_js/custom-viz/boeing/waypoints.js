import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const Waypoints = () => {
  let wrapper = document.getElementById('boeing-scroll')
  let plane_wrapper = document.getElementById('plane-wrapper')
  let plane_parts = document.getElementsByClassName('part-svg')

  let text1 = document.getElementById('s1')
  let forward_fuselage = document.getElementById('forward-fuselage')
  let forward_landing_gear = document.getElementById('landing-gear')
  let label1 = document.getElementById('forward_fuselage_label')
  let label2 = document.getElementById('landing_gear_label')

  // let text2 = document.getElementById('s2')
  // let forward_cargo_doors = document.getElementById('Cargo_access_doors')
  // let label3 = document.getElementById('Cargo_access_doors_label')
  //
  // let text3 = document.getElementById('s3')
  // let midForwardFuselage = document.getElementById('Mid-forward_fuselage')
  // let centerWingBox = document.getElementById('Center_wing_box')
  // let wingBodyFairings = document.getElementById('Wing_body_fairing_landing_gear_doors')
  // let label4 = document.getElementById('Mid-forward_fuselage_label')
  // let label5 = document.getElementById('Center_wing_box_label')
  // let label6 = document.getElementById('Center_fuselage_label')
  // let label7 = document.getElementById('Wing_body_fairing_landing_gear_doors_label')

  // let text4 = document.getElementById('s4')
  // let wings = document.getElementById('wings')
  //fixed and moveable leading front edge//
  // tailing edge
  //fixed tailing edge

  // let text5 = document.getElementById('s5')
  //engines//nacelles

  // let text6 = document.getElementById('s6')
  // landing gear//wheels

  // let text7 = document.getElementById('s7')

  let loadScrollytelling = new Waypoint.Inview({
    element: wrapper,
    handler: function(direction) {
      console.log('inside loadScrollytelling: ' + direction)
      if (direction == 'down') {
        plane_parts.classList.add('fade-in')
      } else if (direction == 'up') {
        plane_parts.classList.add('fade-out')
      }
    },
    offset: '50%'
  })

  let fixScroll = new Waypoint({
    element: plane_wrapper,
    handler: function(direction) {
      console.log('plane is at top of window: ' + direction)
      if (direction == 'down') {
        plane_wrapper.classList.add('fixed')
        text1.classList.add('visible')
        label1.classList.add('visible')
        label2.classList.add('visible')
      } else if (direction == 'up') {
        text1.classList.add('fade-out')
      }
    },
    offset: '0%'
  })

  let loadParts1 = new Waypoint({
    element: text1,
    enabled: false,
    handler: function(direction) {
      console.log('text1 is on top of window: ' + direction)
      text1.classList.add('visible')
      label1.classList.add('visible')
      label2.classList.add('visible')
      forward_fuselage.classList.add('full-opacity')
      forward_landing_gear.classList.add('full-opacity')
    },
    offset: '0%'
  })

  let loadNextPart = new Waypoint({
    element: text1,
    enabled: false,
    handler: function(direction) {
      console.log('load next part: ' + direction)
    },
    offset: '0%'
  })

  setTimeout(function() {
    loadParts1.enable()
    loadNextPart.enable()
  }, 250)

  loadScrollytelling()
  fixScroll()
}

export default Waypoints
