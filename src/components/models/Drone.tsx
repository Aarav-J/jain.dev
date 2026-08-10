import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BODY_COLOR  = '#3B0F6E'
const ARM_COLOR   = '#1E0A35'
const MOTOR_COLOR = '#C517F1'   // devPink
const PROP_COLOR  = '#C517F1'   // devPink
const RING_COLOR  = '#9417DE'   // devPurple

const motorPositions: [number, number, number][] = [
  [ 0.92, 0.02,  0.92],
  [-0.92, 0.02, -0.92],
  [-0.92, 0.02,  0.92],
  [ 0.92, 0.02, -0.92],
]

const legOffsets: [number, number, number][] = [
  [ 0.10, -0.10,  0.10],
  [-0.10, -0.10, -0.10],
  [-0.10, -0.10,  0.10],
  [ 0.10, -0.10, -0.10],
]

export default function Drone() {
  const prop0 = useRef<THREE.Group>(null)
  const prop1 = useRef<THREE.Group>(null)
  const prop2 = useRef<THREE.Group>(null)
  const prop3 = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    const speed = delta * 16
    if (prop0.current) prop0.current.rotation.y += speed
    if (prop1.current) prop1.current.rotation.y -= speed
    if (prop2.current) prop2.current.rotation.y -= speed
    if (prop3.current) prop3.current.rotation.y += speed
  })

  return (
    <group>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.32, 0.32, 0.12, 8]} />
        <meshStandardMaterial color={BODY_COLOR} metalness={0.55} roughness={0.35} />
      </mesh>

      {/* Top dome */}
      <mesh position={[0, 0.10, 0]}>
        <sphereGeometry args={[0.20, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color='#2D0A55' metalness={0.5} roughness={0.45} />
      </mesh>

      {/* Camera ball underneath */}
      <mesh position={[0, -0.14, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color='#1A0830' metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Arms */}
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[2.8, 0.06, 0.06]} />
        <meshStandardMaterial color={ARM_COLOR} metalness={0.65} roughness={0.4} />
      </mesh>
      <mesh rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[2.8, 0.06, 0.06]} />
        <meshStandardMaterial color={ARM_COLOR} metalness={0.65} roughness={0.4} />
      </mesh>

      {motorPositions.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          {/* Motor housing — devPink */}
          <mesh>
            <cylinderGeometry args={[0.11, 0.11, 0.10, 8]} />
            <meshStandardMaterial color={MOTOR_COLOR} metalness={0.6} roughness={0.25} emissive={MOTOR_COLOR} emissiveIntensity={0.15} />
          </mesh>
          {/* Motor bottom flare */}
          <mesh position={[0, -0.06, 0]}>
            <cylinderGeometry args={[0.13, 0.09, 0.04, 8]} />
            <meshStandardMaterial color={ARM_COLOR} metalness={0.7} roughness={0.3} />
          </mesh>

          {/* Spinning props — devPink semi-transparent */}
          <group position={[0, 0.09, 0]} ref={[prop0, prop1, prop2, prop3][i]}>
            <mesh>
              <boxGeometry args={[0.82, 0.009, 0.08]} />
              <meshStandardMaterial color={PROP_COLOR} transparent opacity={0.75} side={THREE.DoubleSide} emissive={PROP_COLOR} emissiveIntensity={0.2} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[0.82, 0.009, 0.08]} />
              <meshStandardMaterial color={PROP_COLOR} transparent opacity={0.75} side={THREE.DoubleSide} emissive={PROP_COLOR} emissiveIntensity={0.2} />
            </mesh>
          </group>

          {/* Landing leg */}
          <mesh position={legOffsets[i]} rotation={[legOffsets[i][2] * 0.5, 0, legOffsets[i][0] * 0.5]}>
            <boxGeometry args={[0.045, 0.28, 0.045]} />
            <meshStandardMaterial color={ARM_COLOR} metalness={0.5} roughness={0.6} />
          </mesh>
        </group>
      ))}

      {/* Underside glow ring — devPurple */}
      <mesh position={[0, -0.07, 0]}>
        <torusGeometry args={[0.20, 0.016, 6, 16]} />
        <meshStandardMaterial color={RING_COLOR} emissive={RING_COLOR} emissiveIntensity={2} />
      </mesh>

      {/* Bottom LED — devPink */}
      <mesh position={[0, -0.09, 0]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial color='#C517F1' emissive='#C517F1' emissiveIntensity={4} />
      </mesh>
    </group>
  )
}
