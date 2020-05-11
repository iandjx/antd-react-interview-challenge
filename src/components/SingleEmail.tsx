import React from "react";
import { Row, Col, Typography } from "antd";

import { mdiDeleteOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";

const { Text } = Typography;
export const SingleEmail = () => {
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
          <Icon
            path={mdiKeyboardBackspace}
            title="User Profile"
            size={1.5}
            //   color="grey"
            className="modal-icon"
          />
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
        <Col span={21} style={{ border: "1px solid #acb0bf" }}>
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
              <Text>From: ian.dejesus@gmail.com</Text>
              <Text style={{ marginLeft: "auto" }}>
                05/10/2020 (20 hours ago)
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
              <Text>To: grizelmacjp@gmail.cm</Text>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{ borderTopStyle: "solid", borderTopWidth: "1px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
              Where does it come from? Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
