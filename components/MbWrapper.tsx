import styled from "styled-components";

const MbWrapper = styled.li`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block !important;
  }
`;

export default MbWrapper