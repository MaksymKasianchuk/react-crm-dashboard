import styled from '@emotion/styled';

export const SidebarStyled = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100vh;
    width: 306px;
    background: ${props => props.theme.colors.cardBgColor};
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 36px 28px 76px 28px;
    &>div{
        width: 100%;
    }
    @media screen and (max-width: 950px) {
        width: 230px;
    }
    @media screen and (max-width: 740px) {
        padding: 15px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        &>div{
            width: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    @media screen and (max-width: 520px) {
        height: 130px;
        &>div{
            width: 100%;
            flex-direction: column;
        }
        &>div:last-child{
            display: none;
        }
    }
`;
export const SidebarLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &>span{
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: #838383;
        padding-top: 12px;
        padding-left: 5px;
    }
    &>svg{
        cursor: pointer;
        transition: all 250ms linear;
        &:hover{
            opacity: 0.8;
        }
    }
    @media screen and (max-width: 950px) {
        &>svg{
            width: 130px;
        }
        &>span{
            padding-top: 6px;
        }
    }
    @media screen and (max-width: 740px) {
        margin-right: 15px;
    }
    @media screen and (max-width: 520px) {
        margin: 0 0 15px 0;
    }
`;
export const Navigation = styled.nav`
    margin-top: 65px;
    &>a{
        &:not(:last-child){
            margin-bottom: 18px;
        }
    }
    @media screen and (max-width: 740px) {
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>a{
            &:not(:last-child){
                margin: 0 10px 0 0;
            }
        }
    }
`;
export const SidebarBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & img {
        border-radius: 50%;
    }
    &>div{
        margin-left: 12px;
    }
    & .user-name{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: ${props => props.theme.colors.darkText};
    }
    & .user-role{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #757575;        
    }
    @media screen and (max-width: 740px) {
        &>div{
            display: none;
        }
    }
    @media screen and (max-width: 520px) {
        & img {
            display: none;
        }
    }
`;