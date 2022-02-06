import React, { useRef } from "react"
import { map, random } from "lodash"
import { useFrame } from "@react-three/fiber"

import Cube from "./Cube"

export default () => {
  const group = useRef()

  const orbitSpeed = random( 0.001, 0.005 ) // speed of rotation of nodes around point light
  useFrame( () => {
    group.current.rotation.y += orbitSpeed
  } )

  const numberNodes = 200
  const nodesCubes = map( new Array( numberNodes ), ( el, i ) => {
    return <Cube key={ i } />
  } )

  return <group ref={ group }>{ nodesCubes }</group>
}

