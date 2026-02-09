import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, PerspectiveCamera, Billboard, Sphere } from '@react-three/drei';

const technologies = [
    { name: 'OpenAI', color: '#74aa9c' },
    { name: 'Python', color: '#3776ab' },
    { name: 'FastAPI', color: '#05998b' },
    { name: 'n8n', color: '#ff6d5a' },
    { name: 'Figma', color: '#f24e1e' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'React', color: '#61dafb' },
    { name: 'GSAP', color: '#88ce02' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'GitHub', color: '#ffffff' },
    { name: 'Agentic AI', color: '#00ffcc' },
    { name: 'Node.js', color: '#339933' },
];

function TechNode({ position, name, color }) {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <Billboard position={position}>
                <Sphere args={[0.12, 16, 16]}>
                    <meshBasicMaterial color={color} />
                </Sphere>
                <Text
                    position={[0, -0.4, 0]}
                    fontSize={0.18}
                    color={color}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.015}
                    outlineColor="#000000"
                >
                    {name}
                </Text>
            </Billboard>
        </Float>
    );
}

function TechLogoCloud() {
    const groupRef = useRef();

    const nodePositions = useMemo(() => {
        const positions = [];
        const count = technologies.length;
        const radius = 2.8; // Slightly larger for more icons
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            positions.push([
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            ]);
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.003;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {technologies.map((tech, idx) => (
                <TechNode
                    key={idx}
                    position={nodePositions[idx]}
                    name={tech.name}
                    color={tech.color}
                />
            ))}
            <Sphere args={[1.2, 32, 32]}>
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} wireframe />
            </Sphere>
        </group>
    );
}

const Hero3D = () => {
    return (
        <div className="hero-3d-container" style={{ width: '100%', height: '500px' }}>
            <Canvas dpr={[1, 1]} gl={{ antialias: false, powerPreference: "low-power" }}>
                <PerspectiveCamera makeDefault position={[0, 0, 9]} />
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <TechLogoCloud />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Hero3D;
