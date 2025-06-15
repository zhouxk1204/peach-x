import type { SFCWithInstall } from '../withInstall';
import Ticker from './src/ticker.vue';
import { withInstall } from '../withInstall';

export const PTicker: SFCWithInstall<typeof Ticker> = withInstall(Ticker);

export type PTickerInstance = InstanceType<typeof PTicker>;

export default PTicker;
