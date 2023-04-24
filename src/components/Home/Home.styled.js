import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5199FF;
`
export const Inner = styled.div`
   text-align: center;
`
export const Header = styled.h1`
    font-size: 42px;
`
export const StyledLink = styled(Link).attrs({ as: Link })`
    padding: 10px 25px;      
    font-size: 28px; 
    border-radius: 25px;
    background-color: #FFC11E; 
    color: #FFFFFF;
    text-decoration: none;
    transition: box-shadow 0.3s linear;

  &:hover {
    color: #5199FF;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
