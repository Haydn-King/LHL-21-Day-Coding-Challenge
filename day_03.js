/*
Your task is to create a function that will take the gauge object
as a parameter, and will return true if the current value is between
the minimum and maximum, and return false if the value is outside those.
*/

const exampleGauge = {
  current: 1.4,
  min: 0.1,
  max: 0.4,
};

const checkGaugeStatus = (gauge) => {
  if (gauge.current >= gauge.min && gauge.current <= gauge.max) {
    return true;
  }
  return false;
};

console.log(checkGaugeStatus(exampleGauge));
