import React from "react";
import { Field } from "react-final-form";

/**
 * @param name - input name ,props received by default
 * @param label -label ,props received by default
 * @param validate - input validation  ,props received by default
 * @param values -received from redux
 * @param type -received input types ,props received by default
 */

export const TextInput = ({
  validate,
  name,
  placeholder,
  className,
  onClick,
  type,
  label
}) => {
  return (
    <div className="text-input">
      <Field name={name} type={type} validate={validate} label={label}>
        {({ input, meta }) => (
          <>
          <label>{label}</label>
            <input
              placeholder={placeholder}
              className={className}
              type={type}
              {...input}
            />
            {(meta.error || meta.submitError) && meta.touched && (
              <>
                <span>{meta.error}</span>
                <span>{meta.submitError}</span>
              </>
            )}
          </>
        )}
      </Field>
    </div>
  );
};
