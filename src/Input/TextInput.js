import React from "react";
import { Field } from "react-final-form";

const TextInput = ({name,placeholder,className,onClick,type}) => {
  return (
    <div className="text-input">
      <Field name={name}>
        {({ input }) => (
          <input
            placeholder={placeholder}
            className={className}
            onClick={onClick}
            type={type}
            required
            {...input}
          />
        )}
      </Field>
    </div>
  );
};
export default TextInput;
