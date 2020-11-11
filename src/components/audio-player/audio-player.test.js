import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";
import {noop} from "../../utils";


it(`Should AudioPlayer render correctly`, () => {
  const tree = renderer
      .create((
        <AudioPlayer
          isPlaying={false}
          isLoading={true}
          onPlayButtonClick={noop}
        >
          <audio />
        </AudioPlayer>
      ), {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
