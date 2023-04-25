import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 320px) {
        width: 320px;
      }
    
      @media screen and (min-width: 768px) {
        width: 768px;
        padding-left: 32px;
        padding-right: 32px;
      }
    
      @media screen and (min-width: 1280px) {
        width: 1280px;
        padding-left: 32px;
        padding-right: 32px;
      }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const CenteredImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledLink = styled(Link).attrs({ as: Link })`  
    padding: 10px 20px;      
    font-size: 20px; 
    border-radius: 10.3108px;
    background-color: #FFC11E; 
    color: #FFFFFF;
    text-decoration: none;
    transition: box-shadow 0.3s linear;
  &:hover {
    color: #5199FF;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled.h1`
    font-size: 42px;
`

export const TweetDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly; 
    flex-wrap: wrap;
    gap: 60px;
`
export const Select = styled.select`
    margin: 10px;
    padding: 10px 20px;
    font-size: 20px;
    background-color: white;
    border: 2px solid #4caf50;
    border-radius: 4px;
    appearance: none; // Removes the default browser styling for the select element
    outline: none;
    cursor: pointer;

    &:hover {
    border-color: #45a049;
    background-color: #4caf50;
    }

`
export const Option = styled.option`
    font-size: 16px;
    padding: 20px 8px;
    background-color: #f1f1f1;

    &:hover,
    &:focus,
    &:active {
    background-color: #45a049;
    }
`
export const Button = styled.button`

    padding: 14px 28px;
    margin-top: 50px;
    margin-bottom: 100px;
    padding: 15px 30px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px; 
    line-height: 22px;

    border: none;
    border-radius: 10.3108px;
    background-color: #4caf50;
    color: white;

    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
    background-color: #45a049;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
}
`