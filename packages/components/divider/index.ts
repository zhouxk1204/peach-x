import Divider from './src/divider.vue';
import type { SFCWithInstall } from '../withInstall';
import { withInstall } from '../withInstall';

export const PDivider: SFCWithInstall<typeof Divider> = withInstall(Divider);

export default PDivider;
