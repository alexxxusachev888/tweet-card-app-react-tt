import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    width: 380px;
    height: 460px;
  
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    border:1px solid black;
`
export const Questions = styled.img`
    position: relative;
    width: 308px;
    height: 168px;
    left: 36px;
    top: 28px;
`
export const Logo = styled.img`
    position: absolute;
    left: 20px;
    top: 20px;
`
export const Divider = styled.div`
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;

    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`
export const AvatarWrapper = styled.div`
    position: absolute;
    top: 178px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 100%;
`
export const Avatar = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 100%;
`
export const StatsWrapper = styled.div`
    margin-top: 110px;
    text-align: center;
`
export const Tweets = styled.p`
    margin-bottom: 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
`
export const Folowers = styled.p`
    margin-bottom: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
`

export const Button = styled.button`
    padding: 14px 28px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;

    padding: 14px 28px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`
