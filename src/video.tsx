import { Composition } from 'remotion';
import { MotivationalPro } from './MotivationalPro';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MotivationalPro"
        component={MotivationalPro}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};