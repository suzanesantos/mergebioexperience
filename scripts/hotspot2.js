// Copyright (c) 2021 8th Wall, Inc.

const hotspot2Component = () => ({
  init() {
    const modelList = ['humanModel', 'grassModel', 'dirtyhandModel']
    const model = document.getElementById('model')
    const hotspot2Button = document.getElementById('hotspot2')
    hotspot2Button.style.display = 'block'
    const newElement = document.createElement('a-entity')
    let idx = 1  // Start with the 2nd model as 1st is already in the scene on page load
    const nextModel = () => {
      // Remove gltf-component first due to AFrame: https://github.com/aframevr/aframe/issues/4341
      model.removeAttribute('gltf-model')
      // Switch to next model in the list
      model.setAttribute('gltf-model', `#${modelList[idx]}`)

      idx = (idx + 1) % modelList.length
      newElement.setAttribute('gltf-model', '#greedModel')
      this.el.sceneEl.appendChild(newElement)
      newElement.addEventListener('model-loaded', () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        newElement.setAttribute('visible', 'true')
        newElement.setAttribute('animation', {
          property: 'scale',
          to: '7 7 7',
          easing: 'easeOutElastic',
          dur: 800,
        })
      })
    }
    hotspot2Button.onclick = nextModel  // Switch to the next model when the button is pressed.
  },

})
export {hotspot2Component}
