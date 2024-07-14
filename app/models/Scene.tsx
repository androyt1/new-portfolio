import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh;
        Object_5: THREE.Mesh;
        Object_6: THREE.Mesh;
        Object_7: THREE.Mesh;
        Object_8: THREE.Mesh;
        Object_9: THREE.Mesh;
        Object_11: THREE.Mesh;
        Object_13: THREE.Mesh;
        Object_15: THREE.Mesh;
        Object_17: THREE.Mesh;
        Object_19: THREE.Mesh;
        Object_21: THREE.Mesh;
        Object_23: THREE.Mesh;
        Object_25: THREE.Mesh;
        Object_27: THREE.Mesh;
        Object_29: THREE.Mesh;
        Object_31: THREE.Mesh;
        Object_32: THREE.Mesh;
        Object_33: THREE.Mesh;
        Object_34: THREE.Mesh;
        Object_35: THREE.Mesh;
        Object_36: THREE.Mesh;
        Object_38: THREE.Mesh;
        Object_39: THREE.Mesh;
        Object_40: THREE.Mesh;
        Object_42: THREE.Mesh;
        Object_44: THREE.Mesh;
    };
    materials: {
        ["CHAIR-0"]: THREE.MeshStandardMaterial;
        ["WHEEL-0"]: THREE.MeshStandardMaterial;
        ["WHEEL-CAP-0"]: THREE.MeshStandardMaterial;
        ["WHEEL-NUT-0"]: THREE.MeshStandardMaterial;
        ["CHAIR-LEGS-0"]: THREE.MeshStandardMaterial;
        ["CHAIR-COVER-0"]: THREE.MeshStandardMaterial;
        ["COMPUTER-0"]: THREE.MeshStandardMaterial;
        ["1COMPUTER-0"]: THREE.MeshStandardMaterial;
        ["DESK-0"]: THREE.MeshStandardMaterial;
        ["MAT-0"]: THREE.MeshStandardMaterial;
        ["SCREEN-0"]: THREE.MeshStandardMaterial;
        ["2PIC-0"]: THREE.MeshStandardMaterial;
        ["1PIC-0"]: THREE.MeshStandardMaterial;
        ["3PIC-0"]: THREE.MeshStandardMaterial;
        ["BASS-0"]: THREE.MeshStandardMaterial;
        ["SPEAKER-0"]: THREE.MeshStandardMaterial;
        ["LAPTOP-0"]: THREE.MeshStandardMaterial;
        ["1KB-BASE-0"]: THREE.MeshStandardMaterial;
        ["1KEYS-0"]: THREE.MeshStandardMaterial;
        ["SCREEN-0.001"]: THREE.MeshStandardMaterial;
        ["SIGN-0"]: THREE.MeshStandardMaterial;
        ["TAG-0"]: THREE.MeshStandardMaterial;
        ["2KB-0"]: THREE.MeshStandardMaterial;
        ["1KB-BASE-0.001"]: THREE.MeshStandardMaterial;
        ["1KEYS-0.001"]: THREE.MeshStandardMaterial;
        ["MOUSE-0"]: THREE.MeshStandardMaterial;
        ["MOUSEPAD-0"]: THREE.MeshStandardMaterial;
    };
};

