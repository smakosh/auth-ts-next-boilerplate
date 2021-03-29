import styled from 'styled-components';
import { TypographyProps } from 'ui/interfaces';

const Typography = styled.div<TypographyProps>`
  margin: ${({ margin }) =>
    margin && `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight && `${lineHeight}px`};
  color: ${({ customColor, theme, color }) =>
    customColor
      ? customColor
      : color &&
        theme.colors[color.split('[')[0]][
          color.split('[')[1].replace(']', '')
        ]};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ align }) => align || 'left'};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: ${({ fontSizeMobile }) => `${fontSizeMobile}px`};
  }
`;

export default Typography;
