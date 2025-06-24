import React from 'react';
import {styled} from '@mui/system';
import Header from "../../components/header/Header.tsx";
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
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0px 17px'
});

const NotFoundPageContent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '80px',
    flexDirection: 'column',
    paddingTop: '80px',
    paddingBottom: '135px',
});

const Image404 = styled('img')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
});

const Text404 = styled('p')({
    fontSize: '30px',
    fontWeight: '400',
    color: '#231f20',
    margin: '0',
    padding: '0',
    fontFamily: 'Raleway',
    textAlign: 'center',
})

const NotFoundPage: React.FC = () => {
return(
    <Background>
        <Header/>
        <Wrapper>
            <NotFoundPageContent>
                <Image404 src={'/src/assets/404.png'} alt={'404 Icon'}/>
                <Text404>{'Сторінка не знайдена'}</Text404>
            </NotFoundPageContent>
        </Wrapper>
        <Footer/>
    </Background>
);
}

export default NotFoundPage;