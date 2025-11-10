import { ProjectCardProps } from "../../../../types/project";
import styled from "styled-components";
import Barbeque from "../..//..//..//assets/img/Projects/Barbeque.webp"
import FlexBox from "../../../../components/FlexBox";
import { Icon } from "../../../../components/icon/icon";


export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <>
            {
                props.projectList?.map((project) => {
                    return (
                        <StyledProjectCard background={project.srcBg}>
                            <FlexBox direction="column" gap="15px" flex="1">
                                <Caption>{project.caption}</Caption>
                                <Title>
                                    <span>{project.spanTitle}</span>
                                    <br />
                                    {project.mainTitle}
                                </Title>
                            </FlexBox>
                            <FlexBox direction="column" gap="60px" self="end" flex="1">
                                <Description>
                                    {project.description}
                                </Description>
                                <Link>
                                    View More
                                    <span><Icon iconId="twiter" width="24" height="24" viewBox="0 0 24 24" /></span>
                                </Link>
                            </FlexBox>
                        </StyledProjectCard>
                    )
                })
            }
        </>
    )
}


const StyledProjectCard = styled.article<ProjectCardProps>`
width: 100%;
height: 477px;
display: flex;
gap:80px;
padding: 90px 45px 100px;
position: relative;
color: white;

background: url(${props => props.background || Barbeque});
background-size: cover;

&:: before {
content: '';
position: absolute;
inset:0;
display: block;
width: 100%;
height: 100%;
opacity: 50%;
background-color: black;
z-index: 1;
}

> * {
z-index: 2;
}
`
const Caption = styled.h4`
font-weight: 600;
font-size: 16px;
line-height: 150%;
`

const Title = styled.p`
font-weight: 800;
font-size: 45px;
line-height: 120%;
span {
font-weight: 100;
}
`



const Description = styled.p`

font-weight: 400;
font-size: 18px;
line-height: 150%;

`

const Link = styled.a`


font-weight: 400;
font-size: 16px;
line-height: 150%;

padding: 8px;
span{
background:;
padding-left:4px;
}
margin: 0 0 10px  ;
`