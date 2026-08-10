import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Drone from './models/Drone'
import RobotDog from './models/RobotDog'

const DRONE_RX = 1.6
const DRONE_RZ = 0.55
const DRONE_Y  = 1.35

const DOG_RX = 0.85
const DOG_RZ = 0.35
const DOG_Y  = -0.52
const DOG_WALK_SPEED = 0.42

function Scene() {
  const droneRef = useRef<THREE.Group>(null)
  const dogRef   = useRef<THREE.Group>(null)
  const { mouse } = useThree()

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime

    if (droneRef.current) {
      droneRef.current.position.x = DRONE_RX * Math.sin(t * 0.55)
      droneRef.current.position.z = DRONE_RZ * Math.sin(t * 1.1)
      droneRef.current.position.y = DRONE_Y + Math.sin(t * 2.1) * 0.16
      droneRef.current.rotation.z = -Math.cos(t * 0.55) * 0.55 * 0.09
      droneRef.current.rotation.x =  Math.cos(t * 1.1)  * 1.1  * 0.06
      droneRef.current.rotation.y += delta * 0.32 + mouse.x * 0.003
    }

    if (dogRef.current) {
      const a = t * DOG_WALK_SPEED
      dogRef.current.position.x = Math.cos(a) * DOG_RX
      dogRef.current.position.z = Math.sin(a) * DOG_RZ
      dogRef.current.position.y = DOG_Y
      const tx = -Math.sin(a) * DOG_RX
      const tz =  Math.cos(a) * DOG_RZ
      dogRef.current.rotation.y = Math.atan2(tx, tz) - Math.PI / 2
    }
  })

  return (
    <>
      {/* Scene background = page bg — no mesh needed, lights won't affect it */}
      <color attach="background" args={['#0F1820']} />

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
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0.6, 5.4], fov: 52 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.18} />

        {/* Pink key — above and in front, hits both models */}
        <pointLight position={[0,  4,  4]} color="#C517F1" intensity={8} />

        {/* Purple fill — from the side */}
        <pointLight position={[-4, 1, 2]} color="#9417DE" intensity={5} />
        <pointLight position={[ 4, 1, 2]} color="#9417DE" intensity={4} />

        {/* Soft rim from behind — gives depth */}
        <pointLight position={[0, 2, -4]} color="#6010A0" intensity={3} />

        {/* Neutral ground bounce */}
        <pointLight position={[0, -4, 1]} color="#ffffff" intensity={0.6} />

        <Scene />
      </Canvas>
    </div>
  )
}
