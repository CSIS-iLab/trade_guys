import 'waypoints/lib/noframework.waypoints.min'
import 'waypoints/src/shortcuts/inview'
import 'waypoints/src/shortcuts/sticky'

const Waypoints = () => {
  const planeWrapper = document.querySelector('.plane')

  let fadeOutPlane = new Waypoint({
    element: planeWrapper,
    handler: function(direction) {
      if (direction == 'down') {
        planeWrapper.classList.remove('fade-in-1')
        planeWrapper.classList.add('mid-fade-out-3')
      } else if (direction == 'up') {
        planeWrapper.classList.remove('mid-fade-out-3')
        planeWrapper.classList.add('fade-in-1')
      }
    },
    offset: '90%'
  })

  const paragraphs = Array.from(document.querySelectorAll('.scroll-text'))
  paragraphs.forEach(paragraph => {
    const parts = paragraph.querySelectorAll('.part')
    new Waypoint({
      element: paragraph,
      handler: function(direction) {
        Array.from(parts).forEach(part => {
          let partName = part.getAttribute('data-part')
          let partLine = document.getElementById(partName + '-line')
          let partLabel = document.getElementById(partName + '-label')
          let partCircle = document.getElementById(partName + '-circle')
          if (direction == 'down') {
            partLine.classList.remove('hidden')
            partCircle.classList.remove('hidden')
            partLabel.classList.remove('hidden')
            partLine.classList.add('fade-in-1')
            partCircle.classList.add('fade-in-1')
            partLabel.classList.add('fade-in-1')
            return
          } else if (direction == 'up') {
            partLine.classList.add('hidden')
            partCircle.classList.add('hidden')
            partLabel.classList.add('hidden')
            partLine.classList.remove('fade-in-1')
            partCircle.classList.remove('fade-in-1')
            partLabel.classList.remove('fade-in-1')
            return
          }
        })
      },
      offset: '70%'
    })
  })

  fadeOutPlane()
}

export default Waypoints
