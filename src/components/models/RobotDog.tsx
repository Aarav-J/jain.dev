import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const TORSO_COLOR = '#1C2235'   // dark navy metallic — blends with bg
const SPINE_COLOR = '#9417DE'   // devPurple
const LEG_COLOR   = '#151C2E'   // slightly darker navy
const FOOT_COLOR  = '#0F1420'
const HEAD_COLOR  = '#161D30'
const KNEE_COLOR  = '#9417DE'   // devPurple accent
const EYE_COLOR   = '#C517F1'   // devPink emissive

const LEG_CONFIG = [
  { pos: [-0.36, -0.10,  0.17] as [number,number,number], phase: 0,        splay: -1 },
  { pos: [ 0.36, -0.10,  0.17] as [number,number,number], phase: Math.PI,  splay:  1 },
  { pos: [-0.36, -0.10, -0.17] as [number,number,number], phase: Math.PI,  splay: -1 },
  { pos: [ 0.36, -0.10, -0.17] as [number,number,number], phase: 0,        splay:  1 },
]

interface LegProps {
  position: [number, number, number]
  phase: number
  splay: number
}

function AnimatedLeg({ position, phase, splay }: LegProps) {
  const hipRef  = useRef<THREE.Group>(null)
  const kneeRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!hipRef.current || !kneeRef.current) return
    const t = clock.elapsedTime * 3.2 + phase
    hipRef.current.rotation.z  = Math.sin(t) * 0.40
    const lift = Math.max(0, Math.sin(t + Math.PI * 0.25))
    kneeRef.current.rotation.z = lift * -0.60
  })

  return (
    <group position={position}>
      <group ref={hipRef}>
        {/* Hip block */}
        <mesh position={[splay * 0.01, -0.04, 0]}>
          <boxGeometry args={[0.10, 0.08, 0.10]} />
          <meshStandardMaterial color={TORSO_COLOR} metalness={0.65} roughness={0.35} />
        </mesh>

        {/* Upper leg */}
        <mesh position={[splay * 0.02, -0.17, 0]}>
          <boxGeometry args={[0.085, 0.26, 0.085]} />
          <meshStandardMaterial color={LEG_COLOR} metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Knee — devPurple */}
        <mesh position={[splay * 0.03, -0.30, 0]}>
          <sphereGeometry args={[0.055, 8, 6]} />
          <meshStandardMaterial color={KNEE_COLOR} metalness={0.7} roughness={0.3} emissive={KNEE_COLOR} emissiveIntensity={0.3} />
        </mesh>

        <group ref={kneeRef} position={[splay * 0.03, -0.30, 0]}>
          {/* Lower leg */}
          <mesh position={[0, -0.12, 0]}>
            <boxGeometry args={[0.065, 0.24, 0.065]} />
            <meshStandardMaterial color={LEG_COLOR} metalness={0.55} roughness={0.45} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -0.24, 0]}>
            <sphereGeometry args={[0.055, 8, 6]} />
            <meshStandardMaterial color={FOOT_COLOR} metalness={0.3} roughness={0.8} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

export default function RobotDog() {
  const bodyRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!bodyRef.current) return
    bodyRef.current.position.y = 0.40 + Math.abs(Math.sin(clock.elapsedTime * 3.2)) * 0.022
  })

  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      <group ref={bodyRef} position={[0, 0.40, 0]}>
        {/* Torso — dark navy */}
        <mesh>
          <boxGeometry args={[0.90, 0.20, 0.42]} />
          <meshStandardMaterial color={TORSO_COLOR} metalness={0.65} roughness={0.35} />
        </mesh>

        {/* Spine ridge — devPurple */}
        <mesh position={[0, 0.12, 0]}>
          <boxGeometry args={[0.70, 0.045, 0.065]} />
          <meshStandardMaterial color={SPINE_COLOR} metalness={0.7} roughness={0.3} emissive={SPINE_COLOR} emissiveIntensity={0.4} />
        </mesh>

        {/* Sensor bar */}
        <mesh position={[0.12, 0.135, 0]}>
          <boxGeometry args={[0.25, 0.028, 0.32]} />
          <meshStandardMaterial color='#0F1525' metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Head */}
        <mesh position={[0.55, 0.02, 0]}>
          <boxGeometry args={[0.21, 0.18, 0.23]} />
          <meshStandardMaterial color={HEAD_COLOR} metalness={0.65} roughness={0.35} />
        </mesh>

        {/* Snout */}
        <mesh position={[0.67, -0.02, 0]}>
          <boxGeometry args={[0.065, 0.10, 0.14]} />
          <meshStandardMaterial color='#0C1220' metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Eyes — devPink emissive */}
        {([-0.065, 0.065] as number[]).map((z) => (
          <mesh key={z} position={[0.66, 0.05, z]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.026, 0.026, 0.03, 8]} />
            <meshStandardMaterial color={EYE_COLOR} emissive={EYE_COLOR} emissiveIntensity={4} />
          </mesh>
        ))}

        {/* Tail */}
        <mesh position={[-0.52, 0.05, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.15, 0.07, 0.07]} />
          <meshStandardMaterial color={TORSO_COLOR} metalness={0.6} roughness={0.4} />
        </mesh>

        {LEG_CONFIG.map((cfg, i) => (
          <AnimatedLeg key={i} position={cfg.pos} phase={cfg.phase} splay={cfg.splay} />
        ))}
      </group>
    </group>
  )
}
