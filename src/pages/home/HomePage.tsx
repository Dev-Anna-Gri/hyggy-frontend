import React from 'react';
import {styled} from '@mui/system';
import Header from "../../components/header/Header.tsx";
import SmallBanner from "./components/SmallBanner.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Categories from "./components/Categories.tsx";
import Brands from "./components/Brands.tsx";
import Blog from "./components/Blog.tsx";
import Advantages from "./components/Advantages.tsx";
import Mailing from "./components/Mailing.tsx";
import Footer from "../../components/footer/Footer.tsx";

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
    padding: '0 5px',
});

const DecorativeLine = styled('div')({
    height: '1px',
    width: '100%',
    color: '#000',
    backgroundColor: '#000',
    opacity: '50%',
});


const HomePage: React.FC = () => {

    return (
        <Background>
            <Header/>
            <Wrapper>
                <SmallBanner/>
            </Wrapper>
            <DecorativeLine/>
            <Wrapper>
                <AboutUs/>
            </Wrapper>
            <DecorativeLine/>
            <Wrapper>
                <Categories/>
            </Wrapper>
            <Brands/>
            <Wrapper>
                <Blog/>
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

export default HomePage;
