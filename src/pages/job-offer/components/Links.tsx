import React from 'react';
import {styled} from '@mui/system';

const LinksBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
    marginTop: '60px',
    [theme.breakpoints.down('md')]: {
        gap: '30px',
    },
}));

const Link = styled('a')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const SocialImage = styled('img')({
    width: '100%',
});

const Links: React.FC = () => {
    return (
        <LinksBlock>
            <Link href="#" target={'_blank'}>
                <SocialImage src="/telegram-big.png" alt="Telegram"/>
            </Link>
            <Link href="#" target={'_blank'}>
                <SocialImage src="/instagram-big.png" alt="Instagram"/>
            </Link>
            <Link href="#" target={'_blank'}>
                <SocialImage src="/facebook-big.png" alt="Facebook"/>
            </Link>
            <Link href="#" target={'_blank'}>
                <SocialImage src="/youtube-big.png" alt="YouTube"/>
            </Link>
        </LinksBlock>
    );
};

export default Links;