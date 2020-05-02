import React from "react";
import { useSelector } from "react-redux";
import EmailCard from "./EmailCard";

export default function EmailList() {
  const emailData = useSelector((state: any) => state.filter.emails);
  console.log(emailData);

  return (
    <div>
      {emailData &&
        emailData.map((email: any) => {
          return <EmailCard key={email.id} email={email} />;
        })}
    </div>
  );
}
