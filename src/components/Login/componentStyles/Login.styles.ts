import styled from 'styled-components';

export const Container = styled.section`        
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center; 

    &:after {
        background: url('/images/login-background.jpg') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export const Box = styled.section`    
    width: 100%;
    text-align: left;
    width: 580px;
    height: 661px;
    background: white;
    border-radius: 20px;
    padding: 56px 56px 72px 72px;   
`;

export const Logo = styled.section`
    display: flex;    
    align-items: center;
    justify-content: flex-start;
    text-align: start;
    margin-bottom: 20px;
    
    span {
        font-size: 16px;
        color: #000;
        line-height: 24px;
    }    
    img {
        width: 70px;    
    }        
`;

export const Content = styled.div`
        width: 100%;        

        a {
            color: #0000EE;
        }        

        input {
            width: 100%;
            padding: 20px;
            font-size: 16px;
            border: 1px solid transparent;
            border-radius: 5px;            
            background: #f0f0f0;            
        }        
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    padding: 14px 24px;
    border-radius: 26px;
    border-width: 2px;
    border-style: solid;
    border-color: #000;
    cursor: pointer;
    outline: none;
    user-select: none;
    color: #fff;
    background-color: #000;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 25px;
`

export const WhiteLogo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
        width: 20%;
        height: 20%;            
    }
`;

export const Step = styled.div`
    font-size: 14px;
    color: #000;
`;

export const Title = styled.div`
    font-size: 28px;            
    color: #000;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
`;

export const Message = styled.div`
    font-size: 16px;
    color: #252526;
    padding: 0;            
    margin-bottom: 25px;
`;

export const Footer = styled.div`
    display: flex;
    text-align: flex-start;
    flex-direction: column;
    justify-content: flex-start;        
    font-size: 12px;
    color: #666;
    line-height: 20px;
    
    strong {
        font-weight: bold;
        font-size: 14px;
    }

    span {
        font-weight: 100;
        font-size: 13px;
        line-height: 1.7;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #e0e0e0;    
`;

export const InputInfo = styled.div< { type: 'error' | 'info'}>`
    font-weight: 100;
    font-size: 13px;        
    color: ${({ type }) => (type === 'error' ? 'red' : '#666')};
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
`;

