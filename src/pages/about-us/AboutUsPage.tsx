import React from 'react';
import {styled} from '@mui/system';
import Header from "../../components/header/Header.tsx";
import Advantages from "../home/components/Advantages.tsx";
import Mailing from "../home/components/Mailing.tsx";
import Footer from "../../components/footer/Footer.tsx";
import About from "./components/About.tsx";

const Background = styled('div')({
    width: '100%',
    padding: 0,
    margin: 0,
});

const Wrapper = styled('div')({
    width: '100%',
    maxWidth: '1650px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0 17px',
});

const DecorativeLine = styled('div')({
    height: '1px',
    width: '100%',
    color: '#000',
    backgroundColor: '#000',
    opacity: '50%',
});

const AboutUsPage: React.FC = () => {
    return (
        <Background>
            <Header/>
            <Wrapper>
                <About/>
            </Wrapper>
            <Advantages/>
            <Wrapper>
                <Mailing/>
            </Wrapper>
            <DecorativeLine sx={{marginBottom: '115px'}}/>
            <Footer/>
        </Background>
    );
};

export default AboutUsPage;
