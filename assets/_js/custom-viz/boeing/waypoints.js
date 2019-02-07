const Waypoint = require('waypoints/lib/noframework.waypoints.js')

const WaypointsJS = () => {
  console.log('testing waypoint')
  let wrapper = document.getElementById('scroll-wrapper')
  let text = document.getElementByClass('text-scroll')

  //Everything commented out is pseudo-code.
  let initPlane = new Waypoint({
    element: wrapper,
    handler: function(direction) {
      //Ignore below; just test code
      if (direction == 'down') {
        console.log('DOWN: going' + direction)
      } else if (direction == 'up') {
        console.log('UP: going' + direction)
      }
      //This handler should enable the plane element to stick at the top of the page (on mobile), and occupy the full screen (on desktop)
      //After the scrolling visualization ends, the plane should fade out.
    }
  })

  let initText = new Waypoint({
    element: text,
    //Because specific functions are triggered with specific textboxes, I think it makes the most sense to have separate waypoint handlers for each text box.
    //In other words: with the first textbox of the visualization (#s1) reaches its waypoint, this triggers the forward fuselage and forward landing gear to increase to full opacity, while the rest of the plane remains at a lower level of transparency.
    //TLDR: When user arrives at each waypoint ---> Change in SVG is triggered
    //Note: When there are multiple pieces mentioned in the paragraph, those pieces are emphasized in succession, with delayed transitions to mimic how the reader would view the information
    //Total Text Boxes: 9 (So, the number of waypoint functions for the respective paragraphs should also be 9!)
    enter: function(direction) {
      //When textbox enters viewpoint
    },
    entered: function(direction) {
      //When inside viewpoint: trigger animations
    },
    exit: function(direction) {
      //Pieces fade to less opacity
    },
    exited: function(direction) {
      //Full opacity plane
    }
  })

  //Waypoint for Map (?)
  //Triggers full-screen map to appear on screen at the end of the scrollytelling visualization
  //The waypoint could also trigger the CSS animations, which will likely be animated lines moving towards Everett, WA (where the 787s are manufactured)
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

  //Bonus features: hovering on the specific piece in the text triggers an action on the SVG.
}

export default WaypointsJS