const Setup = ({ isMobile, ...rest }: { isMobile: boolean }) => {
    const { nodes, materials } = useGLTF("models/computer_and_laptop/scene.gltf") as GLTFResult;

    const chairRef = useRef<THREE.Mesh>(null);
    const chairCoverRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (chairRef.current && chairCoverRef.current) {
            chairRef.current.rotation.y += 0.005;
            chairCoverRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group
            {...rest}
            dispose={null}
            scale={isMobile ? 0.07 : 0.08}
            position-y={isMobile ? -0.5 : -1}
            position-x={isMobile ? 0 : -0.2}>
            {/* chair */}
            <group
                position={[16.678, 8.418, 24.507]}
                rotation={[-Math.PI, -0.592, -Math.PI]}
                scale={[2.549, 0.243, 2.549]}>
                <mesh
                    ref={chairRef}
                    castShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials["CHAIR-0"]}
                />
                <mesh
                    castShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials["WHEEL-0"]}
                />
                <mesh
                    castShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials["WHEEL-CAP-0"]}
                />
                <mesh
                    castShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials["WHEEL-NUT-0"]}
                />
                <mesh
                    castShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials["CHAIR-LEGS-0"]}
                />
                <mesh
                    ref={chairCoverRef}
                    geometry={nodes.Object_9.geometry}
                    material={materials["CHAIR-COVER-0"]}>
                    <meshStandardMaterial color='blue' />
                </mesh>
            </group>
            <group
                position={[-18.454, 15.918, 9.192]}
                rotation={[0, 0.926, -Math.PI]}
                scale={[-5.14, 0.147, 3.341]}>
                <mesh geometry={nodes.Object_31.geometry} material={materials["LAPTOP-0"]} />
                <mesh geometry={nodes.Object_32.geometry} material={materials["1KB-BASE-0"]} />
                <mesh geometry={nodes.Object_33.geometry} material={materials["1KEYS-0"]} />

                <mesh geometry={nodes.Object_35.geometry} material={materials["SIGN-0"]} />
                <mesh geometry={nodes.Object_36.geometry} material={materials["TAG-0"]} />
            </group>
            <group
                position={[-2.333, 15.958, 2.159]}
                rotation={[0, 0.005, 0]}
                scale={[5.607, 0.175, 1.728]}>
                <mesh geometry={nodes.Object_38.geometry} material={materials["2KB-0"]} />
                <mesh geometry={nodes.Object_39.geometry} material={materials["1KB-BASE-0.001"]} />
                <mesh geometry={nodes.Object_40.geometry} material={materials["1KEYS-0.001"]} />
            </group>
            <mesh
                geometry={nodes.Object_11.geometry}
                material={materials["COMPUTER-0"]}
                position={[-18.152, 5.799, 9.513]}
                scale={[2.327, 5.804, 5.98]}
            />
            <mesh
                geometry={nodes.Object_13.geometry}
                material={materials["1COMPUTER-0"]}
                position={[-24.287, 5.799, 15.387]}
                scale={[2.327, 5.804, 5.98]}
            />

            <mesh
                geometry={nodes.Object_15.geometry}
                material={materials["DESK-0"]}
                position={[0, 15.452, 0]}
                scale={[29.541, 0.336, 8.492]}>
                <meshStandardMaterial color='gray' />
            </mesh>

            <mesh
                geometry={nodes.Object_17.geometry}
                material={materials["MAT-0"]}
                position={[0, 0, 14.147]}
                scale={[46.718, 46.718, 26.649]}>
                <meshStandardMaterial color='blue' />
            </mesh>

            <mesh
                geometry={nodes.Object_19.geometry}
                material={materials["SCREEN-0"]}
                position={[0, 21.761, -6.007]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[9.123, 4.323, 5.089]}
            />

            <mesh
                geometry={nodes.Object_27.geometry}
                material={materials["BASS-0"]}
                position={[0, 4.992, 0.553]}
                scale={[5.47, 5, 3.905]}
            />
            <mesh
                geometry={nodes.Object_29.geometry}
                material={materials["SPEAKER-0"]}
                position={[-27.707, 18.537, 8.063]}
                rotation={[0, 0.588, 0]}
                scale={[1.076, 1.75, 0.848]}
            />
            <mesh
                geometry={nodes.Object_42.geometry}
                material={materials["MOUSE-0"]}
                position={[7.641, 16.001, 4.809]}
                rotation={[0, 0.415, 0]}
                scale={[0.751, 0.486, 1.161]}
            />
            <mesh
                geometry={nodes.Object_44.geometry}
                material={materials["MOUSEPAD-0"]}
                position={[7.625, 14.269, 3.664]}
                scale={3.11}
            />
        </group>
    );
};

useGLTF.preload("models/computer_and_laptop/scene.gltf");
export default Setup;
