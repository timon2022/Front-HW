
import styled from "styled-components";
import Container from "../../../components/Container";
import { theme } from "../../../style/theme";
import { Img } from "../../../components/img";



export const Profile = () => {
    return (
        <ProfileSection>
            <Container>
                <Wrapper>
                    <WrapperTitle>
                        <ProfileTitle>
                            About Me
                        </ProfileTitle>
                        <SubTitle>
                            I LOOK AT USUAL <br />
                            THINGS WITH MY  <br />
                            UNSUAL EYES.
                        </SubTitle>
                        <Img />
                    </WrapperTitle>
                    <WrapperDescription  >
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus
                            massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu
                            neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        </Description>
                        <Description>
                            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo
                            vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum
                            ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus.
                            Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
                        </Description>
                        <Description>
                            Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis
                            in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque
                            viverra lectus arcu, tincidunt ultrices pellentesque.
                        </Description>
                        <Img />
                    </WrapperDescription>
                </Wrapper>
            </Container>
        </ProfileSection>
    )
}



const ProfileSection = styled.section`
min-height: 100vh;
background-color: ${theme.colors.primaryBg};
color: ${theme.colors.primaryFont};
color: white;
`
const Wrapper = styled.div`
display: flex;
gap: 80px;
padding: 110px  0 200px;
`


const WrapperTitle = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
max-width: 530px;
width: 100%;
`


const ProfileTitle = styled.h3`
font-weight: 900;
font-size: 16px;
line-height: 150%;
`
const SubTitle = styled.h2`
margin: 0 0 235px;
font-weight: 254;
font-size: 48px;
line-height: 120%;
`

const WrapperDescription = styled.div`
max-width: 440px;
width: 100%;

p: last-of-type {
margin-bottom: 200px;
}
}
`

const Description = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 150%;
margin: 0 0 20px;
`