import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes";


it(`Should Mistakes render correctly`, () => {
  const tree = renderer
      .create(
          <Mistakes
            count={0}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
