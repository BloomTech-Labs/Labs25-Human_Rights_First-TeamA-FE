import React from 'react';
import { Timeline } from 'antd';
import LocalPopOver from '../LocalPopOver';

const TimelineLabel = props => {
  let mode = 'right';
  const incidents = props.incidents;
  if (window.screen.width >= 768) {
    mode = 'alternate';
  }

  const makeTimeline = () => {
    if (incidents.length > 0) {
      return incidents.map(incident => {
        return (
          <Timeline.Item>
            <LocalPopOver incident={incident} marker={false} text={true} />
          </Timeline.Item>
        );
      });
    }
  };

  return (
    <Timeline id="timeline" mode={mode}>
      {makeTimeline()}
    </Timeline>
  );
};

export default TimelineLabel;
