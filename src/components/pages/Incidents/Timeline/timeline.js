import React, { useEffect, useState } from 'react';
import { Timeline, DatePicker, Space } from 'antd';
import LocalPopOver from '../LocalPopOver';

const { RangePicker } = DatePicker;

const TimelineLabel = props => {
  const [date, setDate] = useState([]);
  let mode = 'left';
  const incidents = props.incidents;
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  console.log(filteredIncidents);
  if (window.screen.width >= 768) {
    mode = 'alternate';
  }

  useEffect(() => {
    if (date.length && date[0] && date[1]) {
      const results = incidents.filter(el => {
        const d = Date.parse(el.date);
        const start = Date.parse(date[0]);
        const end = Date.parse(date[1]);
        return d >= start && d <= end;
      });
      setFilteredIncidents(results);
    } else {
      setFilteredIncidents(incidents);
    }
  }, [date, incidents]);

  const makeTimeline = () => {
    if (filteredIncidents.length > 0) {
      return filteredIncidents.map(incident => {
        return (
          <Timeline.Item>
            <LocalPopOver incident={incident} marker={false} text={true} />
          </Timeline.Item>
        );
      });
    }
  };

  const pickDate = () => {
    return (
      <Space direction="horizontal" size={12}>
        <RangePicker onCalendarChange={value => setDate(value)} />
      </Space>
    );
  };

  return (
    <Timeline id="timeline" mode={mode}>
      {pickDate()}
      {makeTimeline()}
    </Timeline>
  );
};

export default TimelineLabel;
