import React, { useState } from 'react';
import { Timeline } from 'antd';
import LocalPopOver from '../LocalPopOver';

const TimelineLabel = props => {
  const [mode, setMode] = useState('alternate');
  const incidents = props.incidents;

  const makeTimeline = () => {
    if (incidents.length > 0) {
      console.log('incidents');
      return incidents.map(incident => {
        return (
          <Timeline.Item>
            <LocalPopOver incident={incident} marker={false} text={true}>
              {`${incident.city}, ${incident.date.slice(0, 10)}`}
            </LocalPopOver>
          </Timeline.Item>
        );
      });
    }
  };

  return <Timeline mode={mode}>{makeTimeline()}</Timeline>;
};

export default TimelineLabel;
