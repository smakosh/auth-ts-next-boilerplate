import styled from 'styled-components';

interface WrapperProps {
  error?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 15px 0;
  position: relative;
  width: 100%;

  span {
    text-align: left;
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
    box-sizing: border-box;
    text-align: left;
    -webkit-appearance: none;
    resize: unset;
    background: #fff;
    border: 0;
    border: 2px solid
      ${({ theme, error }) => (error ? theme.colors.scarlet[800] : 'gray')};
    color: ${({ theme, error }) =>
      error ? theme.colors.scarlet[800] : '#000'};
    display: block;
    font-size: 16px;
    outline: 0;
    padding: 12px 10px;
    width: 100%;
    border-radius: 3px;
    margin-top: 8px;
    margin-bottom: 5px;
  }

  input:read-only {
    color: #848080;
    cursor: not-allowed;
  }
`;

export const Label = styled.label<{ isActive?: boolean }>`
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  color: #000;
`;
