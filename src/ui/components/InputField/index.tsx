import { ErrorMessage, useField } from 'formik';
import { InputFieldProps } from 'ui/interfaces';
import ErrorField from 'ui/components/ErrorField';
import { Wrapper, Label } from './styles';

const InputField = ({
  label,
  dataCy,
  errorTestId,
  ...props
}: InputFieldProps) => {
  const [field, { error, touched }] = useField(props);

  return (
    <Wrapper error={!!(error && touched)}>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <input
        data-cy={dataCy}
        data-testid={dataCy}
        {...field}
        {...props}
        id={field.name}
      />
      <ErrorMessage
        component={ErrorField}
        name={field.name}
        data-testid={errorTestId}
      />
    </Wrapper>
  );
};

export default InputField;
