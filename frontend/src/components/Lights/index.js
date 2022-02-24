import React from "react"

export default ( { ambient_intensity=1, point_intensity=1 } ) => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry
          args={ [ 0.2, 30, 30 ] }
          attach="geometry"
        />
        <meshBasicMaterial
          color={ 0xfff1ef }
          attach="material"
        />
      </mesh>
    )
  }

  return (
    <group>
      <FakeSphere />
      <ambientLight
        intensity={ ambient_intensity }
      />
      <pointLight
        intensity={ point_intensity }
        position={ [0, 0, 0] }
        decay={ 0.5 }
      />
    </group>
  )
}
