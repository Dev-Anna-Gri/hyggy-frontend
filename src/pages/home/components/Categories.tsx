import React from 'react';
import {styled} from '@mui/system';

const CategoryBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const Title = styled('h2')(({theme}) => ({
    fontSize: '36px',
    fontWeight: '600',
    color: '#231f20',
    textAlign: 'center',
    padding: '15px 320px',
    backgroundColor: '#d9d9d9',
    [theme.breakpoints.down('md')]: {
        padding: '8px 30px',
        fontSize: '24px',
    },
}));

const GridContainer = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    columnGap: '30px',
    rowGap: '45px',
    [theme.breakpoints.down(1700)]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(3, auto)',
    },
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(auto, auto)',
        rowGap: '20px',
    },
}));

const GridItem = styled('div')({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const CategoryName = styled('h3')(({theme}) => ({
    fontSize: '36px',
    fontWeight: '600',
    color: '#231f20',
    opacity: '0.75',
    position: 'absolute',
    margin: '0',
    top: '15px',
    left: '30px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}));

const CategoryImage = styled('img')({
    width: '100%',
});

const Categories: React.FC = () => {
    return (
        <CategoryBlock>
            <Title>Категорії</Title>
            <GridContainer>
                <GridItem>
                    <CategoryImage src="/badroom.png" alt="Badroom"/>
                    <CategoryName>Спальня</CategoryName>
                </GridItem>
                <GridItem>
                    <CategoryImage src="/bathroom.png" alt="Bathroom"/>
                    <CategoryName>Ванна</CategoryName>
                </GridItem>
                <GridItem>
                    <CategoryImage src="/office.png" alt="Office"/>
                    <CategoryName>Офіс</CategoryName>
                </GridItem>
                <GridItem>
                    <CategoryImage src="/living-room.png" alt="Living room"/>
                    <CategoryName>Вітальня</CategoryName>
                </GridItem>
                <GridItem>
                    <CategoryImage src="/kitchen.png" alt="Kitchen"/>
                    <CategoryName>Кухня</CategoryName>
                </GridItem>
                <GridItem>
                    <CategoryImage src="/garden.png" alt="Garden"/>
                    <CategoryName>Для саду</CategoryName>
                </GridItem>
            </GridContainer>
        </CategoryBlock>
    );
};

export default Categories;