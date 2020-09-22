import React from 'react';
import { Slider } from 'antd';

const LocalSlider = props => {
  const startDate = new Date('2020-08-22T00:00');
  const endDate = new Date('2020-08-31T00:00');
  var getDateArray = function(start, end) {
    var arr = [],
      dt = new Date(start);

    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }

    return arr;
  };
  let dateArray = getDateArray(startDate, endDate);
  dateArray = dateArray.map(
    date =>
      `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
        -2
      )}-${date.getDate()}`
  );

  function formatter(value) {
    return new Date(dateArray[value]).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  const onSlide = value => {
    props.setStartDate(dateArray[value[0]]);
    props.setEndDate(dateArray[value[1]]);
  };

  return (
    <div>
      <div className="date-range-container">
        <div>
          {props.startDate
            ? new Date(props.startDate).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
            : new Date(startDate).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
        </div>
        <div> - </div>
        <div>
          {props.endDate
            ? new Date(props.endDate).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
            : new Date(endDate).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
        </div>
      </div>
      <Slider
        range
        defaultValue={[0, 9]}
        max={9}
        tipFormatter={formatter}
        onChange={onSlide}
      />
    </div>
  );
};

export default LocalSlider;
