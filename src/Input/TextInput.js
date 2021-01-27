import React, { Fragment } from "react";
import { Field } from "react-final-form";

const TextInput = ({
  validate,
  name,
  placeholder,
  className,
  onClick,
  type,
}) => {
  return (
    <div className="text-input">
      <Field name={name} validate={validate} type={type}>
        {({ input, meta }) => (
          <Fragment>
            <input
              placeholder={placeholder}
              className={className}
              type={type}
              {...input}
            />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </Fragment>
        )}
      </Field>
    </div>
  );
};
export default TextInput;
