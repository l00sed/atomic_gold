import React, { useRef } from "react"
import { map, random } from "lodash"
import { useFrame } from "@react-three/fiber"

import Cube from "./Cube"

export default ( {
  numberNodes=100,
  cubeActive=0x000000,
  cubeDefault=0xff99cc,
  cubeHovered=0xff0000
} ) => {
  const group = useRef()

  const orbitSpeed = random( 0.001, 0.005 ) // speed of rotation of nodes around point light
  useFrame( () => {
    group.current.rotation.y += orbitSpeed
  } )

  const nodesCubes = map( new Array( numberNodes ), ( el, i ) => {
    return <Cube
      key={ i }
      cubeActive={ cubeActive }
      cubeDefault={ cubeDefault }
      cubeHovered={ cubeHovered }
    />
  } )

  return <group ref={ group }>{ nodesCubes }</group>
}

