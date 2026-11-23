import React from 'react';
import {Composition} from 'remotion';
import {StoryPilot} from './compositions/StoryPilot';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="StoryPilot"
    component={StoryPilot}
    durationInFrames={150}
    fps={30}
    width={1080}
    height={1920}
  />
);
