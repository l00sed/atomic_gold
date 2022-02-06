import React from "react"
import ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import { Canvas } from "@react-three/fiber"
import {
  EffectComposer,
  BrightnessContrast,
  DepthOfField,
  Bloom,
  Noise,
  Vignette
} from '@react-three/postprocessing'

// Components
import Cubes from "./components/Cubes"
import Lights from "./components/Lights"
import Environment from "./components/Environment"
import Fireflies from "./components/Fireflies"

import reportWebVitals from './reportWebVitals'

function App() {
  return (
    <>
      <Canvas camera={ { position: [ 0, 0, 5 ], fov: 75 } }>
        <EffectComposer>
          <BrightnessContrast
            brightness={ -0.03 }
            contrast={ 0.01 }
          />
          <DepthOfField
            focusDistance={ 0.00001 }
            focalLength={ 0.00003 }
            bokehScale={ 3 }
            height={ 480 }
          />
          <Bloom
            luminanceThreshold={ 0.2 }
            luminanceSmoothing={ 0.2 }
            height={ 900 }
          />
          <Noise
            opacity={ 0.1 }
          />
          <Vignette
            eskil={ true }
            offset={ 1 }
            darkness={ 1.2 }
          />
        </EffectComposer>
        <Cubes />
        <Lights />
        <Environment />
        <Fireflies count={ 800 } />
      </Canvas>
    </>
  )
}

const rootElement = document.getElementById( "root" )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
