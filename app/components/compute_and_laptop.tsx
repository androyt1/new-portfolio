"use client";
import React from "react";
import Setup from "../models/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

const Computer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            className='w-full h-[50vh]  md:h-full flex items-start justify-center bg-gray-900'
            camera={{ fov: 65, position: [0, 1.5, 5] }}>
            <ambientLight intensity={5} />
            <spotLight intensity={3} penumbra={1} position={[2, 3, 5]} castShadow />
            <Setup isMobile={isMobile} />
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 1.1]} position={[0, -1, 0]}>
                <planeGeometry args={[100, 100]} />
                <shadowMaterial opacity={0.3} />
            </mesh>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

export default Computer;
