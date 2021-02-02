import React from "react";
import renderer from "react-test-renderer";
import App from "../index";

it("should render and match the snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('it should render a button', () => {
  const tree = renderer
    .create(<App text="Submit" type="submit" state="default" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

