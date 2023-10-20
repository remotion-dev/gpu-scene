import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const Shadows: React.FC = () => {
	const frame = useCurrentFrame();
	const scale = 1 + Math.sin(frame / 100) * 0.2;

	return (
		<AbsoluteFill
			style={{
				overflow: 'hidden',
			}}
		>
			{new Array(10).fill(0).map((_, i) => (
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							height: 1700 - i * 180 * scale,
							width: 1700 - i * 180 * scale,
							borderRadius: '50%',
							position: 'absolute',
							backgroundColor: 'white',
							boxShadow: '0px 0px 50px 50px rgba(0, 0, 0, 0.1)',
						}}
					/>
				</AbsoluteFill>
			))}
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontFamily: 'sans-serif',
					fontSize: 80,
				}}
			>
				<h1>Shadows</h1>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
