import React from "react";
import renderer from "react-test-renderer";
import { Form } from "react-final-form";
import SelectDropDown from "../SelectDropDown";

it("it should render and match the snapshot", () => {
  const tree = renderer
    .create(
      <Form onSubmit={jest.fn()}>
        <SelectDropDown
          name="name"
          defaultValue="india"
          options={[
            { value: "India", label: "India" },
            { value: "Austraila", label: "Austraila" },
            { value: "France", label: "France" },
            { value: "Germany", label: "Germany" },
          ]}
        />
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
