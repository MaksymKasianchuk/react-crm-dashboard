import styled from '@emotion/styled';

export const TableSearchStyled = styled.div`
    position: relative;
    &>input{
        background: #F9FBFF;
        border-radius: 10px;
        padding: 10px 20px 10px 40px;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: ${props => props.theme.colors.darkText};
        outline: none;
        border: none;
        width: 216px;
        height: 38px;
        &::placeholder{
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: ${props => props.theme.colors.lightText};
        }
        @media screen and (max-width: 950px) {
            width: 100%;
        }
    }
    & .search-icon{
        position: absolute;
        width: 24px;
        height: 24px;
        top: 50%;
        left: 8px;
        transform: translateY(-50%); 
    }
`;