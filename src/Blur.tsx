import React from 'react';
import {AbsoluteFill, Img, useCurrentFrame} from 'remotion';

export const Blur: React.FC = () => {
	const frame = useCurrentFrame();
	const blur = Math.sin(frame / 10) * 20 + 20;

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			<Img
				style={{
					filter: `blur(${blur}px)`,
				}}
				src="https://images.unsplash.com/photo-1696938944368-7abfb4233ded?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'sans-serif',
					fontSize: 80,
				}}
			>
				<h1>Blur</h1>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
