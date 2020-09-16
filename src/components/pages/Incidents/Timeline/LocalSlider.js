import React from 'react';
import { Slider, Switch } from 'antd';

const LocalSlider = props => {
  const startDate = new Date('2020-08-22T00:00');
  const endDate = new Date('2020-08-31T00:00');
  const setStartDate = props.setStartDate;
  const setEndDate = props.setEndDate;
  var getDateArray = function(start, end) {
    var arr = new Array(),
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
    return `${dateArray[value]}`;
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
            ? props.startDate
            : `${startDate.getFullYear()}-${(
                '0' +
                (startDate.getMonth() + 1)
              ).slice(-2)}-${startDate.getDate()}`}
        </div>
        <div> - </div>
        <div>
          {props.endDate
            ? props.endDate
            : `${endDate.getFullYear()}-${(
                '0' +
                (endDate.getMonth() + 1)
              ).slice(-2)}-${endDate.getDate()}`}
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
