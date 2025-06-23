import React from 'react';
import {styled} from '@mui/system';

const SmallBannerBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '30px 0px 38px 0px'
});

const MainText = styled('h1')(({theme}) => ({
    fontSize: '36px', 
    fontWeight: '600',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
    [theme.breakpoints.down('xl')]: {
        fontSize: '30px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '26px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
    },
}));

const BannerImage = styled('img')(({theme}) => ({
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('xl')]: {
        height: '100px'
    },
    [theme.breakpoints.down('lg')]: {
        height: '91px'
    },
}));

const SmallBanner: React.FC = () => {
    return (
        <SmallBannerBlock>
            <BannerImage src="/small-banner.png" alt="Small Banner"/>
            <MainText>Осінь на вашому боці: Знижки до 50% на меблі! Змініть свій інтер'єр зараз!</MainText>
        </SmallBannerBlock>
    );
}

export default SmallBanner;