import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    transition: transform 250ms linear;
    padding-left: 306px;
    @media screen and (max-width: 950px) {
        padding-left: 230px;
    }
    @media screen and (max-width: 740px) {
        padding: 70px 0 0 0;
    }
    @media screen and (max-width: 520px) {
        padding: 130px 0 0 0;
    }
`;


export const Content = styled.div`
    padding: 40px 70px;
    width: 100%;
    @media screen and (max-width: 740px) {
        padding: 30px;
    }
`;

export const Concratulations = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: ${props => props.theme.colors.darkText};
    margin-bottom: 50px;
`;