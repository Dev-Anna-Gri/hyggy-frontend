import React from 'react';
import {styled} from '@mui/system';
import Header from "../../components/header/Header.tsx";
import Advantages from "../home/components/Advantages.tsx";
import Mailing from "../home/components/Mailing.tsx";
import Footer from "../../components/footer/Footer.tsx";
import SmallNavigation from "./components/SmallNavigation.tsx";
import BlogFilter from "./components/BlogFilter.tsx";
import FilterList from "./components/FilterList.tsx";

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

const BlogListPage: React.FC = () => {
    const itemsForHome = [
        {title: 'Секрети довговічності: як доглядати за меблями з натурального дерева', imgSrc: '/blog-images/for-home-1.png', href: '#'},
        {title: '10 трендів у дизайні інтер\'єру 2024 року, які варто врахувати', imgSrc: '/blog-images/for-home-2.png', href: '#'},
        {title: 'Як обрати ідеальні меблі для маленької квартири', imgSrc: '/blog-images/for-home-3.png', href: '#'},
        {title: 'Чому варто обрати модульні меблі: переваги та ідеї використання', imgSrc: '/blog-images/for-home-4.png', href: '#'},
        {title: 'Нестандартні рішення: як меблі можуть змінити ваш простір', imgSrc: '/blog-images/for-home-5.png', href: '#'},
    ];

    const itemsForGarden = [
        {title: 'Як вибрати стійкі меблі для саду: матеріали, які витримують погоду', imgSrc: '/blog-images/for-garden-1.png', href: '#'},
        {title: '5 ідей для облаштування комфортної зони відпочинку в саду', imgSrc: '/blog-images/for-garden-2.png', href: '#'},
        {title: 'Як створити затишну атмосферу у саду за допомогою освітлення і меблів', imgSrc: '/blog-images/for-garden-3.png', href: '#'},
        {title: 'Садові аксесуари, які змінять ваше уявлення про відпочинок на свіжому повітрі', imgSrc: '/blog-images/for-garden-4.png', href: '#'},
        {title: 'Тренди 2024 року: які садові меблі обирати для вашого простору', imgSrc: '/blog-images/for-garden-5.png', href: '#'},
    ];

    const itemsForSleep = [
        {title: 'Чому важливо звертати увагу на жорсткість матраца: все про комфорт і підтримку', imgSrc: '/blog-images/for-sleep-1.png', href: '#'},
        {title: 'Як обрати ідеальний матрац: поради для здорового сну', imgSrc: '/blog-images/for-sleep-2.png', href: '#'},
        {title: 'Матраци для здоров\'я: які технології покращують якість сну', imgSrc: '/blog-images/for-sleep-3.png', href: '#'},
        {title: 'Тренди у світі матраців 2024 року: які новинки варто спробувати', imgSrc: '/blog-images/for-sleep-4.png', href: '#'},
        {title: 'Догляд за матрацом: прості поради для тривалого використання', imgSrc: '/blog-images/for-sleep-5.png', href: '#'},
    ];

    return (
        <Background>
            <Header/>
            <Wrapper>
                <SmallNavigation/>
            </Wrapper>
            <BlogFilter/>
            <Wrapper sx={{flexDirection: 'column', gap: '150px', marginTop: '30px'}}>
                <FilterList title={'Для дому'} items={itemsForHome}/>
                <FilterList title={'Для саду'} items={itemsForGarden}/>
                <FilterList title={'Для сну'} items={itemsForSleep}/>
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

export default BlogListPage;