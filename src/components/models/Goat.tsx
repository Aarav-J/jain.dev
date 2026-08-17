import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'

export default function Goat() {
    const group = useRef<Group>(null)
    const { scene, animations } = useGLTF('/goat/scene.gltf')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        actions['rigAction']?.reset().fadeIn(0.3).play()
    }, [actions])

    return (
        <group ref={group}>
            {/* rotation-y offset corrects the model's forward axis to match HeroScene's orbit direction.
                Adjust if the goat faces sideways — try 0, Math.PI/2, or -Math.PI/2. */}
            <primitive object={scene} rotation-y={Math.PI} />
        </group>
    )
}

useGLTF.preload('/goat/scene.gltf')
