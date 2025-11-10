import styled from "styled-components";
import { theme } from "../../../style/theme";
import FlexBox from "../../../components/FlexBox";
import Container from "../../../components/Container";
import { Img } from "../../../components/img";





export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper>
                    <WrapperText >
                        <Title>
                            HELLO <br />
                            I’M ABBY
                        </Title>
                        <div>UI/UX Designer based in UK</div>
                    </WrapperText>
                    <WrapperImg>
                        <Img width="570px" height="570px"/>
                    </WrapperImg>
                </Wrapper>
            </Container>
        </StyledMain>)
}
const StyledMain = styled.section`
min-height: 100vh;
`

const Title = styled.div`
z-index: 0;

font-weight: 800;
font-size: 150px;
line-height: 117%;
color: ${theme.colors.primaryFont};
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 130px 0 100px;
position: relative;
`
const WrapperText = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
z-index: 1;

`


const WrapperImg = styled.div`
position: absolute;
left: 50%;
z-index: 0;

&::before {
content: '';
position: absolute;
top: 0;
left: 0;
display: block;
width: 100%;
height: 100%;
background-color: #E7E7E7;
transform: rotate(-10deg);
z-index: -1;
}
`

