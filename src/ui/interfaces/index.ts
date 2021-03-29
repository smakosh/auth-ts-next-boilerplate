import type { InputHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  title: string;
  wide?: boolean;
  variant?: 'primary' | 'ghost';
  size: 'large' | 'medium' | 'small';
  fontSize?: number;
  fontWeight?: number;
  uppercase?: boolean;
  icon?: (HTMLElement & SVGElement) | ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'submit' | 'reset' | 'button';
  state?: 'danger' | 'success' | 'warning';
  disabled?: boolean;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dataCy?: string;
  width?: number;
  height?: number;
  borderless?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
}

export interface TypographyProps {
  margin?: [number, number, number, number];
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  letterSpacing?: string;
  fontWeight?: number;
  fontSizeMobile?: number;
  align?: string;
  customColor?: string;
}

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
  dataCy?: string;
  errorTestId?: string;
};
