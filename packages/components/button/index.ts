import './style.css'

import  { SFCWithInstall, withInstall } from '../withInstall'

import Button from './button.vue';

export const PButton: SFCWithInstall<typeof Button> = withInstall(Button)

export * from './button.types'
export default PButton

