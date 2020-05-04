import { SORT_EMAIL } from "./actionTypes";

interface sortInterface {
  sortBy: string;
  direction: string;
  emailData: Array<any>;
}
export const sortEmail = ({ sortBy, direction, emailData }: sortInterface) => {
  return {
    type: SORT_EMAIL,
    sortBy,
    direction,
    emailData,
  };
};
