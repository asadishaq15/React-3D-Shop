import React from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber'
import { Decal,useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

const Shirt = () => {
    const snap = useSnapshot();
    const {nodes, materails } = useGLTF ('/shirt_baked.glb')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)
  return (
    <group>
     <mesh
     castShadow
     geometry={nodes.T_Shirt_male.geometry}
     material= {materails.Lambert1}
     material-roughness={1}
     dispose={null}
     >

     </mesh>
    </group>
  )
}

export default Shirt
