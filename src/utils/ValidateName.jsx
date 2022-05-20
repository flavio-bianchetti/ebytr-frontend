const ValidateName = (password) => {
  if (password.length > 3) {
    return true;
  };
  return false;
};

export default ValidateName;
