import React, { useState } from 'react';
import styled from "styled-components"
import FloatingLabelInput from "./components/FloatingLabelInput";
import { Box, Button, Container, Content, Footer, InputInfo, Line, Logo, Message, Step, Title, WhiteLogo } from "./componentStyles/Login.styles";
import { useNavigate } from "react-router-dom";
import { setUserEmail } from '../../features/user/thunks';
import { useDispatch } from 'react-redux';

interface LoginStep1Props {}

const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

const LoginStep1: React.FC<LoginStep1Props> = () => {    
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();      
    const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();                
        if (!email) {
            setErrorMessage('Email is required');
        } else if (!validateEmail(email)) {
            setErrorMessage('Invalid email address');
        } else {
            setErrorMessage(null);
            dispatch(setUserEmail(email));      
            navigate('/login/enter-password');
        }        
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const navigateHome = () => {
        navigate('/');
    }
    
    return (
        <Container>
            <WhiteLogo onClick={navigateHome}>
                <img src='/images/white-logo.png' />
            </WhiteLogo>
            <Box>
                <Logo>
                    <span>My</span>
                    <img src='/images/small-disney.png' />                    
                </Logo>
                <Content>                    
                    <Step>STEP 1</Step>
                    <Title>Enter your email address to continue</Title>
                    <Message>
                        <div>Log in to Disney+ with your MyDisney account. If you don't have one, you will be prompted to create one.</div>                    
                    </Message>                     
                    <form  onSubmit={handleContinue}>                        
                        <FloatingLabelInput label="Email" value={email} onChange={handleEmailChange}/>
                        <InputInfo type="error">{errorMessage ? errorMessage : null}</InputInfo>
                        <Button type="submit">Continue</Button>                        
                    </form>
                </Content>
                <Line />
                <Footer>
                    <p><strong>Disney+ is part of The Walt Disney Family of Companies</strong></p>
                    <span>MyDisney lets you seamlessly log in to services and experiences across The Walt Disney Family of Companies, such as Disney+, ESPN, Walt Disney World, and more.</span>
                    <Brands>
                        <div><svg data-testid="disney-logo" fill="none" height="100%" viewBox="0 0 57 32" xmlns="http://www.w3.org/2000/svg"><mask height="18" id="mask0_24538_4599" maskUnits="userSpaceOnUse" width="21" x="2" y="5"><path d="M2.1377 5.8667H22.8616V22.5736H2.1377V5.8667Z" fill="#F9F9F9"></path></mask><g mask="url(#mask0_24538_4599)"><path clipRule="evenodd" d="M3.23393 8.38837C2.61643 8.40655 2.14947 8.13819 2.13777 7.76146C2.12974 7.48655 2.73408 6.62837 3.10239 6.48946C3.35451 6.39491 4.5822 5.93091 6.62762 5.87055C7.38616 5.848 8.67377 5.94037 9.76043 6.1011C16.0889 7.03419 22.7316 11.8378 22.8595 16.0982C22.9457 18.9971 20.4304 21.7164 15.5196 21.8618C14.3087 21.8981 13.0988 21.761 11.9272 21.4546C11.9038 22.1666 11.9564 22.5433 10.9428 22.5731C10.3231 22.592 10.0812 21.5913 9.98989 20.7782C7.02589 19.4691 5.23989 17.3418 5.21431 16.5026C5.17704 15.2516 7.4607 14.2095 10.1309 13.7971C10.1689 12.7622 10.345 10.1266 10.8939 10.1098C11.1138 10.104 11.5713 10.6131 11.7437 11.3927C11.9001 12.1004 11.9162 13.3913 11.9184 13.6211L12.1201 13.6138C15.8675 13.5033 18.1131 14.6691 18.154 16.0502C18.1862 17.1215 17.2333 17.6698 16.7342 17.6844C16.235 17.6989 15.6497 17.4167 15.6453 17.2626C15.6358 16.968 16.7108 16.8989 16.6969 16.4226C16.675 15.7033 13.6956 15.3884 11.8599 15.3767C11.8577 15.9964 11.8497 16.744 11.8643 17.2466C11.8789 17.7295 11.9089 18.9767 11.9242 20.0175C12.7573 20.192 13.6145 20.2873 14.4556 20.2626C16.4345 20.2044 20.9551 19.4858 20.8542 16.1047C20.7132 11.3818 11.3323 7.04291 6.30754 7.19201C4.32862 7.25019 3.14112 7.4611 3.14697 7.65528C3.15062 7.78401 4.11085 7.83346 4.11816 8.08873C4.12547 8.34328 3.57301 8.37819 3.23393 8.38837ZM10.1105 15.4487C8.23239 15.5884 5.82962 15.9353 5.85008 16.5906C5.86981 17.2756 7.64047 18.592 9.96577 19.4487C10.0739 18.0473 10.101 16.5615 10.1112 15.4487" fill="#86898F" fillRule="evenodd"></path></g><path clipRule="evenodd" d="M24.3125 13.5985C24.6552 13.5891 25.1455 14.3622 25.1616 14.8443C25.1762 15.3272 25.2997 17.8516 25.3355 18.5789C25.3721 19.3062 25.3465 20.0029 25.2961 20.3251C25.2449 20.6472 25.1207 20.8065 24.5317 20.8225C23.9434 20.8392 23.6694 20.5098 23.619 20.0225C23.5693 19.5352 23.5254 18.1534 23.551 17.4603C23.5766 16.768 23.6117 15.4429 23.7074 14.6131C23.8038 13.784 24.0399 13.6058 24.3125 13.5985ZM22.8348 10.6254C22.7879 10.538 22.764 10.4402 22.7654 10.3411C22.7566 10.0342 23.2791 8.85888 24.5923 8.76288C24.2576 8.99561 23.92 9.29379 23.5839 9.67488C23.2696 10.0342 23.019 10.3498 22.8348 10.6254ZM23.9807 11.2589C24.2511 10.8712 25.6578 8.96215 27.1062 8.91851C27.5315 8.90542 27.6433 9.17233 27.6521 9.46688C27.666 9.92579 26.846 11.2676 24.9994 11.3236C24.6585 11.3353 24.3173 11.3136 23.9807 11.2589ZM27.305 7.93306C27.2151 7.70542 26.914 7.24579 25.839 7.27851C23.4962 7.34833 21.6948 9.10833 21.735 10.4945C21.7482 10.9454 21.963 11.3396 22.278 11.6632C22.1954 11.8902 22.1874 12.0414 22.1903 12.128C22.1976 12.3687 22.5542 13.0043 22.829 12.9963C23.0606 12.9891 23.2192 12.7687 23.4428 12.4116C23.825 12.5614 24.205 12.6371 24.5076 12.6283C26.7094 12.5622 28.7073 10.4683 28.6686 9.13015C28.6503 8.51342 28.2564 7.91779 27.305 7.93306ZM30.2068 13.3025C31.5259 13.2632 33.1789 13.4356 33.1913 13.8611C33.1986 14.1098 33.0693 14.6291 32.3655 14.7011C31.5354 14.7862 27.3473 14.9651 27.3627 15.4865C27.3707 15.7622 28.6291 15.8232 29.7837 15.8938C30.969 15.9665 32.8741 16.0109 32.9311 17.9462C32.9757 19.4734 32.4028 19.7963 32.1441 19.9178C31.8167 20.0727 30.7162 20.4945 29.8721 20.5192C27.3291 20.5956 26.2804 19.1229 26.2585 18.3738C26.2388 17.7083 26.9169 17.1185 28.0584 17.0843C29.1984 17.0502 30.9661 17.4654 30.98 17.9382C30.991 18.3214 30.212 18.5185 29.867 18.5294C28.3105 18.576 28.3865 17.9382 27.4891 17.9651C26.9776 17.9796 26.2614 19.0749 28.822 18.9978C31.1042 18.9302 31.7963 18.1716 31.7838 17.7643C31.7678 17.2254 30.1301 16.9622 29.183 16.9134C28.236 16.8632 26.8153 16.8698 26.3294 16.5607C25.8449 16.2516 25.9128 15.552 26.0809 14.9731C26.4317 13.7636 28.8871 13.3425 30.2068 13.3025ZM34.9174 13.9156C35.8016 13.8887 37.6548 17.9062 37.9669 17.8967C38.2796 17.888 38.0473 16.9585 37.85 15.9323C37.4035 13.6109 36.7078 12.4138 37.3618 12.3942C37.8441 12.3796 39.4299 13.9171 39.5176 16.8931C39.5592 18.2749 39.3648 20.0836 38.1152 20.1207C36.9314 20.1563 35.5816 16.408 35.2747 16.4167C35.1096 16.4218 35.0957 18.7389 35.0518 19.4378C35.008 20.1367 34.7646 20.5105 34.3759 20.5214C33.7869 20.5396 33.5282 19.9738 33.4953 18.8574C33.4617 17.7418 33.8271 13.9483 34.9174 13.9156ZM43.6457 16.2865C44.0798 16.2742 44.4634 16.2051 44.4254 16.7454C44.3867 17.2865 44.3626 17.504 43.9102 17.5163L41.59 17.5825C41.5133 17.8298 41.3145 18.4676 41.2254 18.7367C41.1136 19.0742 41.4665 19 41.9211 18.8749C42.3763 18.7512 43.6113 18.528 44.1185 18.5134C44.6264 18.4989 45.0049 19.2742 44.7133 19.5403C44.4218 19.8072 42.8521 21.0771 41.2137 21.1243C40.5107 21.144 39.5563 20.5556 39.5241 19.5011C39.5066 18.9425 39.7405 18.1927 39.9648 17.6109C39.91 17.5782 39.8683 17.5018 39.8362 17.3338C39.7631 16.9542 39.5848 16.5374 40.2432 16.4654C40.3089 16.4587 40.3747 16.4529 40.4405 16.448L40.9842 15.3738C40.7919 15.3517 40.6037 15.3027 40.4252 15.2283C40.0255 15.0465 39.7142 14.5745 39.7076 14.3636C39.693 13.9011 43.2328 13.624 44.052 13.6007C44.9326 13.576 45.1825 13.7389 45.4638 14.1243C45.7445 14.5091 45.8512 14.7811 45.8541 14.8865C45.8577 14.992 45.7554 15.2531 44.6922 15.2836C44.1477 15.2989 43.2679 15.3869 42.4238 15.4167L42.0563 16.3556C42.8776 16.3171 43.6457 16.2865 43.6457 16.2865ZM48.6332 18.9091C49.7557 16.7258 50.9132 15.4814 51.321 15.4691C52.0261 15.448 51.4291 18.624 48.6332 18.9091ZM46.1457 19.4712C45.2263 21.2749 44.6074 23.1876 44.6505 24.6269C44.6987 26.2487 45.6999 26.8531 46.0039 26.8443C46.3086 26.8349 46.3232 26.3556 46.378 25.9978C46.6549 24.1722 47.1422 22.3844 47.8301 20.6698C48.0712 20.7302 48.3102 20.7585 48.5309 20.752C50.3951 20.6967 52.556 18.4807 52.4858 16.1214C52.4485 14.8756 51.9699 13.992 51.1668 14.016C49.9931 14.0502 48.3051 15.816 46.9502 18.032C46.8289 17.1323 47.5422 15.7483 48.1494 14.7803C48.5762 14.1003 48.5016 13.2923 48.3248 13.2967C48.0763 13.3047 45.6707 15.3302 45.754 18.1083C45.77 18.6487 45.9111 19.1011 46.1457 19.4712Z" fill="#86898F" fillRule="evenodd"></path></svg></div>
                        <div><svg data-testid="abc-logo" fill="none" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16 5.03711C9.94547 5.03711 5.03711 9.97093 5.03711 16.0575C5.03711 22.1447 9.94547 27.0786 16 27.0786C22.0546 27.0786 26.9629 22.144 26.9629 16.0575C26.9629 9.97093 22.0546 5.03711 16 5.03711ZM10.6153 19.2509V18.3382C10.1542 18.864 9.62911 19.2138 8.85456 19.2095C7.9731 19.2052 7.1292 18.852 6.50754 18.2271C5.88588 17.6021 5.53708 16.7564 5.53747 15.8749C5.53747 14.0335 7.02256 12.5404 8.85384 12.5404C10.6866 12.5404 12.28 14.0218 12.28 15.8633L12.2822 19.2393L10.6153 19.2509ZM16.0829 19.3026C14.2502 19.3026 12.6575 17.8218 12.6575 15.9797L12.6553 10.3687H14.3193L14.3215 13.5047C14.7833 12.9797 15.3084 12.6291 16.0829 12.6335C16.9644 12.6379 17.8082 12.9913 18.4297 13.6164C19.0513 14.2414 19.3999 15.0873 19.3993 15.9687C19.3993 17.8102 17.9142 19.3026 16.0829 19.3026ZM23.2153 19.2247C21.3833 19.2247 19.8982 17.7317 19.8982 15.8902C19.8982 14.0487 21.3833 12.5557 23.2153 12.5557C24.8146 12.5557 26.1535 13.7287 26.4677 15.2429L24.8 15.2364C24.6705 14.9321 24.4538 14.673 24.1772 14.4918C23.9006 14.3106 23.5765 14.2154 23.2458 14.2182C23.0241 14.2187 22.8047 14.2628 22.6001 14.3482C22.3955 14.4335 22.2097 14.5583 22.0533 14.7155C21.8969 14.8726 21.7731 15.0591 21.6888 15.2641C21.6046 15.4692 21.5615 15.6889 21.5622 15.9106C21.5615 16.1323 21.6046 16.352 21.6888 16.5571C21.7731 16.7622 21.8969 16.9487 22.0533 17.1059C22.2096 17.2631 22.3954 17.388 22.6 17.4734C22.8047 17.5588 23.0241 17.6031 23.2458 17.6037C23.9433 17.6037 24.5513 17.1978 24.8073 16.5906L26.4749 16.5826C26.3196 17.3312 25.9102 18.0032 25.3162 18.4846C24.7221 18.966 23.9799 19.2272 23.2153 19.224V19.2247Z" fill="#86898F" fillRule="evenodd"></path><path clipRule="evenodd" d="M16.0401 14.187C15.8185 14.1876 15.5991 14.2318 15.3945 14.3172C15.1899 14.4025 15.0042 14.5273 14.8478 14.6845C14.6915 14.8417 14.5676 15.0281 14.4833 15.2331C14.399 15.4381 14.3559 15.6577 14.3565 15.8794C14.3555 16.327 14.5323 16.7567 14.848 17.074C15.1637 17.3914 15.5925 17.5704 16.0401 17.5717C16.4878 17.5704 16.9165 17.3914 17.2322 17.074C17.5479 16.7567 17.7247 16.327 17.7238 15.8794C17.7243 15.6577 17.6813 15.4381 17.597 15.2331C17.5127 15.0281 17.3888 14.8417 17.2325 14.6845C17.0761 14.5273 16.8904 14.4025 16.6858 14.3172C16.4812 14.2318 16.2618 14.1876 16.0401 14.187ZM8.87505 14.187C8.65338 14.1876 8.43399 14.2318 8.22941 14.3172C8.02483 14.4025 7.83907 14.5273 7.68273 14.6845C7.52639 14.8417 7.40253 15.0281 7.31823 15.2331C7.23393 15.4381 7.19084 15.6577 7.19141 15.8794C7.19045 16.327 7.36724 16.7567 7.68294 17.074C7.99864 17.3914 8.42742 17.5704 8.87505 17.5717C9.32267 17.5704 9.75145 17.3914 10.0672 17.074C10.3829 16.7567 10.5597 16.327 10.5587 15.8794C10.5593 15.6577 10.5162 15.4381 10.4319 15.2331C10.3476 15.0281 10.2237 14.8417 10.0674 14.6845C9.91103 14.5273 9.72527 14.4025 9.52069 14.3172C9.31611 14.2318 9.09672 14.1876 8.87505 14.187Z" fill="#86898F" fillRule="evenodd"></path></svg></div>
                        <span><svg data-testid="espn-logo" fill="none" height="100%" viewBox="0 0 56 32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M30.4732 21.2446H26.9096L27.7197 14.8068H37.7816C37.7088 15.494 37.7088 17.1828 34.783 17.1217H30.9866L30.4732 21.2453M38.2186 14.8068H41.8186L41.0186 21.2446H37.3932L38.2186 14.8068ZM45.2026 14.8068H48.8026L48.0026 21.2446H44.3772L45.2026 14.8068ZM15.2063 21.2446H5.92773L6.69137 14.8075H16.0201L15.727 17.1224H9.9641L9.77501 18.3151H15.5823L15.2063 21.246M16.1692 13.6853H6.81937L7.18301 10.7559H16.535L16.1692 13.6853ZM19.8463 10.7559H35.4266C37.7088 10.7559 38.0906 11.8948 37.9096 13.6853H16.7081C16.9626 11.5333 17.8914 10.7559 19.8463 10.7559ZM22.711 21.2446H15.7597L16.1277 18.3151H23.2186L23.3641 17.1217H18.4608C17.735 17.1653 16.3052 17.1944 16.5779 14.8068H25.3634C26.0732 14.8068 27.1088 15.2046 26.927 16.5428L26.6048 18.8046C26.3066 20.6104 25.1386 21.2446 22.711 21.2446ZM48.927 13.6853H38.3641L38.7088 10.7559H46.8368C48.8732 10.7559 49.1096 11.8948 48.9277 13.6853" fill="#86898F" fillRule="evenodd"></path></svg></span>
                        <span><svg data-testid="marvel-logo" fill="none" height="100%" viewBox="0 0 57 32" xmlns="http://www.w3.org/2000/svg"><path d="M49.6673 7.55566V24.4437H7.3623V7.55639H49.6665L49.6673 7.55566ZM11.9501 8.85603H8.66015V23.1346H11.2566V16.2524L12.4346 23.136H13.8084L14.9696 16.2524V23.136H19.9578L20.2633 20.9397H22.2715L22.5769 23.136H27.4731V18.5004L28.073 18.4124L29.3153 23.1375H31.8489L30.2178 17.6C31.0129 17.0124 31.9081 15.5549 31.751 14.1258L31.7276 13.9615C31.7276 13.9709 32.1405 16.4342 32.5388 18.8066L32.6206 19.2953L33.1614 22.512L33.2016 22.752L33.2673 23.1469L36.2788 23.1375L38.3382 10.1949V23.1375H43.2248V20.5724H40.9068V17.2931H43.2248V14.6851H40.9068V11.4618H43.2248V8.85821H35.961L34.7647 17.5557L33.5845 8.85748H30.9588L31.2519 11.1797C30.9464 10.5848 29.878 8.85676 27.5169 8.85676H24.8971L24.8869 21.5338L22.9774 8.85676H19.5457L17.5712 21.9913V8.85748H14.2878L13.104 16.2349L11.9508 8.85603H11.9501ZM46.2378 8.85457H43.6728V23.1338H48.4374V20.5731H46.2378V8.85457ZM21.2674 12.5768L22.0055 18.6829H20.5578L21.2681 12.5768H21.2674ZM29.194 13.6786C29.1955 14.8349 28.681 15.5644 28.0782 15.8568V15.8626C27.8882 15.9557 27.6784 16.0044 27.4672 16.0058V11.4073H27.4804C27.6835 11.4073 29.194 11.4669 29.194 13.6786Z" fill="#86898F"></path></svg></span>
                        <span><svg data-testid="starwars-logo" fill="none" height="100%" viewBox="0 0 51 32" xmlns="http://www.w3.org/2000/svg"><path d="M39.0999 16.3667C38.7829 16.3689 38.4695 16.43 38.1746 16.5456C37.7721 16.6854 37.4178 16.9339 37.1522 17.2626C36.8867 17.5914 36.7208 17.9872 36.6734 18.4046C36.6239 18.9587 36.8064 19.5122 37.1021 19.9791C37.193 20.1115 37.2943 20.2366 37.4066 20.3529C37.6261 20.5973 37.8523 20.8344 38.0844 21.062C38.1125 21.0976 38.1583 21.1289 38.1435 21.1856C38.128 21.2424 38.0496 21.2584 37.9942 21.2584H34.2468C34.0916 21.2584 33.8979 21.2256 33.8137 21.0707C33.7952 21.0373 33.824 21.0038 33.8506 20.9849C34.2527 20.7456 34.6526 20.4642 34.898 20.0576C35.1131 19.6962 35.2232 19.2824 35.2158 18.8635C35.2183 18.6212 35.1887 18.3797 35.1279 18.1449C34.9944 17.6995 34.7285 17.3036 34.3643 17.0082C33.9615 16.6854 33.4795 16.4724 32.9666 16.3907C32.7444 16.3652 32.5206 16.3554 32.297 16.3616H27.3101V23.9347H30.3457V21.8031L31.9599 23.3784C32.3147 23.7253 32.8151 23.8773 33.3 23.9326C35.3141 23.9377 37.3283 23.9326 39.3424 23.9326C39.8853 23.9318 40.4112 23.7463 40.831 23.4075C41.1651 23.1297 41.4142 22.7653 41.548 22.3551C41.6788 21.9382 41.7022 21.4958 41.6159 21.0678C41.5411 20.6858 41.3672 20.3293 41.1111 20.0329C40.7977 19.6649 40.4563 19.3231 40.1259 18.9718C40.0948 18.9376 40.0446 18.8984 40.0756 18.8467C40.1066 18.7958 40.1791 18.8155 40.216 18.8155H43.9146V16.3602L39.1007 16.3675L39.0999 16.3667ZM32.2526 19.4082C32.1122 19.4904 31.94 19.4664 31.7848 19.4693H30.3782V18.5071H31.9622C32.1928 18.5071 32.4515 18.654 32.4773 18.8991C32.5022 18.9968 32.4933 19.0998 32.4521 19.192C32.4109 19.2842 32.3397 19.3602 32.2497 19.4082H32.2526ZM24.2959 16.3667H20.0282L17.728 23.9384H20.5906L20.9314 22.8446H23.5368L23.8783 23.9384H26.6552L24.2959 16.3667ZM21.5722 20.7878L22.2345 18.6656L22.8967 20.7878H21.5722ZM7.08008 16.3667H10.18L10.7802 18.4191L11.3796 16.3667H14.5564L15.195 18.4191L15.8336 16.3667H18.7303L18.6416 16.7035L16.4153 23.9413H13.8113L12.9096 21.0409L12.0079 23.9413H9.43716L7.08008 16.3667ZM40.3032 12.9893C40.131 12.9791 39.9374 12.9893 39.7888 12.8904C39.7459 12.8562 39.6802 12.7806 39.7415 12.7304C40.0593 12.5267 40.386 12.3209 40.6344 12.0293C40.9199 11.6852 41.0896 11.2623 41.12 10.8191C41.1557 10.4462 41.1103 10.0701 40.9869 9.71583C40.807 9.25746 40.4884 8.86449 40.0741 8.59001C39.7279 8.36023 39.3371 8.20348 38.9263 8.12965C38.6912 8.07656 38.448 8.0911 38.2093 8.08965H33.2128V15.6751H36.2476V13.5362C36.2476 13.5362 37.5234 14.7784 37.8567 15.0969C38.1672 15.3907 38.5877 15.5602 38.9979 15.6351C39.2308 15.6686 39.4658 15.6816 39.7009 15.6744H43.9146V12.9893H40.3032ZM38.3298 10.9806C38.2862 11.045 38.2273 11.098 38.1581 11.1349C38.0889 11.1718 38.0116 11.1915 37.9329 11.1922H36.2898V10.2315H37.8759C38.0829 10.2256 38.2729 10.3406 38.3616 10.5253C38.3881 10.5993 38.399 10.6779 38.3936 10.7562C38.3881 10.8345 38.3664 10.9108 38.3298 10.9806ZM30.356 8.08965H26.0927L23.7926 15.6736H26.6552L26.9967 14.5776H29.6014L29.9429 15.6736H32.7176L30.356 8.08965ZM27.6338 12.5173L28.2953 10.3907L28.9576 12.5173H27.6338ZM13.0863 8.37619C13.441 8.21256 13.8239 8.08965 14.2179 8.09038H24.8717V10.5602L21.553 10.5638V15.6744H18.8234V10.5515H15.277C15.2068 10.5515 15.2246 10.6438 15.263 10.6838C15.5719 10.998 15.9134 11.382 16.2165 11.7035C16.4227 11.9246 16.5801 12.1849 16.6806 12.4686C16.8037 12.8242 16.849 13.2014 16.8137 13.5755C16.7828 13.8944 16.686 14.2038 16.5291 14.4846C16.3581 14.7967 16.1141 15.0643 15.8172 15.2654C15.5203 15.4665 15.1791 15.5952 14.8217 15.6409C14.6236 15.6627 14.226 15.6729 14.0257 15.6729H7.08082V12.9893H13.1602C13.2089 12.9893 13.2769 12.9893 13.2962 12.9333C13.325 12.8598 13.2489 12.8111 13.2075 12.7624C12.951 12.4591 12.6568 12.1835 12.3944 11.8896C12.1062 11.5682 11.9702 11.2111 11.8815 10.8256C11.7966 10.4804 11.8017 10.1197 11.8963 9.77692C11.984 9.47444 12.1354 9.19347 12.3405 8.95218C12.5456 8.7109 12.7999 8.51467 13.087 8.37619H13.0863Z" fill="#86898F"></path></svg></span>
                        <span><svg data-testid="hulu-logo" fill="none" height="100%" viewBox="0 0 57 32" xmlns="http://www.w3.org/2000/svg"><path d="M32.9753 21.2147H36.1469V8.11865H32.9753V21.2147ZM27.4069 17.4808C27.4069 17.9412 27.0196 18.3274 26.5585 18.3274H24.7147C24.2536 18.3274 23.8663 17.9412 23.8663 17.4808V12.2023H20.6948V17.7383C20.6948 20.0008 22.1512 21.1965 24.2902 21.1965H27.3886C29.3617 21.1965 30.5602 19.7805 30.5602 17.7383V12.2023H27.3886C27.4069 12.2023 27.4069 17.315 27.4069 17.4808ZM45.2377 12.2023V17.4808C45.2377 17.9412 44.8503 18.3274 44.39 18.3274H42.5455C42.0851 18.3274 41.6978 17.9412 41.6978 17.4808V12.2023H38.5263V17.7383C38.5263 20.0008 39.982 21.1965 42.1217 21.1965H45.2194C47.1925 21.1965 48.3909 19.7805 48.3909 17.7383V12.2023H45.2377ZM14.8493 12.2023H12.8207C12.1017 12.2023 11.7516 12.3863 11.7516 12.3863V8.11865H8.58008V21.1965H11.7326V15.9361C11.7326 15.4757 12.1199 15.0896 12.581 15.0896H14.4248C14.8859 15.0896 15.2732 15.4757 15.2732 15.9361V21.2147H18.4447V15.5128C18.4447 13.1216 16.8407 12.2023 14.8493 12.2023Z" fill="#86898F"></path></svg></span>
                        <span><svg data-testid="natgeo-logo" fill="none" height="100%" viewBox="0 0 63 32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M7.70609 21.3236H15.0822V9.49091H7.70536V21.3236H7.70609ZM6.21167 22.8145H16.5818V8H6.21094V22.8145H6.21167ZM23.4707 14.6473H22.829C21.9866 13.4604 21.1515 12.2807 20.3163 10.9484H20.3098V14.6465H19.6006V9.49018H20.2431C21.0855 10.6684 21.9206 11.8393 22.747 13.1651H22.7616V9.48945H23.4707V14.6465M25.4955 9.48945L23.7081 14.6465H24.4765L24.9263 13.2393H26.4867L26.8925 14.6465H27.8837L26.2354 9.49018H25.4955V9.48945ZM25.1564 12.6058C25.3622 11.928 25.5695 11.3018 25.7541 10.5055H25.7688C25.9761 11.3018 26.1607 11.928 26.3526 12.6058H25.1564ZM28.7173 14.6473V10.1818H27.357V9.48945H30.9633V10.1818H29.603V14.6473H28.7166M31.2512 14.6473H32.1318V9.48945H31.2505L31.2512 14.6473ZM34.8657 14.7345C36.2173 14.7345 37.059 13.5345 37.059 11.9935C37.059 10.5498 36.1293 9.40073 34.8657 9.40073C33.602 9.40073 32.6687 10.5498 32.6687 11.9935C32.6687 13.5338 33.5119 14.7338 34.8657 14.7338V14.7345ZM34.8657 13.9978C33.9405 13.9978 33.6159 12.9811 33.6159 11.9935C33.6159 11.0436 33.9851 10.1375 34.8657 10.1375C35.7448 10.1375 36.1125 11.0436 36.1125 11.9935C36.1125 12.9811 35.7887 13.9978 34.8657 13.9978ZM41.4704 14.6473H40.828C39.9855 13.4604 39.1497 12.2807 38.3153 10.9484H38.308V14.6465H37.6003V9.49018H38.242C39.0845 10.6684 39.9196 11.8393 40.7445 13.1651H40.7606V9.48945H41.4712V14.6465M43.4959 9.48945L41.7078 14.6465H42.477L42.926 13.2393H44.4856L44.8922 14.6465H45.8826L44.2344 9.49018H43.4959V9.48945ZM43.1546 12.6058C43.3626 11.928 43.5685 11.3018 43.7538 10.5055H43.7685C43.9758 11.3018 44.1596 11.928 44.3516 12.6058H43.1546ZM46.1398 9.48945H47.0203V13.9542H48.7711V14.6465H46.1398V9.49018M22.9257 18.96V21.0887C22.4525 21.2735 21.9573 21.4058 21.4562 21.4058C19.9332 21.4058 18.9728 20.2262 18.9728 18.7091C18.9728 17.3011 19.9332 16.0713 21.4855 16.0713C21.9646 16.0713 22.4452 16.2495 22.7411 16.4698L22.4525 17.0807C22.1664 16.9107 21.8408 16.8172 21.5075 16.8095C20.5618 16.8095 19.9178 17.5535 19.9178 18.7251C19.9178 19.9469 20.6577 20.6684 21.4188 20.6684C21.654 20.6684 21.8547 20.6407 22.0401 20.544V18.96H22.9264M26.097 16.8538H24.6172V18.2676H26.0655V18.96H24.6172V20.624H26.3614V21.3178H23.7301V16.16H26.097V16.8538ZM28.8309 21.4058C30.1824 21.4058 31.0241 20.2051 31.0241 18.6647C31.0241 17.2211 30.0938 16.0713 28.8309 16.0713C27.5657 16.0713 26.6354 17.2211 26.6354 18.6647C26.6354 20.2051 27.4764 21.4058 28.8309 21.4058ZM28.8309 20.6684C27.9064 20.6684 27.5804 19.6531 27.5804 18.6647C27.5804 17.7156 27.9503 16.8102 28.8309 16.8102C29.7099 16.8102 30.0784 17.7156 30.0784 18.6647C30.0784 19.6531 29.7524 20.6684 28.8309 20.6684ZM35.2796 18.96V21.0887C34.8056 21.2735 34.3126 21.4058 33.8093 21.4058C32.2878 21.4058 31.326 20.2262 31.326 18.7091C31.326 17.3011 32.2878 16.0713 33.8394 16.0713C34.3199 16.0713 34.799 16.2495 35.0942 16.4698L34.8056 17.0807C34.5202 16.9105 34.195 16.817 33.8621 16.8095C32.9149 16.8095 32.2724 17.5535 32.2724 18.7251C32.2724 19.9469 33.0116 20.6684 33.7727 20.6684C34.0101 20.6684 34.2078 20.6407 34.3939 20.544V18.96H35.2796ZM39.2266 21.3178L38.1827 19.1818C38.7519 18.8807 39.0786 18.2676 39.0786 17.6487C39.0786 16.6451 38.464 16.16 37.4736 16.16H36.092V21.3178H36.9813V19.3724H37.3798L38.2127 21.3178H39.2266ZM36.9813 16.8538H37.3718C37.8948 16.8538 38.1908 17.1549 38.1908 17.6858C38.1908 18.3775 37.771 18.6865 37.3491 18.7091C37.2604 18.7178 37.0531 18.7251 36.9813 18.7316V16.8538ZM41.0287 16.16L39.2398 21.3178H40.009L40.4595 19.9098H42.0198L42.4235 21.3178H43.4161L41.7678 16.16H41.0287ZM40.6888 19.2771C40.8954 18.5978 41.1019 17.9724 41.288 17.1767H41.3027C41.5093 17.9724 41.6939 18.5978 41.8858 19.2771H40.6888ZM44.953 18.7091C44.8607 18.7171 44.6439 18.7236 44.5823 18.7309V16.8545H44.9808C45.498 16.8545 45.794 17.1549 45.794 17.6858C45.794 18.3775 45.375 18.6865 44.953 18.7091ZM45.0775 16.16H43.6959V21.3178H44.5823V19.3724H44.9808C46.0379 19.3724 46.6811 18.5178 46.6811 17.6487C46.6811 16.6451 46.068 16.16 45.0768 16.16H45.0775ZM50.7893 21.3178H49.9029V18.8356H48.0613V21.3178H47.1844V16.16H48.0613V18.1418H49.9029V16.1753H50.7893V21.3171M51.6383 21.3178H52.5196V16.16H51.6383V21.3178ZM56.5076 17.0967C56.293 16.9636 55.9399 16.8095 55.5993 16.8095C54.696 16.8095 54.0404 17.5535 54.0404 18.7251C54.0404 19.9469 54.7634 20.6684 55.6213 20.6684C55.9612 20.6684 56.2784 20.5578 56.5076 20.4102L56.7523 21.0516C56.4036 21.2741 55.9998 21.3967 55.5854 21.4058C54.0631 21.4058 53.102 20.2262 53.102 18.7091C53.102 17.3011 54.0543 16.0713 55.5985 16.0713C56.0579 16.0713 56.4849 16.264 56.7897 16.4698L56.5076 17.0967Z" fill="#86898F" fillRule="evenodd"></path></svg></span>
                        <span><svg data-testid="starplus-logo" fill="none" height="100%" viewBox="0 0 51 32" xmlns="http://www.w3.org/2000/svg"><path d="M37.8874 12.7854H31.2045C31.117 12.7854 31.0733 12.7395 31.0516 12.6477L28.9543 6L26.8987 12.6477C26.8766 12.7395 26.8329 12.7854 26.7457 12.7854H20.0615L25.4574 16.9121C25.5157 16.9577 25.5957 16.9577 25.654 16.9121C27.1394 15.9491 28.4721 15.2614 31.2482 14.5286C28.7139 16.592 26.2236 18.9296 24.17 21.6345C24.1092 21.7074 24.0645 21.7935 24.0392 21.8867L23.4492 23.7889L28.8451 19.686C28.9326 19.6173 28.9763 19.6173 29.0634 19.686L34.4593 23.7879L32.4061 17.0946C32.384 17.0029 32.4061 16.957 32.4715 16.9114L37.8874 12.7854Z" fill="#86898F"></path><path d="M43.5625 11.0658C44.6546 11.0658 45.3537 11.6617 45.3537 12.6475C45.3537 13.6792 44.6546 14.4124 43.5625 14.4124H41.8161V11.0658H43.5625ZM44.9387 16.7508C46.8173 16.4985 48.3685 14.8023 48.3685 12.6475C48.3685 9.85086 46.5553 8.31505 43.628 8.31505H38.8437V22.3895H41.8161V16.8194L45.3761 22.3895H48.8275L44.9387 16.7508ZM21.1322 8.31505H12.2855V11.1576H15.1908V22.3895H18.2272V11.1576H21.1328L21.1322 8.31505ZM6.69675 13.4735C5.84474 13.0609 5.51723 12.6254 5.51723 12.0505C5.51723 11.3856 6.06308 10.8356 6.87136 10.8584C7.6142 10.8815 8.15972 11.2938 8.57539 12.2814L11.1328 11.1117C10.4337 9.23184 9.01377 8.13184 6.71981 8.13184C4.29498 8.13184 2.50382 9.8039 2.50382 12.0516C2.50382 13.5874 3.20292 14.8482 4.99408 15.787L6.78558 16.7269C7.78915 17.2535 8.26957 17.6448 8.26957 18.4239C8.26957 19.2493 7.6142 19.8469 6.78423 19.8469C5.88848 19.8469 5.0802 19.3197 4.70895 18.1276L2 18.9529C2.61028 21.2682 4.42483 22.6204 6.78423 22.6204C9.33993 22.6204 11.306 20.9014 11.306 18.4257C11.306 16.5231 10.3449 15.2395 8.40078 14.2989L6.69675 13.4735Z" fill="#86898F"></path></svg></span>
                    </Brands>
                </Footer>
            </Box>
        </Container>        
    )};
    
    const Brands = styled.div`
        margin-top: 20px;
        display: flex;
        flex-direction: row;  
        align-items: center;
        div, span {
            width: 50px; /* or adjust the width as necessary */
            height: auto;
        }

        svg {
            width: 100%;
            height: auto;
        }
    `;

export default LoginStep1;