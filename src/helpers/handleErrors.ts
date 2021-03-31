import { FormError } from 'generated/graphql';

const handleErrors = (errors: FormError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    if (field === 'exception') {
      return console.log(message);
    }
    errorMap[field] = message;
  });

  return errorMap;
};

export default handleErrors;
