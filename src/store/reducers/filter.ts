import { FILTER_EMAIL } from "../actions/actionTypes";
import moment from "moment";
import { mockdata } from "../../mockdata";

export interface Email {
  from: string;
  to: string;
  subject: string;
  date: Date;
}

const seedData = mockdata;

const initialState = {
  emails: seedData,
  emailCount: seedData.length,
};

const filterReducer = (state = initialState, action: any) => {
  const { type } = action;
  switch (type) {
    case FILTER_EMAIL:
      const searchResult = state.emails.filter(
        (email: any) =>
          moment(email.date).isAfter(moment(action.fromDate)) &&
          moment(email.date).isBefore(moment(action.toDate))
      );
      return {
        ...state,
        emails: searchResult,
        emailCount: searchResult.length,
      };
    default:
      return state;
  }
};

export default filterReducer;
