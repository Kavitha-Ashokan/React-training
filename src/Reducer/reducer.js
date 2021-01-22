const reducer = (state, action) => {
    switch (action.type) {
      case "FORM_DATA":
        return {
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  export default reducer