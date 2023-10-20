import {Composition} from 'remotion';
import {AllGpu} from './AllGpu';

// Welcome to the Remotion Three Starter Kit!
// Two compositions have been created, showing how to use
// the `ThreeCanvas` component and the `useVideoTexture` hook.

// You can play around with the example or delete everything inside the canvas.

// Remotion Docs:
// https://remotion.dev/docs

// @remotion/three Docs:
// https://remotion.dev/docs/three

// React Three Fiber Docs:
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Scene"
				component={AllGpu}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{}}
			/>
		</>
	);
};
