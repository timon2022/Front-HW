

type Skill =
    {
        count: string
        descriptions: {
            title: string
            content: string
        }
    }

export type SkillProps = {
    skills: Skill[];
}