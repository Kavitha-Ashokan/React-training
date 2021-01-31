import React from "react";
import { connect } from "react-redux";
import { getFormState } from "./finalFormDuck";

//Retrieving form values from Redux
const FormStateFromRedux = ({ state }) => (
  <pre>{state.values.checkbox && JSON.stringify(state.values, 0, 2)}</pre>
);

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form),
}))(FormStateFromRedux);
