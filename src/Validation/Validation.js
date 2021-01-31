import createDecorator from "final-form-focus";

export const required = (value) => (value ? undefined : "Required"); // Field is required
export const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined); // Field muat be a number
export const focusOnError = createDecorator(); //Focusing field when empty summision
export const minLength = min => value => isNaN(value) || value.length > min ? 'Enter Only 10 Numbers' : value.length < min ? 'Enter atleast 10 Numbers' : undefined;
export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)
