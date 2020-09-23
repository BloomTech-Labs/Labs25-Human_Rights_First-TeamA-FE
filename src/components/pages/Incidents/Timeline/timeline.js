import React, { useEffect, useState, useContext } from 'react';
import { IncidentContext } from '../../../../state/contexts/index';
import { Timeline, DatePicker, Space } from 'antd';
import LocalSlider from './LocalSlider';
import IncidentModal from '../Modal';

const TimelineLabel = () => {
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const incidents = useContext(IncidentContext);
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);

  // timeline item alignment based on screen width
  let mode = 'left';
  if (window.screen.width >= 768) {
    mode = 'alternate';
  }

  // filters incidents based on start and end date of datepickers
  useEffect(() => {
    if (startDate && endDate) {
      const results = incidents.filter(el => {
        const d = Date.parse(el.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        start.setDate(start.getDate() + 1);
        end.setDate(end.getDate() + 1);

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
          <Timeline.Item key={`timelineItem-${incident.id}`}>
            <IncidentModal
              key={`modal-${incident.id}`}
              incident={incident}
              timeline={true}
            />
          </Timeline.Item>
        );
      });
    }
  };

  const setStartValue = (_, dateString) => {
    setStartDate(dateString);
  };

  const setEndValue = (_, dateString) => {
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
