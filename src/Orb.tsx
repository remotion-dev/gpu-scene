import {ThreeCanvas} from '@remotion/three';
import React from 'react';
import {ContactShadows, MeshDistortMaterial} from '@react-three/drei';
import {useCurrentFrame, useVideoConfig} from 'remotion';

const Orb = () => {
	const frame = useCurrentFrame();
	const size = 1 + Math.sin(frame / 10);

	return (
		<>
			<ambientLight intensity={2.5} />
			<pointLight position-z={-15} intensity={1} color="#F8C069" />
			<mesh>
				<sphereGeometry args={[size, 128, 128]} />
				<MeshDistortMaterial
					color="black"
					envMapIntensity={1}
					clearcoat={1}
					clearcoatRoughness={0}
					metalness={0.1}
					// @ts-expect-error wrong types
					mass={4}
					tenstion={1000}
					friction={10}
				/>
			</mesh>
			<ContactShadows
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, -1.6, 0]}
				opacity={0.8}
				width={15}
				height={15}
				blur={2.5}
				far={1.6}
			/>
		</>
	);
};

export const OrbScene: React.FC = () => {
	const {height, width} = useVideoConfig();

	return (
		<ThreeCanvas
			width={width}
			height={height}
			gl={{
				alpha: false,
				antialias: false,
				stencil: false,
				depth: false,
			}}
			onCreated={(state) => state.gl.setClearColor('white')}
		>
			<ambientLight intensity={1.5} color={0xffffff} />
			<pointLight position={[10, 10, 0]} />
			<Orb />
		</ThreeCanvas>
	);
};
