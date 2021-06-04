import React from "react";
import styled from "styled-components";

const Content = styled.li`
  padding: 0.5rem;
  display: flex;
  border-bottom: 1px black solid;
`;
const Description = styled.div`
  flex: 1;
`;
const Comments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FirstLine = styled.p``;
const SecondLine = styled.p``;
const IssueItem = ({ data }) => {
  return (
    <Content>
      <Description>
        <FirstLine>{`#${data.number} ${data.title}`}</FirstLine>
        <SecondLine>
          {`작성자: ${data.user.login}, 작성일: ${data.created_at}`}
        </SecondLine>
      </Description>
      <Comments>
        <p>{`코멘트: ${data.comments}`}</p>
      </Comments>
    </Content>
  );
};

export default IssueItem;
