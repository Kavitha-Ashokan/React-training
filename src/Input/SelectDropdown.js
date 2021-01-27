import React from "react";
import { Field } from "react-final-form";

export const SelectDropdown = (props) => (
  <Field name={props.name} component="select" defaultValue={props.defaultValue}>
    {props.options.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ))}
  </Field>
);

export default SelectDropdown;
