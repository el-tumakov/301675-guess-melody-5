import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        onReplayButtonClick={handleReplayButtonClick}
        onSubmit={noop}
      />
  );

  const replayButton = wrapper.find(`button.replay`);

  replayButton.simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
