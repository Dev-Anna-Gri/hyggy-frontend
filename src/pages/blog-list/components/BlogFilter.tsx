import React from 'react';
import {styled} from '@mui/system';

const BlogFilterBlog = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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

const Title = styled('h1')(({theme}) => ({
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

const Description = styled('p')(({theme}) => ({
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

const FilterButtonsBlock = styled("div")(({theme}) => ({
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

const FilterButton = styled('button')(({theme}) => ({
    padding: '8px 37px',
    backgroundColor: '#e0e0e0',
    color: '#231f20',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0px',
    transition: 'all 0.3s',
    '&:hover':{
        backgroundColor: '#00AAAD',
        color: '#fff'
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

const FilterCategoriesBlock = styled("div")(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
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
    gap: '20px'
});

const CategoryTitle = styled('h3')(({theme}) => ({
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
    return (
        <BlogFilterBlog>
            <Wrapper>
                <Title>Блог</Title>
                <Description>Ідеї за кімнатами</Description>
            </Wrapper>
            <FilterBlock>
                <Wrapper>
                    <FilterButtonsBlock>
                        <FilterButton sx={{
                            backgroundColor: '#00AAAD',
                            color: '#fff'
                        }}>Для дома</FilterButton>
                        <FilterButton>Для саду</FilterButton>
                        <FilterButton>Для сну</FilterButton>
                    </FilterButtonsBlock>
                    <FilterCategoriesBlock>
                        <CategoryCard>
                            <a href="#">
                                <img src="/living-room-filter-icon.png" alt="Living room"/>
                                <CategoryTitle>Вітальня</CategoryTitle>
                            </a>
                        </CategoryCard>
                        <CategoryCard>
                            <a href="#">
                                <img src="/kitchen-filter-icon.png" alt="Kitchen"/>
                                <CategoryTitle>Кухня</CategoryTitle>
                            </a>
                        </CategoryCard>
                        <CategoryCard>
                            <a href="#">
                                <img src="/badroom-filter-icon.png" alt="Badroom"/>
                                <CategoryTitle>Спальня</CategoryTitle>
                            </a>
                        </CategoryCard>
                        <CategoryCard>
                            <a href="#">
                                <img src="/bathroom-filter-icon.png" alt="Bathroom"/>
                                <CategoryTitle>Ванна</CategoryTitle>
                            </a>
                        </CategoryCard>
                        <CategoryCard>
                            <a href="#">
                                <img src="/office-filter-icon.png" alt="Office"/>
                                <CategoryTitle>Кабінет</CategoryTitle>
                            </a>
                        </CategoryCard>
                        <CategoryCard>
                            <a href="#">
                                <img src="/garden-filter-icon.png" alt="Garden"/>
                                <CategoryTitle>Двір</CategoryTitle>
                            </a>
                        </CategoryCard>
                    </FilterCategoriesBlock>
                </Wrapper>
            </FilterBlock>
        </BlogFilterBlog>
    );
};

export default BlogFilter;
