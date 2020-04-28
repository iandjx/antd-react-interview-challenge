import Moment from "moment";
const currMOnth = Moment().month();
const currday = Moment().day();
const currYear = Moment().year();

export const dateFormat = (date: string): string => {
  const dateToMoment = Moment(date);
  const day = dateToMoment.day();
  const month = dateToMoment.month();
  const year = dateToMoment.year();
  if (day === currday && month === currMOnth && year === currYear)
    return dateToMoment.format("h:mm");
  if (month <= currMOnth && year === currYear)
    return dateToMoment.format("MMM DD");

  if (year < currYear) return dateToMoment.format("YYYY/MM/DD");

  return "Invalid date";
};
