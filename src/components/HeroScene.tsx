import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { ThreeEvent } from '@react-three/fiber'
import * as THREE from 'three'
import Drone from './models/Drone'
import RobotDog from './models/RobotDog'

const DRONE_RX       = 1.6
const DRONE_RZ       = 0.55
const DRONE_Y        = 1.35
const DOG_RX         = 0.85
const DOG_RZ         = 0.35
const DOG_Y          = -0.52
const DOG_WALK_SPEED = 0.42
const NAV_DURATION   = 5
const DOG_NAV_SPEED  = 0.018

interface NavTarget { x: number; z: number }

function Scene() {
  const droneRef     = useRef<THREE.Group>(null)
  const dogRef       = useRef<THREE.Group>(null)
  const { mouse }    = useThree()
  const mode         = useRef<'loop' | 'navigate'>('loop')
  const navTarget    = useRef<NavTarget | null>(null)
  const navStartTime = useRef<number>(-1)

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // e.point is on the vertical plane at z=0 facing camera
    // x maps directly to world x, y to world y (we use for z estimate)
    navTarget.current    = { x: e.point.x, z: -e.point.y * 0.2 }
    mode.current         = 'navigate'
    navStartTime.current = -1
  }

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime

    if (mode.current === 'navigate' && navTarget.current) {
      if (navStartTime.current === -1) navStartTime.current = t

      if (t - navStartTime.current > NAV_DURATION) {
        mode.current         = 'loop'
        navTarget.current    = null
        navStartTime.current = -1
      } else {
        const { x: tx, z: tz } = navTarget.current

        if (droneRef.current) {
          const d = droneRef.current
          d.position.x = THREE.MathUtils.lerp(d.position.x, tx,            0.04)
          d.position.z = THREE.MathUtils.lerp(d.position.z, tz,            0.04)
          d.position.y = THREE.MathUtils.lerp(d.position.y, DRONE_Y + 0.4, 0.03)
          d.rotation.z = THREE.MathUtils.lerp(d.rotation.z, -(tx - d.position.x) * 0.5, 0.1)
          d.rotation.x = THREE.MathUtils.lerp(d.rotation.x,  (tz - d.position.z) * 0.3, 0.1)
          d.rotation.y += delta * 0.55
        }

        if (dogRef.current) {
          const d    = dogRef.current
          const dx   = tx - d.position.x
          const dz   = tz - d.position.z
          const dist = Math.sqrt(dx * dx + dz * dz)
          if (dist > 0.06) {
            d.position.x += (dx / dist) * DOG_NAV_SPEED
            d.position.z += (dz / dist) * DOG_NAV_SPEED
            d.rotation.y  = Math.atan2(dx, dz) - Math.PI / 2
          }
          d.position.y = DOG_Y
        }
        return
      }
    }

    // Loop mode
    if (droneRef.current) {
      const d = droneRef.current
      d.position.x = DRONE_RX * Math.sin(t * 0.55)
      d.position.z = DRONE_RZ * Math.sin(t * 1.1)
      d.position.y = DRONE_Y  + Math.sin(t * 2.1) * 0.16
      d.rotation.z = -Math.cos(t * 0.55) * 0.55 * 0.09
      d.rotation.x =  Math.cos(t * 1.1)  * 1.1  * 0.06
      d.rotation.y += delta * 0.32 + mouse.x * 0.003
    }

    if (dogRef.current) {
      const d = dogRef.current
      const a = t * DOG_WALK_SPEED
      d.position.x = Math.cos(a) * DOG_RX
      d.position.z = Math.sin(a) * DOG_RZ
      d.position.y = DOG_Y
      d.rotation.y = Math.atan2(-Math.sin(a) * DOG_RX, Math.cos(a) * DOG_RZ) - Math.PI / 2
    }
  })

  return (
    <>
      <color attach="background" args={['#0F1820']} />

      {/* Vertical plane facing camera — catches clicks across the full canvas */}
      <mesh position={[0, 0.3, -0.5]} onPointerDown={handleClick}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <group ref={droneRef}>
        <Drone />
      </group>

      <group ref={dogRef} scale={1.85}>
        <RobotDog />
      </group>
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-full" style={{ cursor: 'crosshair' }}>
      <Canvas
        camera={{ position: [0, 0.6, 5.4], fov: 52 }}
        gl={{ alpha: true, antialias: true }}
        dpr={1}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[0,  4,  4]} color="#C517F1" intensity={10} />
        <pointLight position={[-3, 1,  2]} color="#9417DE" intensity={6}  />
        <pointLight position={[0, -3,  1]} color="#ffffff" intensity={0.8} />

        <Scene />
      </Canvas>
    </div>
  )
}
