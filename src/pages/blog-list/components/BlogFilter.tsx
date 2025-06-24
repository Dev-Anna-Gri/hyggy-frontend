import React, { useState } from 'react';
import { styled } from '@mui/system';

const BlogFilterBlog = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const Wrapper = styled('div')({
    width: '100%',
    maxWidth: '1650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0 17px',
});

const Title = styled('h1')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '48px',
    fontWeight: '600',
    color: '#000',
    margin: '0',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '32px',
    },
}));

const Description = styled('p')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '36px',
    fontWeight: '400',
    color: '#000',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}));

const FilterBlock = styled('div')({
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.25)',
    padding: '26px 0',
    marginTop: '35px',
});

const FilterButtonsBlock = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '300px',
    width: '100%',
    [theme.breakpoints.down('xl')]: {
        gap: '0px',
        justifyContent: 'space-between',
    },
}));

const FilterButton = styled('button')< { active?: boolean } >(({ theme, active }) => ({
    padding: '8px 37px',
    backgroundColor: active ? '#00AAAD' : '#e0e0e0',
    color: active ? '#fff' : '#231f20',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0px',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: '#00AAAD',
        color: '#fff',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '28px',
        padding: '6px 30px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        padding: '4px 24px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        padding: '4px 6px',
    },
}));

const FilterCategoriesBlock = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    gap: '10px',
    marginTop: '65px',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}));

const CategoryCard = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
});

const CategoryTitle = styled('h3')(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
}));

const BlogFilter: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'home' | 'garden' | 'sleep'>('home');

    const forHome = [
        { title: 'Вітальня', image: '/living-room-filter-icon.png' },
        { title: 'Кухня', image: '/kitchen-filter-icon.png' },
        { title: 'Спальня', image: '/badroom-filter-icon.png' },
        { title: 'Ванна', image: '/bathroom-filter-icon.png' },
        { title: 'Кабінет', image: '/office-filter-icon.png' },
        { title: 'Двір', image: '/garden-filter-icon.png' },
    ];

    const forGarden = [
        { title: 'Балкон та патіо', image: '/balkon.png' },
        { title: 'На свіжому повітрі', image: '/fresh-air.png' },
        { title: 'Свята', image: '/celebrating.png' },
        { title: 'Догляд', image: '/doglyad.png' },
    ];

    const forSleep = [
        { title: 'Матраци та ліжка', image: '/bed.png' },
        { title: 'Ковдри', image: '/cover.png' },
        { title: 'Подушки', image: '/pillow.png' },
        { title: 'Здоров’я та алергії', image: '/health.png' },
        { title: 'Поради для сну', image: '/night.png' },
        { title: 'Догляд', image: '/care.png' },
    ];

    const categories =
        activeFilter === 'home'
            ? forHome
            : activeFilter === 'garden'
                ? forGarden
                : forSleep;

    return (
        <BlogFilterBlog>
            <Wrapper>
                <Title>Блог</Title>
                <Description>Ідеї за кімнатами</Description>
            </Wrapper>

            <FilterBlock>
                <Wrapper>
                    <FilterButtonsBlock>
                        <FilterButton
                            active={activeFilter === 'home'}
                            onClick={() => setActiveFilter('home')}
                        >
                            Для дому
                        </FilterButton>

                        <FilterButton
                            active={activeFilter === 'garden'}
                            onClick={() => setActiveFilter('garden')}
                        >
                            Для саду
                        </FilterButton>

                        <FilterButton
                            active={activeFilter === 'sleep'}
                            onClick={() => setActiveFilter('sleep')}
                        >
                            Для сну
                        </FilterButton>
                    </FilterButtonsBlock>

                    <FilterCategoriesBlock>
                        {categories.map((item) => (
                            <CategoryCard key={item.title}>
                                <a href="#">
                                    <img src={item.image} alt={item.title} />
                                    <CategoryTitle>{item.title}</CategoryTitle>
                                </a>
                            </CategoryCard>
                        ))}
                    </FilterCategoriesBlock>
                </Wrapper>
            </FilterBlock>
        </BlogFilterBlog>
    );
};

export default BlogFilter;
