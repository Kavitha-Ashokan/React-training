import React from "react";
import renderer from "react-test-renderer";
import { TextInput } from "../TextInput";
import { Form } from "react-final-form";

it("should render and match the snapshot", () => {
  const tree = renderer
    .create(
      <Form onSubmit={jest.fn()}>
        <TextInput />
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
