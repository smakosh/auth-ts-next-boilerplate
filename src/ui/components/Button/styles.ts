import styled from 'styled-components';
import { ButtonProps } from 'ui/interfaces';

export const StyledButton = styled.button<ButtonProps>`
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-weight: 500;
  font-weight: 400;
  border-radius: ${({ borderless }) => (borderless ? '0px' : '3px')};
  transition: 0.3s;

  ${({ isLoading }) =>
    isLoading &&
    `
		width: 158px;
	`}

  ${({ rounded }) =>
    rounded &&
    `
		border-radius: 10px;
	`}

  &:hover {
    transition: 0.3s;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
					color: #fff;
					background: ${theme.colors.royalblue[600]};
					border: 1px solid transparent;
				`;
      case 'ghost':
        return `
					color: ${theme.colors.royalblue[600]};
					background: transparent;
					border: none;
				`;
      default:
        return null;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'large':
        return `
					padding: 12px 13px;
					text-align: center;
					font-size: 12px;
					height: 48px;
				`;
      case 'medium':
        return `
					padding: 0.4rem 1.8rem;
					font-size: 10pt;
				`;
      case 'small':
        return `
					padding: 0.3rem 1.6rem;
					font-size: 8pt;
				`;
      default:
        return null;
    }
  }};

  ${({ width }) =>
    width &&
    `
		width: ${width}px;
	`};

  ${({ height }) =>
    height &&
    `
		height: ${height}px;
	`};

  ${({ uppercase }) =>
    uppercase &&
    `
		text-transform: uppercase;
	`}

  ${({ icon }) =>
    icon &&
    `
    display: flex;
		align-items: center;
		justify-content: center;
	`}

  ${({ iconPosition }) =>
    iconPosition === 'left'
      ? `
      img, svg {
        margin-right: .5rem;
      }
    `
      : `
      flex-direction: row-reverse;
      img, svg {
        margin-left: .5rem;
      }
  `}

  ${({ wide }) =>
    wide &&
    `
      width: 100%;
      text-align: center;
	`}

		${({ fontSize }) =>
    fontSize &&
    `
		font-size: ${fontSize}px;
	`}

	${({ fontWeight }) =>
    fontWeight &&
    `
		font-weight: ${fontWeight};
	`}

	&:disabled {
    cursor: not-allowed;
    background-color: ${({ color }) => color && hexToRgba(color, 0.4)};
    color: #eee;
  }
`;
