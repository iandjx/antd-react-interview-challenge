import React from "react";
import { Row, Col, Typography, Button } from "antd";

import { mdiDeleteOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";
import { useHistory } from "react-router-dom";
import { dateFormat } from "../utils/dateFormatter";

const { Title, Text } = Typography;
export const SingleEmail = (props: any) => {
  console.log(props.location.state);

  let history = useHistory();
  return (
    <>
      <Row align="middle" className="col-icons" justify="center">
        <Col
          span={22}
          style={{
            height: "56px",
            boxShadow: "inset 0 -1px 0 #acb0bf",
            lineHeight: "16px",
            paddingBottom: "10px",
            paddingLeft: "4px",
            paddingTop: "10px",
            paddingRight: "10px",
            display: "flex",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
            <Icon
              path={mdiKeyboardBackspace}
              title="User Profile"
              size={1.5}
              //   color="grey"
              className="modal-icon"
            />
          </div>
          <Icon
            path={mdiDeleteOutline}
            title="User Profile"
            size={1.5}
            //   color="grey"
            className="modal-icon"
          />
          <Icon
            path={mdiArrowLeft}
            title="User Profile"
            size={1.5}
            //   color="grey"
            className="modal-icon"
            style={{ marginLeft: "auto", marginRight: "1em" }}
          />
          <Icon
            path={mdiArrowRight}
            title="User Profile"
            size={1.5}
            //   color="grey"
            className="modal-icon"
          />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={22}>
          <Title level={2}>{props.location.state.email.subject}</Title>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col
          span={21}
          style={{ border: "1px solid #acb0bf", marginTop: "1em" }}
        >
          <Row
            style={{
              background: "#e6eaf0",
            }}
          >
            <Col
              span={24}
              style={{
                display: "flex",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              <Text>From: {props.location.state.email.from}</Text>
              <Text style={{ marginLeft: "auto" }}>
                {dateFormat(props.location.state.email.date)}
              </Text>
            </Col>
          </Row>
          <Row
            style={{
              background: "#e6eaf0",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          >
            <Col
              span={24}
              style={{
                display: "flex",
              }}
            >
              <Text>
                To:{" "}
                {props.location.state.email.to.reduce(
                  (addresses: any, email: any, index: any, array: any) => {
                    if (index === array.length - 1) {
                      addresses += email.address;
                    } else {
                      addresses += email.address + ", ";
                    }
                    return addresses;
                  },
                  ""
                )}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{
                borderTopStyle: "solid",
                borderTopWidth: "1px",
                padding: "1em",
              }}
            >
              {props.location.state.email.body}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
