import Spinner from 'ui/components/Spinner';
import styled from 'styled-components';

export const Grid = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  margin: 0 auto;

  svg {
    align-self: center;
  }
`;

const Loading = ({ height = '100vh' }) => (
  <Grid height={height}>
    <Spinner />
  </Grid>
);

export default Loading;
