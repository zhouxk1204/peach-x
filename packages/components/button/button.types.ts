export type buttonTypes =  'primary' | 'success' | 'warning' | 'danger' | 'info';
export interface ButtonProps {
  type?: buttonTypes;
  disabled?: boolean;
}
