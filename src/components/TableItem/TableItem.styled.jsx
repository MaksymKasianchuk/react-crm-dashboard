import styled from '@emotion/styled';

export const TableItemStyled = styled.tr`
    & span{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        display: inline-block;
        padding: 4px 12px;
        border-radius: 4px;
        background: transparent;
        border: 1px solid transparent;
        width: 84px;
        text-align: center;
        &.active{
            border-color: ${props => props.theme.colors.activeBorder};
            background: ${props => props.theme.colors.activeBg};
            color: ${props => props.theme.colors.activeColor};
        }
        &.inactive{
            border-color: ${props => props.theme.colors.inactiveBorder};
            background: ${props => props.theme.colors.inactiveBg};
            color: ${props => props.theme.colors.inactiveColor};
        }
    }
`;