import React from "react";
import { Card, Tag } from "antd";
import previewIcon from "../assets/icon_mail_sp.svg";
import { dateFormat } from "../utils/dateFormatter";

import { Typography } from "antd";
import clipIcon from "../assets/icon_clip.svg";

const { Text } = Typography;

export default function EmailCard(props: any) {
  const { email } = props;
  //   console.log(email.to[0].address);
  let toEmail: any;

  if (email.to.length > 2) {
    toEmail = (
      <div style={{ display: "flex" }} className="mobile-tag-container">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`mailto:${email.to[0].address}`}
        >
          <Text
            style={{
              width: 300,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {/* {console.log("second" + email.to[1].address)} */}
            {email.to[0].address}, {email.to[1].address}
          </Text>
        </a>
        <Tag className="to-counter">+{email.to.length - 1}</Tag>
      </div>
    );
  } else {
    toEmail = (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:${email.to[0].address}`}
      >
        <Text
          style={{
            width: 100,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {email.to[0].address}, {email.to[1] ? email.to[1].address : ""}
        </Text>
      </a>
    );
  }

  const attachment = email.hasAttachment ? (
    <img
      alt="clip-icon"
      src={clipIcon}
      className="mobile-clip-icon"
      style={{ marginLeft: "auto" }}
    />
  ) : (
    ""
  );

  return (
    <div>
      <Card size="small" style={{ width: 450 }}>
        <div style={{ display: "flex", width: "100%" }}>
          <img src={previewIcon} alt="preview icon" style={{ width: "1em" }} />
          <div style={{ marginLeft: "1em", flexGrow: 2 }}>
            <div style={{ display: "flex" }}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`mailto:${email.from}`}
              >
                <Text strong>{email.from} </Text>
              </a>
              {attachment}
              {attachment && (
                <Text
                  style={{
                    marginRight: "0.5em",
                    textAlign: "center",
                  }}
                >
                  {dateFormat(email.date)}
                </Text>
              )}
              {!attachment && (
                <Text
                  style={{
                    marginRight: "0.5em",
                    textAlign: "center",
                    marginLeft: "auto",
                  }}
                >
                  {dateFormat(email.date)}
                </Text>
              )}
            </div>
            <div>{toEmail}</div>
          </div>
        </div>
        <div
          style={{
            width: "95%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {email.body}
        </div>
      </Card>
    </div>
  );
}
