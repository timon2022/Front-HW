import styled from "styled-components";




type BoxProps = {
    direction?:string
    justify?:string
    align?:string
    columngap?:string
    children?:React.ReactNode
    padding?:string
    self?:string
    rowgap?:string
    width?:string
    flex?:string
}

export const Box=styled.div<BoxProps>`
display:flex;
flex-direction: ${props=>props.direction || 'row'} ;
justify-content: ${props=>props.justify || 'flex-start'} ;
align-items:${props=>props.align || 'stretch'};
column-gap:${props=>props.columngap || '0px'};
row-gap:${props=>props.rowgap || '0px'};
padding:${props=>props.padding || '0px'};
align-self:${props=>props.self || 'auto'};
max-width:${props=>props.width || 'auto'};
flex:${props=>props.flex || '0 1 auto'};
flex-wrap:wrap;
z-index:999;
`

