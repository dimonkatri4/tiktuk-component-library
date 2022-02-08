import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledLogo = styled.div`
    font-family: 'Special Elite', cursive;
    font-size: 20pt;
    display: flex;
    align-items: center;
    padding: 5px;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    padding-right: 5px;
    font-size: 2.2vw;
`

export const StyledImg = styled.img`
    width: 4vw;
    cursor: pointer;
`

