type ProjectList =
    {
        caption: string,
        spanTitle: string,
        mainTitle: string,
        description: string,
        srcBg: string,
    }


export type ProjectCardProps =
    {
        background?: string
        children?: React.ReactNode
        projectList?: ProjectList[]
    }
