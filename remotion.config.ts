/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import {Config} from '@remotion/cli/config';

Config.setChromiumOpenGlRenderer('angle-egl');
Config.setVideoImageFormat('jpeg');
Config.setChromeMode('chrome-for-testing');
