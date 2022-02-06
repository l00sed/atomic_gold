import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback
} from "react"
import { random } from "lodash"
import { useFrame } from "@react-three/fiber"

export default () => {
  const mesh = useRef()
  const time = useRef( 0 )

  const [ isHovered, setIsHovered ] = useState( false )
  const [ isActive, setIsActive ] = useState( false )

  const isActiveRef = useRef( isActive )

  // position
  const position = useMemo( () => {
    const density = 3 // closer to 0, most dense
    return [ random( -density, density, true ), random( -density, density, true ), random( -density, density, true ) ]
  }, [] )

  // random time mod factor used for spin speed on floating elements
  const timeMod = useMemo( () => random( 0.1, 25, true ), [] )

  // color
  const color = isHovered ? 0xf87c35 : ( isActive ? 0xff0000 : 0xf95b3c )

  //useEffect of the activeState
  useEffect( () => {
    isActiveRef.current = isActive
  }, [isActive] )

  // raf loop
  useFrame( () => {
    mesh.current.rotation.y += 0.01 * timeMod
    if ( isActiveRef.current ) {
      time.current += 0.03
      mesh.current.position.y = position[1] + Math.sin( time.current ) * 0.4
    }
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
        args={ [ random( 0.001, 0.05 ), random( 0.9, 99 ), random( 0.01, 0.1 ) ] }
      />
      <meshStandardMaterial
        attach="material"
        color={ color }
        roughness={ 0.05 }
        metalness={ 0.1 }
      />
    </mesh>
  )
}
