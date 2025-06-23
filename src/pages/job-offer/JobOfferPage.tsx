import React from 'react';
import {styled} from '@mui/system';
import Header from "../../components/header/Header.tsx";
import JobAdvantages from "./components/JobAdvantages.tsx";
import Mailing from "../home/components/Mailing.tsx";
import Footer from "../../components/footer/Footer.tsx";
import SmallNavigation from "./components/SmallNavigation.tsx";
import WorkWithUs from "./components/WorkWithUs.tsx";
import JobOptions from "./components/JobOptions.tsx";
import OurOffers from "./components/OurOffers.tsx";
import Links from "./components/Links.tsx";
import Advantages from "../home/components/Advantages.tsx";

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
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0px 17px'
});

const DecorativeLine = styled('div')({
    height: '1px',
    width: '100%',
    color: '#000',
    backgroundColor: '#000',
    opacity: '50%',
});

const JobOfferPage: React.FC = () => {
    return (
        <Background>
            <Header/>
            <Wrapper>
                <SmallNavigation/>
            </Wrapper> 
            <WorkWithUs/>
            <JobAdvantages/>
            <Wrapper>
                <JobOptions/>
                <OurOffers/>
                <Links/>
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

export default JobOfferPage;