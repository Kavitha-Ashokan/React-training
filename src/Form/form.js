import React from "react";
import { Form } from "react-final-form";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import TextInput from "../Input/TextInput";
import SelectDropdown from "../Input/SelectDropdown";
import "./form.css";
import { fromSubmit } from "../Reducer/actions";

const countryOptions = [
  { value: "India", label: "India" },
  { value: "Austraila", label: "Austraila" },
  { value: "France", label: "France" },
  { value: "Germany", label: "Germany" },
];

const stateOptions = [
  { value: "TamilNadu", label: "TamilNadu" },
  { value: "Kerala", label: "Kerala" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Karnataka", label: "Karnataka" },
];

const FormHandle = ({ state, fromSubmitData }) => {
  const required = (value) => (value ? undefined : "Required");
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;

    const onSubmit =  (values) => {
      //dispatch action type and payload to reducer
  
       fromSubmitData(values);
    };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <h1>Shipping Address</h1>
            <label>Name</label>
            <TextInput
              validate={required}
              name="name"
              placeholder="Name"
              type="text"
            />
            <label>Address</label>
            <TextInput
              validate={required}
              name="address"
              placeholder="Address"
              type="text"
            />
            <label>City</label>
            <TextInput
              validate={required}
              name="city"
              placeholder="City"
              type="text"
            />
            <label>Country</label>
            <br />

            <SelectDropdown
              name="country"
              defaultValue="India"
              options={countryOptions}
            />
            <br />
            <label>State</label>
            <br />

            <SelectDropdown
              name="state"
              defaultValue="TamilNadu"
              options={stateOptions}
            />
            <br />
            <label>Pincode</label>
            <TextInput
              validate={mustBeNumber}
              name="pincode"
              placeholder="Pincode"
              type="text"
            />
            <label>Phone</label>
            <TextInput
              validate={mustBeNumber}
              name="phone"
              placeholder="Phone"
              type="text"
            />
            <div className="check-box-div">
              <TextInput
                validate={required}
                name="checkbox"
                type="checkbox"
                className="check-box"
              />
              <p className="check-text">
                {"  "} check if shipping and billing address are different
              </p>
            </div>
            <button type="submit">Ship To This Address</button>
          </form>
        )}
      />
      {!isEmpty(state) &&
        Object.keys(state.formData).map(function (key) {
          return (
            <p key={key}>
              {key !== "checkbox" && `${key} : ${state.formData[key]}  `}
            </p>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => ({
  fromSubmitData: (data) => dispatch(fromSubmit(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormHandle);
