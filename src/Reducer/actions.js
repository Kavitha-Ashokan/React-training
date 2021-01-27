export const fromSubmit = (message) => {
  return {
    type: "FORM_DATA",
    message: message,
  };
};
