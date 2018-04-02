import React from 'react';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay, LoadingSpinner,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';

export default (props) => {
  return (
    <Player
      poster="../img/tesla.jpg"
      source src="../img/17AW_Social_IG_RT_PUMA_Phenom_1080x1080px_Content-Calendar_23November.mp4"
      type="video/mp4"
      autoHide={true}
    >
      {/*<source src="../img/FCM-BB-Low.mp4" />

      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={10} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton
          rates={[5, 2, 1, 0.5, 0.1]}
          order={7.1}
        />
        <VolumeMenuButton disabled />
      </ControlBar>*/}
    </Player>
  );
};
