import styled from "styled-components";
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export const LayoutStyles = styled(Layout)`
    background-color: #f9eeeb;
    min-height: 100vh;
`;

export const WrapperContent = styled(Content)`
	max-width: 1280px;
    margin: 0 auto;
    display: flex;
    .wrapper-recipe-card{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
export const HeaderStyles = styled(Header)`
    display: flex;
    align-items: center;
    background-color: #89b0ae;
    @media (max-width: 768px) {
        height: 260px;
        padding: 40px;
        main{
        display: flex;
        flex-direction: column;
        gap: 8px;
        div{
            width: auto;
            margin: 0%;
        }
    }
}
`;
export const FooterStyles = styled(Footer)`
    text-align: center;
`;
