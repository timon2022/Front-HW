
import iconsSprite from '../../assets/img/footer/Icons-sprite.svg'

type IconProps ={
    iconId?:string
    width?:string
    height?:string 
    viewBox?:string
}
export const Icon = (props:IconProps) => {
    return (
        <svg width={props.width || '18px'} height={props.height || '18px'} viewBox={props.viewBox || '0 0 18 18'} fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>)
}