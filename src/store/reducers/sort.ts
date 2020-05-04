import { SORT_EMAIL } from "../actions/actionTypes";

const initialState = {
  sortedEmails: [],
  sortedEmailCount: 0,
};

//sortBy, direction, emailData
const sortReducer = (state = initialState, action: any) => {
  const { type, sortBy, direction, emailData } = action;
  let sortedEmail;
  switch (type) {
    case SORT_EMAIL:
      if (sortBy !== "date" && sortBy !== "to") {
        if (direction === "ascending") {
          sortedEmail = [...emailData].sort((a: any, b: any) => {
            return a[sortBy] > b[sortBy] ? -1 : 1;
          });
        }
        if (direction === "descending" || direction === "") {
          sortedEmail = [...emailData].sort((a: any, b: any) => {
            return a[sortBy] > b[sortBy] ? 1 : -1;
          });
        }
      }

      if (sortBy === "to") {
        if (direction === "ascending") {
          sortedEmail = [...emailData].sort((a: any, b: any) => {
            return a.to[0].address > b.to[0].address ? -1 : 1;
          });
        }
        if (direction === "descending" || direction === "") {
          sortedEmail = [...emailData].sort((a: any, b: any) => {
            return a.to[0].address > b.to[0].address ? 1 : -1;
          });
        }
      }

      if (sortBy === "date") {
        if (direction === "ascending") {
          console.log("date" + direction);
          sortedEmail = [...emailData].sort((a: any, b: any) => {
            return a.date.localeCompare(b.date);
          });
        }
        if (direction === "descending" || direction === "") {
          console.log("date" + direction);
          sortedEmail = [...emailData].sort((a: any, b: any) => {
            return -a.date.localeCompare(b.date);
          });
        }
      }

      return {
        ...state,
        sortedEmails: sortedEmail,
        emailCount: sortedEmail ? sortedEmail.length : 0,
      };
    default:
      return state;
  }
};

export default sortReducer;
