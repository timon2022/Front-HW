import styled from "styled-components";
import { SkillProps } from '../../../../types/skill'





export const Skill = (props: SkillProps) => {
    return (<>
        {props.skills.map(skill => {
            return (<StyledSkill>
                <Count>
                    {skill.count}
                </Count>
                <SkillDescriptions>
                    <SkillTitle>{skill.descriptions.title}</SkillTitle>
                    <SkillText>{skill.descriptions.content}</SkillText>
                </SkillDescriptions>
            </StyledSkill>)
        })}
    </>)


}



const StyledSkill = styled.article`
display: flex;
max-width: 440px;
width: 100%;
gap: 25px;
`
const Count = styled.div`
padding:15px;
font-weight: 100;
font-size: 70px;
`
const SkillDescriptions = styled.div`

`
const SkillTitle = styled.h3`
font-weight: 300;
font-size: 30px;
margin: 0 0 5px;
`

const SkillText = styled.p`
font-weight: 200;
font-size: 18px;
line-height: 123%;
`