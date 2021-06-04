import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  margin: 1rem 0;
`;
const Header = ({ author, repository }) => {
  return (
    <StyledHeader>
      {author}/{repository}
    </StyledHeader>
  );
};

export default Header;
