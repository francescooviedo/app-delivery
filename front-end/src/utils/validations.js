const nameValidation = (value) => value.length >= '12';

const emailValidation = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailTest = regex.test(value);
  return emailTest;
};

const passwordValidation = (value) => value.length >= '6';

export {
  nameValidation,
  emailValidation,
  passwordValidation,
};
