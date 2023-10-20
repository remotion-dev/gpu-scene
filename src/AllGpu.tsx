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
					transformOrigin: '0 0',
				}}
			>
				<Scene
					deviceType="phone"
					phoneColor="rgba(110, 152, 191, 0.00)"
					baseScale={1}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(0.5)`,
					transformOrigin: '0 100%',
				}}
			>
				<OrbScene />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(0.5)`,
					transformOrigin: '100% 100%',
				}}
			>
				<Shadows />
			</AbsoluteFill>
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
