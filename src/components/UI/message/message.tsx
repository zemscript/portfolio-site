import React from "react";
import { Button, message } from "antd";
import styled from "styled-components";

export const Hidden = styled.div`
  position: absolute;
  display: none;
`;

const Message: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Скопировано",
      duration: 1,
    });
  };

  return (
    <Hidden>
      {contextHolder}
      <Button onClick={success}></Button>
    </Hidden>
  );
};

export default Message;
