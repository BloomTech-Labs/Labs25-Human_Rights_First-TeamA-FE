import React, { useState, useEffect } from 'react';
import { Timeline } from 'antd';
import LocalPopOver from '../LocalPopOver';

const TimelineLabel = props => {
  const [mode, setMode] = useState('alternate');
  const incidents = props.incidents;

  const makeTimeline = () => {
    return incidents.map(incident => {
      return (
        <Timeline.Item>
          <LocalPopOver>
            `{incident.data.city}, {incident.data.date}`
          </LocalPopOver>
        </Timeline.Item>
      );
    });
  };
  // console.log('this is incidents', incidents);
  // console.log('makeTimeline', makeTimeline());
  return <Timeline mode={mode}>{makeTimeline()}</Timeline>;
};

export default TimelineLabel;
