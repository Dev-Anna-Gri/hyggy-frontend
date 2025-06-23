import React from 'react';
import {styled} from '@mui/system';

const FilterBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
});

const Title = styled('h2')(({ theme }) => ({
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '36px',
    color: '#000',
    margin: '0',
    marginBottom: '50px',
    [theme.breakpoints.down(1500)]: {
        fontSize: '28px',
        marginBottom: '30px',
    },
}));

const BlogCardsBlock = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    [theme.breakpoints.down(1500)]: {
        flexDirection: 'column',
        gap: '20px',
    },
}));

const LeftWrapper = styled('div')(({ theme }) => ({
    flex: 2,
    [theme.breakpoints.down(1500)]: {
        width: '100%',
    },
}));

const RightWrapper = styled('div')(({ theme }) => ({
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '16px',
    [theme.breakpoints.down(1500)]: {
        width: '100%',
        gridTemplateRows: '1fr 1fr',
    },
}));

const BlogCardItem = styled('div')({
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0px',
});

const BlogCardImage = styled('img')(({ theme }) => ({
    // width: '100%',
    height: 'auto',
    objectFit: 'cover',
    [theme.breakpoints.down(1500)]: {
        height: 'auto',
        width: '100%',
    },
}));

const CardTitleMain = styled('h2')(({ theme }) => ({
    position: 'absolute',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '36px',
    color: '#fff',
    margin: '0',
    top: '25px',
    left: '25px',
    [theme.breakpoints.down(1500)]: {
        fontSize: '24px',
        top: '15px',
        left: '15px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
    },
}));

const CardTitleSecondary = styled('h2')(({ theme }) => ({
    position: 'absolute',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '20px',
    color: '#fff',
    margin: '0',
    top: '25px',
    left: '25px',
    [theme.breakpoints.down(1500)]: {
        fontSize: '18px',
        top: '15px',
        left: '15px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));

const FilterList: React.FC<FilterListProps> = ({ items, title }) => {
    if (items.length < 5) {
        console.warn(`FilterList waiting for 5+ elements, but got ${items.length}`);
    }
    const [first, ...rest] = items;

    return (
        <FilterBlock>
            <Title>{title}</Title>
            <BlogCardsBlock>
                <LeftWrapper>
                    <a href="#">
                        <BlogCardItem>
                            <BlogCardImage src={first.imgSrc} alt={first.title} />
                            <CardTitleMain>{first.title}</CardTitleMain>
                        </BlogCardItem>
                    </a>
                </LeftWrapper>

                <RightWrapper>
                    {rest.slice(0, 4).map((item, idx) => (
                        <a key={idx} href="#">
                            <BlogCardItem>
                                <BlogCardImage src={item.imgSrc} alt={item.title}/>
                                <CardTitleSecondary>{item.title}</CardTitleSecondary>
                            </BlogCardItem>
                        </a>
                    ))}
                </RightWrapper>
            </BlogCardsBlock>
        </FilterBlock>
    );
};

export default FilterList;
