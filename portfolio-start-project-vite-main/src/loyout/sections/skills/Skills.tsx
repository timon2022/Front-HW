import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { skills } from "../../../data/skillsData";
import { theme } from "../../../style/theme";


export const Skills = () => {
    return (
        <StyledSkills>
            <Skill skills={skills} />
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
// min-height: 100vh;
padding: 100px  50px 140px;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 55px 8px;
background-color: ${theme.colors.primaryBg};
color: ${theme.colors.secondaryFont};
`