import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import {noop} from "../../utils";


it(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
      .create(
          <WelcomeScreen
            errorsCount={3}
            onPlayButtonClick={noop}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
