import React from "react";
import { Typography } from "antd";

function EmailCounter() {
  const { Title, Text } = Typography;
  return (
    <Title level={4}>
      Results:
      <Text className="counter"> 0 </Text>
      mail(s)
    </Title>
  );
}
export default EmailCounter;
