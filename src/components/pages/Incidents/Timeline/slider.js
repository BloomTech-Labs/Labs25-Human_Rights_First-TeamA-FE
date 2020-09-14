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
  console.log(dateArray);
  dateArray = dateArray.map(
    date =>
      `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
        -2
      )}-${date.getDate()}`
  );
  console.log(dateArray);

  function formatter(value) {
    return `${dateArray[value]}`;
  }

  const onSlide = value => {
    console.log(value);
    props.setStartDate(dateArray[value[0]]);
    props.setEndDate(dateArray[value[1]]);
  };

  return (
    <div>
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
