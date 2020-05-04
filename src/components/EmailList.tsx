import React from "react";
import { useSelector } from "react-redux";
import EmailCard from "./EmailCard";

export default function EmailList() {
  let emailData = useSelector((state: any) => state.filter.emails);
  let sortedEmail = useSelector((state: any) => state.sort.sortedEmails);
  console.log(sortedEmail.length);
  let displayedEmail = emailData;
  if (sortedEmail.length > 0 && sortedEmail.length === emailData.length) {
    displayedEmail = sortedEmail;
  }

  return (
    <div>
      {displayedEmail &&
        displayedEmail.map((email: any) => {
          return <EmailCard key={email.id} email={email} />;
        })}
    </div>
  );
}
