import React from "react"

export default ( { color=0xa0a0a0 } ) => {
  return (
    <mesh position={ [ -300, -300, -300 ] }>
      <planeBufferGeometry
        args={ [ 1000, 1000 ] }
        attach="geometry"
      />
      <meshBasicMaterial
        color={ color }
        attach="material"
        opacity={ 1 }
      />
    </mesh>
  )
}

