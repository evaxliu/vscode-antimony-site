import styled from "styled-components";
import { NavLink } from "../Header/styles";

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ServiceItem = styled("div")`
  flex: 0 0 100%; /* Each column takes 100% width on small screens */
  text-align: center;

  @media only screen and (min-width: 768px) {
    flex: 0 0 45%; /* Each column takes 45% width on larger screens */
  }
`;

export const ServiceContent = styled("div")`
  padding: 0.5rem 0;
  flex: 0 0 100%; /* Each column takes 100% width on small screens */

  @media only screen and (min-width: 768px) {
    flex: 0 0 45%; /* Each column takes 45% width on larger screens */
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  width: 100%; /* Added width property */

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  max-width: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 992px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #59b2e2;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #59b2e2;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  text-underline-position: under;
  text-decoration: #59b2e2 underline;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const InstructionsSection = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  background-color: #f8f8f8;
`;

export const Anchor = styled("a")`
  border-bottom: 1px solid #59b2e2;
`;