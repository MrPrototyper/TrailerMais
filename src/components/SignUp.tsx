import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserEmail } from '../features/user/thunks';
import { useDispatch } from 'react-redux';

interface SignUpProps { }

const SignUp: React.FC<SignUpProps> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSignUp = () => {
        if (email === '') {
            setErrorMessage('Please enter a valid email address.');
        } else {
            dispatch(setUserEmail(email));
            navigate('/sign-up/create-password');
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);  // Update state with new email value
    };

    return (
        <Container>
            <Content>
                <CTA>
                    <CTAText>
                        <span>Stream brand new Originals, blockbusters, binge-worthy series and more</span>
                        <div style={textWithMarginTop}>All at no extra cost. Cancel at any time.*</div>
                    </CTAText>
                    <span>
                        <div style={textWithMarginBottom}>Enter your email to create or restart your subscription.</div>
                        <div>
                            <form>
                                <SignupButton errorMessage={errorMessage}>
                                    <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
                                    <span onClick={handleSignUp}>SIGN UP NOW</span>
                                </SignupButton>
                                <InputInfo>{errorMessage}</InputInfo>
                            </form>
                        </div>
                        <div style={textWithMarginTop}>Get 12 months for the price of 10 with an annual subscription, compared to paying monthly.</div>
                    </span>
                    <SmallText>
                        <small>
                            <div>*Effective at the end of the billing period. Subscription required.</div>
                            <div style={welcomeText}>Welcome to Wrexham S3 streaming June 12.</div>
                        </small>
                    </SmallText>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;

    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url('/images/login0background.jpeg');
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    text-align: center;
    transition-timing-function: ease-out;
    trnasition: opacity 0.2s;
    width: 100%;
`;

const CTAText = styled.span`
    width: 75%;
    margin: 300px 0 0 0;
    padding: 0;
    font-size: 50px;
    font-weight: bolder;
`;

const SignupButton = styled.div<{ errorMessage: string | null }>`
    color: #02172a;    
    width: 100%;
    letter-spacing: 1.76px;
    font-size: 16px;
    padding-top: 16.5px;
    margin: 8px 0 0;
    font-family: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin-right: 10px;
        background-color: #02d6e8;
        border: 1px solid #02d6e8;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 20px;
        padding-right: 20px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        width: 30%;

            &:hover {
                background-color: #00b6c3;
            }
    }

    input {
        font-size: 18px;
        font-family: inherit;
        padding: 11px;
        background-color: #31343e;
        color: #868891;
        border: 1px solid ${({ errorMessage }) => (errorMessage ? 'red' : '#31343e')};
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 55%;    
        outline: none;
        margin-left: 1px;

            &:focus {
                outline: solid 1px #868891;
                border: 0;
                padding: 10px;
            }
    }

  
`;

const SmallText = styled.small`
    color: silver;
    font-size: 0.9em;
    margin-top: 20px;
`;

export const InputInfo = styled.div`
    font-weight: 100;
    font-size: 13px;        
    color: #FF0000;
    margin: 0;    
    text-align: center;
    margin: 8px 0 0;    
`;

const welcomeText = {
    fontStyle: 'italic',
};

const textWithMarginTop: React.CSSProperties = {
    marginTop: '25px',
    fontFamily: 'inherit',
    fontSize: '20px',
}

const textWithMarginBottom: React.CSSProperties = {
    marginBottom: '10px',
    marginTop: '20px',
}

export default SignUp;
