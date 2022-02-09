import React from 'react';
import {StyledImg, StyledLink, StyledLogo} from './Logo.styled';

interface LogoType {
    logo:string
}

const Logo = function ({logo}:LogoType) {
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