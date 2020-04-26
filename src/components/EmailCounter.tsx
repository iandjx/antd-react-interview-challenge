import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";

function EmailCounter() {
  const emailCount = useSelector((state: any) => state.filter.emailCount);

  const { Title, Text } = Typography;
  return (
    <Title level={4}>
      Results:
      <Text className="counter"> {emailCount} </Text>
      mail(s)
    </Title>
  );
}
export default EmailCounter;
