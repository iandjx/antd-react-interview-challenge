import React from "react";
import { Card, Tag } from "antd";
import previewIcon from "../assets/icon_mail_sp.svg";

import { Typography } from "antd";

const { Text } = Typography;

export default function EmailCard(props: any) {
  const { email } = props;
  //   console.log(email.to[0].address);
  let toEmail: any;
  if (email.to.length > 2) {
    toEmail = (
      <div style={{ display: "flex" }} className="tag-container">
        <Text>
          {/* {console.log("second" + email.to[1].address)} */}
          {email.to[0].address}, {email.to[1].address} ...
        </Text>
        <Tag className="to-counter">+{email.to.length - 1}</Tag>
      </div>
    );
  } else {
    toEmail = (
      <Text>
        {email.to[0].address}, {email.to[1] ? email.to[1].address : ""}
      </Text>
    );
  }

  return (
    <div>
      <Card size="small" style={{ width: 300 }}>
        <div style={{ display: "flex" }}>
          <img src={previewIcon} alt="preview icon" style={{ width: "1em" }} />
          <div style={{ marginLeft: "1em" }}>
            <Text strong>{email.from} </Text>
            {toEmail}
          </div>
          <div style={{ marginLeft: "auto" }}>time</div>
        </div>
        <div>{email.body}</div>
      </Card>
    </div>
  );
}
