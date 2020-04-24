import { FILTER_EMAIL } from "./actionTypes";
import { Ranges } from "../../components/DateSelector";

export const filterEmail = ({ fromDate, toDate }: Ranges) => {
  return {
    type: FILTER_EMAIL,
    fromDate,
    toDate,
  };
};
