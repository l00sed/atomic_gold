import React, { useRef } from "react"
import { map, random } from "lodash"
import { useFrame } from "@react-three/fiber"

import Line from "./Line"

export default ( {
  numberNodes=100,
  cubeActive=0xffffff,
  cubeDefault=0xffffff,
  cubeHovered=0xff0000
} ) => {
  const group = useRef()

  const orbitSpeed = 0.005 // speed of rotation of nodes around point light
  useFrame( () => {
    group.current.rotation.y += orbitSpeed
  } )

  const nodesLines = map( new Array( numberNodes ), ( el, i ) => {
    return <Line
      key={ i }
      cubeActive={ cubeActive }
      cubeDefault={ cubeDefault }
      cubeHovered={ cubeHovered }
    />
  } )

  return <group ref={ group }>{ nodesLines }</group>
}

