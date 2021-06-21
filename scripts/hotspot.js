// Copyright (c) 2021 8th Wall, Inc.

const hotspotComponent = () => ({
  init() {
    const modelList = ['humanModel', 'grassModel', 'dirtyModel']
    const model = document.getElementById('model')
    const hotspotButton = document.getElementById('hotspot')
    hotspotButton.style.display = 'block'

    let idx = 1  // Start with the 2nd model as 1st is already in the scene on page load
    const nextModel = () => {
      // Remove gltf-component first due to AFrame: https://github.com/aframevr/aframe/issues/4341
      model.removeAttribute('gltf-model')
      // Switch to next model in the list
      model.setAttribute('gltf-model', `#${modelList[idx]}`)

      idx = (idx + 1) % modelList.length
    }
    hotspotButton.onclick = nextModel  // Switch to the next model when the button is pressed.
  },
})
export {hotspotComponent}
