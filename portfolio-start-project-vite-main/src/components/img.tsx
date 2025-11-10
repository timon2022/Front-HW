import tmp from "../assets/img/ABBY.jpg"
import styled from "styled-components"

type ImgProps =
{
    src?: string
    alt?: string
    width?: string
    height?: string
}
export const Img = (props:ImgProps)=>
{
    return (
        <StyledImg  {...props}></StyledImg>
    )
}

const BaseImg = styled.img<ImgProps>
const StyledImg = BaseImg.attrs((props) => ({
src: props.src || tmp,
alt: props.alt || "",
}))`
// display: block; 
max-width: ${props=>props.width || '100%'};
width: 100%;
height: ${props=>props.width || 'auto'} ;
object-fit:cover;
`;