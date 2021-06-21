const autoplayMusic = () => {
  const snd = document.querySelector('[sound]')
  snd.components.sound.playSound()
}
window.addEventListener('xrfacescanning', autoplayMusic)

import './index.css'

// Swap app.js
// import {nextButtonComponent} from './next-button'
// AFRAME.registerComponent('next-button', nextButtonComponent())

// Hotspot app.js
import {hotspotComponent} from './hotspot'

AFRAME.registerComponent('hotspot', hotspotComponent())

// Hotspot2 app.js
import {hotspot2Component} from './hotspot2'

AFRAME.registerComponent('hotspot2', hotspot2Component())

// Hotspot3 app.js
import {hotspot3Component} from './hotspot3'

AFRAME.registerComponent('hotspot3', hotspot3Component())

// Hotspot4 app.js
// import {hotspot4Component} from './hotspot4'

// AFRAME.registerComponent('hotspot4', hotspot4Component())

// Hotspot5 app.js
import {hotspot5Component} from './hotspot5'

AFRAME.registerComponent('hotspot5', hotspot5Component())

// Enter button.js
import {nextButtonComponent} from './next-button'

AFRAME.registerComponent('next-button', nextButtonComponent())

// Next Spot.js
import {nextSpotComponent} from './next-hotspot'

AFRAME.registerComponent('next-hotspot', nextSpotComponent())

// Place Ground (Heart) app.js
// import {tapPlaceComponent} from './tap-place'
// AFRAME.registerComponent('tap-place', tapPlaceComponent)
