
import styled from "styled-components";
import { theme } from "../../../style/theme";

type MenuProps = {
    primary?: boolean
}

export const HeaderMenu = (props: MenuProps) => {

    return (
        <StyledHeaderNav  >
            <ul>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Digital Assets</a>
                </li>
            </ul>
            <TalkLink  {...props}>Let’s Talk</TalkLink>
        </StyledHeaderNav>
    )
}

const StyledHeaderNav = styled.nav<MenuProps>`

display: flex;
align-items: center;
gap: 32px;
color: ${theme.colors.primaryFont};

ul {
display: flex;
gap: 32px;
align-items: center;
font-weight: 400;
font-size: 16px;
line-height: 150%;
}

@media ${theme.media.tablet}
{
display: none;
}
`
const TalkLink = styled.a<MenuProps>`
padding: 8px 20px;
background-color: black;
color: ${theme.colors.secondaryFont};
display: ${({ primary }) => (primary ? 'inline-block;' : 'none')};
`