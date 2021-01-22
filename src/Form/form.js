import React, { useState, useReducer } from "react";
import { Form, Field } from "react-final-form";
import TextInput from "../Input/TextInput";
import "./form.css";
import reducer from "../Reducer/reducer";

const initialState = { formData: {} };
const FormHandle = () => {
  const [check, setCheck] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkBoxHandler = () => { //checkBoxHandler function for handle checkbox click
    setCheck(!check);
  };
  const onSubmit = (values) => { //dispatch action type and payload to reducer
    dispatch({ type: "FORM_DATA", payload: values });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Shipping Address</h1>
            <label>Name</label>
            <TextInput name="name" placeholder="Name" type="text" />
            <label>Address</label>
            <TextInput name="address" placeholder="Address" type="text" />
            <label>City</label>
            <TextInput name="city" placeholder="City" type="text" />
            <label>Country</label>
            <br />
            <Field name="country">
              {({ select }) => (
                <select type="select" required {...select}>
                  <option value="India">India</option>
                  <option value="Belgium">Belgium</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                </select>
              )}
            </Field>
            <br />
            <label>State</label>
            <br />
            <Field name="state">
              {({ select }) => (
                <select type="select" required {...select}>
                  <option value="TamilNadu">TamilNadu</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              )}
            </Field>
            <br />
            <label>Pincode</label>
            <TextInput name="pincode" placeholder="Pincode" type="text" />
            <label>Phone</label>
            <TextInput name="phone" placeholder="Phone" type="text" />
            <div className="check-box-div">
              <TextInput
                name="check"
                type="checkbox"
                className="check-box"
                onClick={checkBoxHandler}
              />
              <label className="check-text">
                check if shipping and billing address are different
              </label>
            </div>
            <button disabled={check} type="submit">
              Ship To This Address
            </button>
          </form>
        )}
      </Form>
      {Object.keys(state.formData).map(function (key, index) {
        return <p key={key}>{key !== "check" && `${key} : ${state.formData[key]}  `}</p>;
      })}
    </div>
  );
};
export default FormHandle;
