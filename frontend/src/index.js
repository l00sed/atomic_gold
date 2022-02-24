// React
import React from "react"
import ReactDOM from "react-dom"
// Styles
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
// Base canvas from Three fiber
import { Canvas } from "@react-three/fiber"
// Flat, elevation camera
import { OrthographicCamera } from '@react-three/drei'
// Post Processing
import {
  EffectComposer,
  BrightnessContrast,
  DepthOfField,
  Bloom,
  Noise,
  Vignette
} from '@react-three/postprocessing'
// Components
//import Cubes from "./components/Cubes"
//import Lights from "./components/Lights"
import Lines from "./components/Lines"
import Environment from "./components/Environment"
//import Fireflies from "./components/Fireflies"
// Testing
import reportWebVitals from './reportWebVitals'

function App() {
  return (
    <>
      <Canvas id="canvas">
        <OrthographicCamera
          makeDefault
          zoom={35}
        />
        <EffectComposer>
          <BrightnessContrast
            brightness={ -0.05 }
            contrast={ 0.01 }
          />
          <DepthOfField
            focusDistance={ 0.00001 }
            focalLength={ 0.00003 }
            /*bokehScale={ 3 }*/
            height={ 480 }
          />
          <Bloom
            luminanceThreshold={ 1.2 }
            /*luminanceThreshold={ 0.2 }*/
            luminanceSmoothing={ 0.2 }
            height={ 2 }
            /*height={ 900 }*/
          />
          <Noise
            opacity={ 0.01 }
          />
          <Vignette
            eskil={ true }
            offset={ 0.25 }
            darkness={ .75 }
          />
        </EffectComposer>
        <Lines
          numberNodes={ 88 }
          cubeActive={ 0x000000 }
          cubeDefault={ 0xf85c37 }
          cubeHovered={ 0xff0000 }
        />
        <Environment
          color={ 0x000000 }
        />
        {/*
        <Cubes
          numberNodes={ 500 }
          cubeActive={ 0x000000 }
          cubeDefault={ 0xf85c37 }
          cubeHovered={ 0xff0000 }
        />
        <Lights
          ambient_intensity={ 1 }
          point_intensity={ 1.1 }
        />
        <Fireflies
          count={ 500 }
        />
        */}
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
