import React from 'react';
import {StyledImg, StyledLink, StyledLogo} from './Logo.styled';
import logo from './logo.png'


const Logo = function () {
    return (
        <StyledLogo>
            <StyledLink to="/trends">
                <StyledImg src={logo} alt="logo" />
            </StyledLink>
            <StyledLink to="/trends">Tik-Tuk</StyledLink>
        </StyledLogo>
    );
};

export default Logo;
