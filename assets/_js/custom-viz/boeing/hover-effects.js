const Hover = () => {
  let parts = document.querySelectorAll('.part')

  parts.forEach(part => {
    part.addEventListener('click', () => {
      let partName = part.getAttribute('data-part')
      let partLabel = document.getElementById(partName + '-label')
      partLabel.classList.add('fade-in-1')
      console.log('click event for hover: ' + partLabel)
    })
  })
}

export default Hover
