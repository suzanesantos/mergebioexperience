// Copyright (c) 2021 8th Wall, Inc.

const nextButtonComponent = () => ({
  init() {
    const artList = ['object1', 'object2', 'object3']
    const art = document.getElementById('art')

    const nextButton = document.getElementById('nextbutton')
    nextButton.style.display = 'block'

    let idx = 1  // Start with the 2nd model as 1st is already in the scene on page load
    const nextModel = () => {
      // Remove gltf-component first due to AFrame: https://github.com/aframevr/aframe/issues/4341
      art.removeAttribute('gltf-model')
      // Switch to next model in the list
      art.setAttribute('gltf-model', `#${artList[idx]}`)

      idx = (idx + 1) % artList.length
    }

    nextButton.onclick = nextModel  // Switch to the next model when the button is pressed.
  },
})
export {nextButtonComponent}
