
import styled from 'styled-components'
import iconsSprite from '../../assets/img/footer/Icons-sprite.svg'

import { Icon } from '../icon/icon'
export const SocialMenu = () => {
    return (
        <StyledSocialMenuUl>
            <li>
                <a href="#"><Icon iconId='facebook' /></a>
            </li>
            <li>
                <a href=""><Icon iconId='instagram' width='20px' /></a>
            </li>
            <li>
                <a href=""><Icon iconId='twiter' width='20px' /></a>
            </li>
            <li>
                <a href=""><Icon iconId='linkedin' /></a>
            </li>
        </StyledSocialMenuUl>
    )
}

const StyledSocialMenuUl = styled.ul`
display:flex;
gap:15px;
`
