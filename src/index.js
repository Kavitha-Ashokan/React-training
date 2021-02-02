import React, { useState } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import { Form } from "react-final-form";
import FormStateToRedux from "./Redux/FormStateToRedux";
import { countryOptions } from "./Options/countryOptions";
import { stateOptions } from "./Options/stateOptions";
import { SelectDropdown } from "./Select/SelectDropDown";
import { TextInput } from "./Input/TextInput";
import { initialValues } from "./InitialValues/InitialValues";
import { required, mustBeNumber, focusOnError, minLength, composeValidators  } from "./Validation/Validation";
import Modal from "./Modal/Modal";
import './index.css';

/**
 * @param mockData - Array of Form Values stored
 * @param values - returned form values
 */
export const App = () => { 
  const [modalData, setModalData] = useState({ isOpen: false, values: {} });

  const onHide = () => {
    setModalData({ isOpen: false, values: {} });
  };
  const onSubmit = (values) => {
    if (values.checkbox === true) { // checkbox is true when submitting form it displaying values
      setModalData({ isOpen: true, values: values });
    } else { // checkbox is false it throwing a summision error when submitting form
      setModalData({ isOpen:true, values:"Click the checkbox to submit "})
    }
  };

  return (
    <Provider store={store}>
      <div>
        <Form
          onSubmit={onSubmit} decorators={[focusOnError]} initialValues={initialValues}
          render={({ handleSubmit, submitError, form }) => (
            <form onSubmit={(event) => { handleSubmit(event); }}>
              <FormStateToRedux form="example" />
              <h1>Shipping Address</h1>
              <TextInput className="input-box" validate={required} name="name" placeholder="Name" label="Name" type="text" /><br />
              <TextInput className="input-box" validate={required} name="address" placeholder="Address" label="Address" type="text" /><br />
              <TextInput className="input-box" validate={required} name="city" placeholder="City" label="City" type="text" /><br /><br />
              <label>Country</label>
              <SelectDropdown  name="country" defaultValue="India" options={countryOptions} /><br /><br /><br />
              <label>State</label>
              <SelectDropdown name="state" defaultValue="TamilNadu" options={stateOptions} /><br /><br />
              <TextInput className="input-box" validate={mustBeNumber} name="pincode" placeholder="Pincode" label="Pincode" type="text" /><br />
              <TextInput className="input-box" validate={composeValidators(mustBeNumber,required, minLength(10))} label="PhoneNo" name="phone" placeholder="Phone" type="text" /><br />
              <div className="check-box-div">
                <TextInput name="checkbox" type="checkbox" className="check-box" />
                <p className="check-text">
                  {"  "} check if shipping and billing address are different
                </p>
              </div>
              <button type="submit">Ship To This Address</button>
              {"  "}
              {/* Reset Function  */}
              <button type="button" onClick={form.reset}>RESET</button>
            </form>
          )}
        />
        {modalData.isOpen && (
          <Modal show={modalData.isOpen} onHide={onHide} values={modalData.values}/>
          )}
      </div>
    </Provider>
  );
};
render(<App />, document.getElementById("root"));
