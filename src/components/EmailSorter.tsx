import React from "react";
import { Button } from "antd";

export default function EmailSorter() {
  return (
    <div className="site-button-ghost-wrapper">
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        link
      </Button>
      <Button type="link" ghost>
        link
      </Button>
    </div>
  );
}
