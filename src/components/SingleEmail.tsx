import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { mdiDeleteOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";

export const SingleEmail = () => {
  return (
    <Row align="middle" className="col-icons">
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
          style={{ marginLeft: "auto" }}
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
  );
};
