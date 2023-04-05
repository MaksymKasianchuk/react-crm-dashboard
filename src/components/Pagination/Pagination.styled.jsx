import styled from '@emotion/styled';

export const PaginationStyled = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    &>li{
        display: block;
        cursor: pointer;
        font-weight: 500;
        font-size: 12px;
        line-height: 1;
        color: #404B52;
        padding: 6px 2px;
        width: 26px;
        height: 26px;
        background: ${props => props.theme.colors.paginBg};
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 4px;
        text-align: center;
        transition: all 250ms linear;
        &:hover, &.active{
            color: ${props => props.theme.colors.whiteText};
            background: ${props => props.theme.colors.accentColor};
            border: 1px solid ${props => props.theme.colors.accentColor};
        }
        &:not(:last-child){
            margin-right: 12px;
        }
        &.prev, &.next{
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            font-size: 10px;
        }
        &.dotted{
            color: ${props => props.theme.colors.darkText};
            background: transparent;
            border: 1px solid transparent;
            cursor: default;
            &:hover{
                color: ${props => props.theme.colors.darkText};
                background: transparent;
                border: 1px solid transparent;
            }
        }
    }
    @media screen and (max-width: 440px) {
        &>li{
            width: 22px;
            height: 24px;
            &:not(:last-child){
                margin-right: 10px;
            }
        }
    }
`;