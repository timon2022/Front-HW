
import styled, { css } from "styled-components";
import { theme } from "../../../style/theme";
import { SocialMenu } from "../../socialmenu/SocialMenu";
type MenuMobileProps = {
    primary?: boolean
    isOpen?: boolean
}

export const MobileMenu = (props: MenuMobileProps) => {

    return (
        <StyledMobileNav>
            <MobileNavPopup >
                <MobileNavUl >
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Digital Assets</a>
                    </li>
                </MobileNavUl>
                <SocialMenu />
            </MobileNavPopup>
            <TalkLink  {...props}>Let’s Talk</TalkLink>
            <BurgerButton >
                <span></span>
            </BurgerButton>
        </StyledMobileNav>
    )
}

const StyledMobileNav = styled.nav<MenuMobileProps>`
display: none;
color: ${theme.colors.primaryFont};

@media ${theme.media.tablet}
{
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
}
`
const MobileNavPopup = styled.div<MenuMobileProps>`
display: none;
position: fixed;
top: 0;
right: 0; 
bottom: 0;
left: 0;
z-index: 9999;
background-color: #F1F1F1;
display: none;


${props => props.isOpen && css<MenuMobileProps>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
`}

}
`
const MobileNavUl = styled.ul`
display: flex ;
flex-direction: column; 
gap: 32px;
font-weight: 400;
font-size: 16px;
line-height: 150%;

li {
display: block;
padding: 10px 10px;
position: relative;

&::after {
content: "";
display: block;
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 1px;
background-color: black;
}

}
`

const BurgerButton = styled.button<MenuMobileProps>`

width: 24px;
height: 24px;


span {
display: block;
width: 24px;
height: 2px;
background-color: black;



${props => props.isOpen && css<MenuMobileProps>`
    background-color: rgba(255, 255, 255, 0);
    position: fixed;
    top: 5vh; 
    right: 5vh;
    z-index: 99999;
    `}


&::before {
content:"";
display: block;
width: 24px;


height: 2px;
background-color: black;
transform: translateY(-10px);


${props => props.isOpen && css<MenuMobileProps>`
    transform:  rotate(-45deg) translateY(0) translateX(0);
    
    `}

}


&::after {
content:"";
display: block;
width: 24px;
height: 2px;
background-color: black;
transform: translateY(10px);

${props => props.isOpen && css<MenuMobileProps>`
    transform:  rotate(45deg) translateY(0) translateX(0)  ;
    `}

}

`
const TalkLink = styled.a<MenuMobileProps>`
padding: 8px 20px;
background-color: black;
color: ${theme.colors.secondaryFont};
display: ${({ primary }) => (primary ? 'inline-block;' : 'none')};
`