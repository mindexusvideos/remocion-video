import { Audio, Img, Series, AbsoluteFill } from 'remotion';
import React from 'react';

import background from './HelloWorld/background.jpg';
import audio from './HelloWorld/audio.mp3';

export const MotivationalPro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Img
        src={background}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
        }}
      />
      <Audio src={audio} />
      <Series>
        <Series.Sequence durationInFrames={90}>
          <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: 60,
              display: 'flex',
            }}
          >
            ¡Confía en ti mismo!
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};