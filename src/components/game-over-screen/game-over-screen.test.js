import React from "react";
import renderer from "react-test-renderer";
import {GameOverScreen} from "./game-over-screen";
import {noop} from "../../utils";


it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
      .create(
          <GameOverScreen
            onReplayButtonClick={noop}
            resetGameAction={noop}
          />
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
