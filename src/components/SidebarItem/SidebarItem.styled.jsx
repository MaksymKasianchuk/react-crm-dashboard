import styled from '@emotion/styled';

export const SidebarItemStyled = styled.a`
    padding: 10px;
    text-decoration: none;
    border-radius: 8px;
    background: transparent;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.sidebarColor};
    transition: all 250ms linear;
    & .sidebar-arrow{
        & path{
            transition: all 250ms linear;
            stroke: ${props => props.theme.colors.sidebarColor};
        }
    }
    &>div{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
    & span{
        margin-left: 14px;
    }
    &>svg{
        font-size: 14px;
    }
    &:hover, &.active{
        background: ${props => props.theme.colors.accentColor};
        color: ${props => props.theme.colors.whiteText};
        & .sidebar-arrow{
            & path{
                stroke: ${props => props.theme.colors.whiteText};
            }
        }
    }
    @media screen and (max-width: 740px) {
        padding: 5px;
        & span{
            display: none;
        }
        & .sidebar-arrow{
            display: none;
        }
    }
`;