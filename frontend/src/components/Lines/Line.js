import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback
} from "react"
import { random } from "lodash"
import { useFrame } from "@react-three/fiber"

export default ( {
  cubeActive=0xff0000,
  cubeDefault=0xff0000,
  cubeHovered=0xff0000
} ) => {
  const mesh = useRef()
  const time = useRef( 0 )

  const [ isHovered, setIsHovered ] = useState( false )
  const [ isActive, setIsActive ] = useState( false )

  const isActiveRef = useRef( isActive )

  // position
  const position = useMemo( () => {
    const density = 5 // closer to 0, most dense
    return [ random( -density, density, true ), random( -density, density, true ), random( -density, density, true ) ]
  }, [] )

  // random time mod factor used for spin speed on floating elements
  const timeMod = useMemo( () => random( 0.1, 25, true ), [] )

  // color
  const color = isHovered ? cubeHovered : ( isActive ? cubeActive : cubeDefault )

  //useEffect of the activeState
  useEffect( () => {
    isActiveRef.current = isActive
  }, [isActive] )

  // raf loop
  useFrame( () => {
    time.current+=0.01
    mesh.current.rotation.y += 0.01 * timeMod
    mesh.current.position.x = position[1] + Math.cos( time.current ) * 0.1
    mesh.current.position.y = position[1] + Math.cos( time.current ) * 0.1
  } )

  // Events
  const onHover = useCallback(
    ( e, value ) => {
      e.stopPropagation()
      setIsHovered( value )
    },
    [ setIsHovered ]
  )

  const onClick = useCallback(
    e => {
      e.stopPropagation()
      setIsActive( v => !v )
    },
    [ setIsActive ]
  )

  return (
    <mesh
      ref={ mesh }
      position={ position }
      onClick={ e => onClick( e ) }
      onPointerOver={ e => onHover( e, true ) }
      onPointerOut={ e => onHover( e, false ) }
    >
      <boxBufferGeometry
        attach="geometry"
        args={ [ 0.01, random( 31, 100 ), random( 0.05, 0.1 ) ] }
      />
      <meshBasicMaterial
        attach="material"
        color={ color }
        roughness={ 0.05 }
        metalness={ 0.1 }
      />
    </mesh>
  )
}
