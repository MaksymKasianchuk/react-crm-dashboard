import styled from '@emotion/styled';

export const TableStyled = styled.div`
    background: ${props => props.theme.colors.cardBgColor};
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    border-radius: 30px;
    max-width: 1200px;
`;

export const TableHeader = styled.div`
    padding: 30px 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>div:first-oa-type{
        margin-right: 20px;
    }
    & h2{
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        color: ${props => props.theme.colors.darkText};
    }
    & p{
        margin-top: 7px;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #16C098;
    }
    @media screen and (max-width: 950px) {
        flex-direction: column;
        text-align: center;
        &>div:first-of-type{
            margin: 0 0 20px 0;
        }
        &>div{
            width: 100%;
        }
    }
`;

export const TableBodyWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const TableBody = styled.table`
    border-collapse: collapse;
    width: 100%;
    &>thead{
        border-bottom: 1px solid ${props => props.theme.colors.border};
        &>tr{
            &>th{
                text-align: start;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                color: ${props => props.theme.colors.lightText};
                padding: 15px;
                white-space: nowrap;
                &:first-of-type{
                    padding-left: 38px;
                }
                &:last-child{
                    padding-right: 38px;
                }
            }
        }
    }
    &>tbody{
        &>tr{
            &>td{
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                color: #292D32;
                padding: 15px; 
                white-space: nowrap;
                border-bottom: 1px solid ${props => props.theme.colors.border};
                &:first-of-type{
                    padding-left: 38px;
                }
                &:last-child{
                    padding-right: 38px;
                }
            }
        }
    }
    @media screen and (max-width: 950px) {
        &>tbody{
            &>tr{
                &>td{
                    padding: 10px; 
                }
            }
        }
    }
`;

export const TableFooter = styled.div`
    padding: 30px 38px 40px 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>p{
        margin-right: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #B5B7C0;
    }
    @media screen and (max-width: 1100px) {
        flex-direction: column;
        &>p{
            text-align: center;
            margin: 0 0 20px 0;
        }
    }
`;
