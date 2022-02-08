import React from 'react';
import {StyledImg, StyledLink, StyledLogo} from './Logo.styled';


const Logo = function ({logo}) {
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
