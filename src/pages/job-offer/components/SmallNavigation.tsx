import React from 'react';
import {styled} from '@mui/system';

const SmallNavigationBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '36px',
    width: '100%',
    padding: '30px 0 50px 0',
    [theme.breakpoints.down('sm')]: {
        gap: '10px',
    },
}));

const Link = styled('a')(({theme}) => ({
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '300',
    color: '#000',
    opacity: '0.75',
    '&:hover':{
        color: '#00aaad'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));

const SmallNavigation: React.FC = () => {
    return(
        <SmallNavigationBlock>
            <Link href="/">Домашня сторінка</Link>
            <img src="/right-arrow.png" alt="Right arrow"/>
            <Link href="/job">Робота</Link>
        </SmallNavigationBlock>
    );
};

export default SmallNavigation;