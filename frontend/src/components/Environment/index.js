import React from "react"
import { BackSide } from "three"

export default ( { color=0xa0a0a0 } ) => {
  return (
    <mesh>
      <sphereBufferGeometry
        args={ [ 5, 10, 10 ] }
        attach="geometry"
      />
      <meshStandardMaterial
        color={ color }
        attach="material"
        side={ BackSide }
        metalness={ 0.7 }
        roughness={ 0.5 }
      />
    </mesh>
  )
}

