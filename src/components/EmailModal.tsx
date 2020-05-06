import React from "react";

import { Modal, Button } from "antd";
function EmailModal() {
  const [visible, setVisibility] = React.useState(false);

  const showModal = () => {
    setVisibility(true);
  };

  const handleOk = (e: any) => {
    console.log(e);
    setVisibility(false);
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisibility(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default EmailModal;
