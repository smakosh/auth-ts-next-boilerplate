import styled from 'styled-components';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: 16px;
    width: 100%;
  }
`;

export default Container;
