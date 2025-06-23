import React from 'react';
import {styled} from '@mui/system';

const BrandBlock = styled('div')({
    width: '100%',
    backgroundColor: '#fff',
    padding: '24px 0px 24px 0px',
    marginTop: '58px',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.25)',
});

const Wrapper = styled('div')({
    width: '100%',
    maxWidth: '1650px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
});

const BrandsContent = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    padding: '0 5px',
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
        gap: '20px',
    },
}));

const BrandItem = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
});

const BrandDescription = styled('p')(({theme}) => ({
    fontSize: '16px',
    fontWeight: '400',
    textAlign: 'justify',
    color: '#231f20',
    [theme.breakpoints.down('md')]: {
    maxWidth: '400px !important',
        textAlign: 'center',
    },
}));


const Brands: React.FC = () => {
    return (
        <BrandBlock>
            <Wrapper>
                <BrandsContent>
                    <BrandItem>
                        <img src="/hastens.png" alt="Hastens Logo"/>
                        <BrandDescription sx={{
                            maxWidth: '328px'
                        }}>
                            Бренд, відомий своїми розкішними матрацами, які роблять із натуральних матеріалів з акцентом
                            на якість та комфорт.
                        </BrandDescription>
                    </BrandItem>
                    <BrandItem>
                        <img src="/svenska-hem.png" alt="Svenska Hem Logo"/>
                        <BrandDescription sx={{
                            maxWidth: '268px'
                        }}>
                            Бренд пропонує широкий вибір меблів та товарів для дому, що поєднують стиль та
                            функціональність.
                        </BrandDescription>
                    </BrandItem>
                    <BrandItem>
                        <img src="/fritz-hansen.png" alt="Fritz Hansen Logo"/>
                        <BrandDescription sx={{
                            maxWidth: '309px'
                        }}>
                            Знаменита меблева компанія, що виробляє дизайнерські меблі та аксесуари, включаючи культові
                            вироби від відомих дизайнерів.
                        </BrandDescription>
                    </BrandItem>
                    <BrandItem>
                        <img src="/mutto.png" alt="Mutto Logo"/>
                        <BrandDescription sx={{
                            maxWidth: '276px'
                        }}>
                            Бренд, відомий своїми розкішними матрацами, які роблять із натуральних матеріалів з акцентом
                            на якість та комфорт.
                        </BrandDescription>
                    </BrandItem>
                </BrandsContent>
            </Wrapper>
        </BrandBlock>
    );
};

export default Brands;