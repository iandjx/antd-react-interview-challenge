import { SORT_EMAIL } from "../actions/actionTypes";

const initialState = {
  sortedEmails: [],
  sortedEmailCount: 0,
};

//sortBy, direction, emailData
const sortReducer = (state = initialState, action: any) => {
  const { type, sortBy, direction, emailData } = action;

  switch (type) {
    case SORT_EMAIL:
      if (sortBy !== "date" && sortBy !== "to") {
        if (direction === "ascending") {
          emailData.sort((a: any, b: any) => {
            return a[sortBy] > b[sortBy] ? -1 : 1;
          });
        }
        if (direction === "descending") {
          emailData.sort((a: any, b: any) => {
            return a[sortBy] > b[sortBy] ? 1 : -1;
          });
        }
      }

      if (sortBy === "to") {
        if (direction === "ascending") {
          emailData.sort((a: any, b: any) => {
            return a.to[0].address > b.to[0].address ? -1 : 1;
          });
        }
        if (direction === "descending") {
          emailData.sort((a: any, b: any) => {
            return a.to[0].address > b.to[0].address ? 1 : -1;
          });
        }
      }

      if (sortBy === "date") {
        if (direction === "ascending") {
          emailData.sort((a: any, b: any) => {
            return a.date.localeCompare(b.date);
          });
        }
        if (direction === "descending") {
          emailData.sort((a: any, b: any) => {
            return -a.date.localeCompare(b.date);
          });
        }
      }

      return {
        ...state,
        sortedEmails: emailData,
        emailCount: emailData.length,
      };
    default:
      return state;
  }
};

export default sortReducer;
