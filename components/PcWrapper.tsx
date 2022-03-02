import styled from "styled-components";

const PcWrapper = styled.li`
  display: none;
  @media only screen and (min-width: 600px) {
    display: block !important;
  }
`;

export default PcWrapper