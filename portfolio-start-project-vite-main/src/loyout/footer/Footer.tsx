import styled from "styled-components";
import { HeaderMenu } from "../../components/menu/headerMenu/HeaderMenu";
import { Logo } from "../../components/logo/logo";
import { Box } from "../../components/Box";
import Wrapper, { FlexBox } from "../../components/FlexBox";
import Container from "../../components/Container";
import { SocialMenu } from "../../components/socialmenu/SocialMenu";



export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <StyledFooter>
                    <FlexBox justify="space-between">
                        <FlexBox direction="column" gap="20px">
                            <Logo />
                            <HeaderMenu  />
                        </FlexBox>
                        <WrapperForm>
                            <TitleForm>
                                Subscribe to my emailing list
                            </TitleForm>
                            <SubscribeForm>
                                <InputForm primary type="email" placeholder="Enter your email" />
                                <InputForm type="button" value='Subscribe' />
                            </SubscribeForm>
                            <DisclaimerForm>
                                By subscribing you agree to with  our
                                <a href="#">Privacy Policy</a>
                            </DisclaimerForm>
                        </WrapperForm>
                    </FlexBox>
                    {/* <LineBreak /> */}
                    <FlexBox justify="space-between" align="center">
                        <Copyright>2022 Relume. All right reserved.</Copyright>
                        <SocialMenu />
                    </FlexBox>
                </StyledFooter>
            </Container>
        </Wrapper>
    )
}



const StyledFooter = styled.footer`

padding:80px 0;

display:flex;
flex-direction:column;
justify-content:space-between;  
gap:64px;

`

const WrapperForm = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 400px;
max-width: 100%;
`

const TitleForm = styled.h4`
font-weight: 700;
font-size: 16px;
line-height: 150%;
color: #000;
`

const SubscribeForm = styled.form`
display: flex;
justify-content: space-between;  
gap: 16px;
`

type InpytFormProps = {
    primary?: boolean
}

const InputForm = styled.input<InpytFormProps>`

background: transparent;
padding: ${({ primary }) => (primary ? '12px' : '12px 24px')};
max-width: ${({ primary }) => (primary ? '257px' : '127px')};
width: 100%;
height: 48px;
font-weight: 400;
font-size: 16px;
`
const LineBreak = styled.hr`
// max-width: 100vw ;
max-width: cacl(100vw - 100px);
height: 1px;
margin: 0 -100px ;
background-color: black;
`

const DisclaimerForm = styled.p`

font-weight: 400;
font-size: 12px;
line-height: 150%;
color: #000;


margin: 0 0 24px;

& > a {
text-decoration: underline;
margin-left: 5px;
display: inline-block;
}
`
const Copyright = styled.small`
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #000;
`
