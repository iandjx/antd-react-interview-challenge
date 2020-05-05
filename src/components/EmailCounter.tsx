import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function EmailCounter() {
  const emailCount = useSelector((state: any) => state.filter.emailCount);

  const { Text } = Typography;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <React.Fragment>
      <Text style={{ fontStyle: "strong", fontSize: "15px" }}>
        Results:
        <Text className="counter"> {emailCount} </Text>
        mail(s)
      </Text>
      {isMobile && <hr style={{ width: "450px" }} />}
      {!isMobile && <hr />}
    </React.Fragment>
  );
}
export default EmailCounter;
