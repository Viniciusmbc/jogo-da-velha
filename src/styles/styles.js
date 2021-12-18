import styled from "styled-components";
import { device } from "./devices";

export const Square = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-color: black;
    border-style: solid;
    background-color: ${({ color }) => color};
  }
`;

export const Grid = styled.div`
  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px;
    margin: 0 auto;
  }
`;
