import makeData from "../../makeData";
import { FILTER_EMAIL } from "../actions/actionTypes";
import moment from "moment";

export interface Email {
  from: string;
  to: string;
  subject: string;
  date: moment.Moment;
}

const initialState = {
  emails: makeData(20) as Email[],
};

const filterReducer = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    case FILTER_EMAIL:
      return {
        ...state,
        emails: state.emails.filter(
          (email: Email) =>
            moment(email.date).isAfter(moment(action.fromDate)) &&
            moment(email.date).isBefore(moment(action.toDate))
        ),
      };
    default:
      return state;
  }
};

export default filterReducer;
