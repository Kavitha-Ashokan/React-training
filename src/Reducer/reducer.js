const initialState = { formData: {} };

export const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "FORM_DATA":
      return {
        formData: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
