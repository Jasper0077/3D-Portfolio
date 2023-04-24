import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

interface ComputerProps {
    isMobile: boolean;
}

const Computer = ({ isMobile }: ComputerProps) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

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

const ComputerCanvas = () => {
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
                <Computer isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas;