import styled from "styled-components";

type FlexProps = {
    direction?: string
    justify?: string
    align?: string
    gap?: string
    children?: React.ReactNode
    wrap?: string
    self?: string
    flex?: string
}



export const FlexBox=styled.div<FlexProps>`
display:flex;
flex-direction: ${props=>props.direction || null} ;
justify-content: ${props=>props.justify || null} ;
align-items:${props=>props.justify || null};
gap:${props=>props.gap || null};
flex-wrap:${props=>props.wrap || null};
align-self: ${props=>props.self || null};
flex: ${props=>props.flex || null};
`

export default FlexBox;