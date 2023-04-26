import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

interface BedroomProps {
    isMobile: boolean;
}

const Bedroom = ({ isMobile }: BedroomProps) => {
    const computer = useGLTF("./bedroom/scene.glb");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={0.5} />
            <primitive 
                object={computer.scene}
                scale={isMobile ? 0.6 : 0.75}
                position={[0, -2.25, -1.5]}
                rotation={[0, -0.5, -0.1]}
            />
        </mesh>
    )
}

const BedroomCanvas = () => {
    const [isMobile, setIsMobile] = React.useState<boolean>(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };
  
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2 }
                    minPolarAngle={Math.PI / 2}
                />
                <Bedroom isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BedroomCanvas;