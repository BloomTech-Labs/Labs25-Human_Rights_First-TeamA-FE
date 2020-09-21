import React, { useEffect, useState } from 'react';
import { Timeline, DatePicker, Space } from 'antd';
import LocalSlider from './LocalSlider';
import IncidentModal from '../Modal';

const TimelineLabel = props => {
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  let mode = 'left';
  const incidents = props.incidents;
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  if (window.screen.width >= 768) {
    mode = 'alternate';
  }

  useEffect(() => {
    if (startDate && endDate) {
      const results = incidents.filter(el => {
        const d = Date.parse(el.date);
        const start = Date.parse(startDate);
        const end = Date.parse(endDate);
        return d >= start && d <= end;
      });
      setFilteredIncidents(results);
    } else {
      setFilteredIncidents(incidents);
    }
  }, [startDate, endDate, incidents]);

  const makeTimeline = () => {
    if (filteredIncidents.length > 0) {
      return filteredIncidents.map(incident => {
        return (
          <Timeline.Item>
            <IncidentModal incident={incident} modal={true} />
          </Timeline.Item>
        );
      });
    }
  };

  const setStartValue = (value, dateString) => {
    setStartDate(dateString);
  };

  const setEndValue = (value, dateString) => {
    setEndDate(dateString);
  };

  const newPickDate = () => {
    return (
      <Space direction="horizontal">
        <DatePicker onChange={setStartValue} placeholder={'Start Date'} />
        <DatePicker onChange={setEndValue} placeholder={'End Date'} />
      </Space>
    );
  };

  return (
    <Timeline id="timeline" mode={mode}>
      {window.screen.width < 768 ? (
        <LocalSlider
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
        />
      ) : null}
      {window.screen.width >= 768 ? newPickDate() : null}
      {makeTimeline()}
    </Timeline>
  );
};

export default TimelineLabel;
