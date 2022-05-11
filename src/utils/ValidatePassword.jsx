const ValidatePassword = (password) => {
  if (password.length > 5) {
    return true;
  };
  return false;
};

export default ValidatePassword;
