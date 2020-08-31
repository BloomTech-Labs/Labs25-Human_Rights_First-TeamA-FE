import React, { useState, useEffect } from 'react';
import { Timeline, Radio } from 'antd';
import { axiosBase } from '../../../../utils/axiosBase';

const TimelineLabel = props => {
  const [mode, setMode] = useState('left');
  const [incidents, setIncidents] = useState([]);

  const onChange = e => {
    setMode(e.target.value);
  };

  useEffect(() => {
    axiosBase()
      .get('/incidents')
      .then(res => {
        setIncidents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log('this is incidents', incidents);

  return (
    <div>
      {incidents.map(incident => {
        return (
          <>
            <Radio.Group
              onChange={onChange}
              value={mode}
              style={{ marginBottom: 20 }}
            ></Radio.Group>
            <Timeline mode={mode}>
              <Timeline.Item label={incident.title}>
                <a href={incident.evidence}>{incident.evidence}</a>
              </Timeline.Item>
            </Timeline>
          </>
        );
      })}
    </div>
  );
};

export default TimelineLabel;
