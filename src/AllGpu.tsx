import {AbsoluteFill} from 'remotion';
import {Blur} from './Blur';
import {OrbScene} from './Orb';
import {Scene} from './Scene';
import {Shadows} from './Shadows';

export const AllGpu: React.FC = () => {
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(0.5)`,
					transformOrigin: '100% 0%',
				}}
			>
				<Blur />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
