import type { ButtonProps } from 'ui/interfaces';
import Spinner from '../Spinner';
import { StyledButton } from './styles';

const Button = (props: ButtonProps) => (
  <StyledButton
    {...props}
    data-cy={props.dataCy}
    data-testid={props.dataCy}
    onClick={props.onClick}
  >
    {props.isLoading ? (
      <Spinner />
    ) : (
      <>
        {props.icon && props.icon}
        <span>{props.title}</span>
      </>
    )}
  </StyledButton>
);

export default Button;
