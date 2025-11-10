import styled from "styled-components";

import { Logo } from "../../components/logo/logo";
import { HeaderMenu } from "../../components/menu/headerMenu/HeaderMenu.tsx";
import FlexBox from "../../components/FlexBox.tsx";
import Container from "../../components/Container.tsx";
import { theme } from "../../style/theme.tsx";
import { MobileMenu } from "../../components/menu/mobileMenu/MobileMenu.tsx";


export const Header = () => {
    return (
        <StyledHeader >
            <Container>
                <FlexBox justify="space-between">
                    <Logo />
                    <HeaderMenu primary />
                    <MobileMenu  isOpen primary/>
                </FlexBox>
            </Container>
        </StyledHeader>
    )

}
const StyledHeader = styled.header`
display: flex; 
// position: fixed;
// top: 0; 
// left: 0; 
// right: 0;
align-items: center;
justify-content: space-between;  
padding:20px 0;
z-index: 99999;
// color: ${theme};



`
