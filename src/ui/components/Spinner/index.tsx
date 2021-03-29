import { Wrapper } from './styles';

const Spinner = ({ color = '#000' }: { color?: string }) => (
  <Wrapper
    width="32"
    height="32"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
  >
    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
  </Wrapper>
);

export default Spinner;
