
import styled from "styled-components";
import Container from "../../../components/Container";
import FlexBox from "../../../components/FlexBox";
import { theme } from "../../../style/theme";
import { ProjectCard } from "./projectCard/ProjectCard";
import { projectsList } from "../../../data/projectsData";

export const Project = () => {
    return (<>
        <ProjectSection>
            <Container>
                <FlexBox direction="column" gap="70px">
                    <SectionTitle>
                        MY <br /> PROJECTS    
                    </SectionTitle>
                    <ProjectCard projectList={projectsList}/>
                </FlexBox>
            </Container>
        </ProjectSection>
    </>)


}
const ProjectSection = styled.section`
padding: 170px 0 230px;
min-height: 100vh;
`
const SectionTitle = styled.h2`
font-weight: 800; 
font-size: 120px;
line-height: 93%;
color: ${theme.colors.primaryFont};
`


