import React from 'react';
import {styled} from '@mui/system';

const FooterBlock = styled('footer')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#00aaad',
});

const Wrapper = styled('div')({
    width: '100%',
    maxWidth: '1650px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
});

const FooterContent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '65px',
    flexDirection: 'column'
});

const NavigationBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '100px',
    flexWrap: 'wrap',
    [theme.breakpoints.down(1700)]: {
        justifyContent: 'center',
    },
}));

const NavigationBlockItem = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.down(1700)]: {
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const NavigationTitle = styled('h3')(({theme}) => ({
    margin: '0px',
    marginBottom: '45px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '32px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px'
    },
}));
const Navigation = styled('nav')({});

const NavigationList = styled('ul')({
    textDecoration: 'none',
    listStyle: 'none',
    padding: '0'
});

const NavigationItem = styled('li')(({theme}) => ({
    fontSize: '30px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '400',
    listStyle: 'none',
    padding: '10px 0',
    [theme.breakpoints.down('md')]: {
        fontSize: '22px'
    }, 
}));

const NavigationLink = styled('a')(({theme}) => ({
    fontSize: '30px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '400',
    '&:hover': {
        color: '#fff',
        textDecoration: 'underline',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '22px'
    },
}));


const UnderLinksBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '300px',
    paddingBottom: '100px',
    [theme.breakpoints.down(1000)]: {
        flexDirection: 'column-reverse',
        gap: '20px',
    },
}));

const PaymentMethodsBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '50px',
    [theme.breakpoints.down('sm')]: {
        gap: '18px',
    },
}));

const SocialLinksBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '70px',
    [theme.breakpoints.down('sm')]: {
        gap: '25px',
    },
}));

const PaymentLink = styled('a')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const PaymentImage = styled('img')({
     width: '80%',
});

const SocialLink = styled('a')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const SocialImage = styled('img')({
    width: '80%',
});

const Footer: React.FC = () => {
    return (
        <FooterBlock>
            <Wrapper>
                <FooterContent>
                    <NavigationBlock>
                        <NavigationBlockItem>
                            <NavigationTitle>Категорії товарів</NavigationTitle>
                            <Navigation>
                                <NavigationList>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Спальня</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Ванна</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Офіс</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Вітальня</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Кухня ті їдальня</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Зберігання</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Для вікон</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Для саду</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Для дому</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Усі категорії</NavigationLink>
                                    </NavigationItem>
                                </NavigationList>
                            </Navigation>
                        </NavigationBlockItem>
                        <NavigationBlockItem>
                            <NavigationTitle>Інформація</NavigationTitle>
                            <Navigation>
                                <NavigationList>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Зворотній зв'язок</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Магазини і графіки роботи</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Умови та положення</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Доставка</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Політка конфіденційності</NavigationLink>
                                    </NavigationItem>
                                </NavigationList>
                            </Navigation>
                        </NavigationBlockItem>
                        <NavigationBlockItem>
                            <NavigationTitle>Hyggy</NavigationTitle>
                            <Navigation>
                                <NavigationList>
                                    <NavigationItem>
                                        <NavigationLink href={'/about-us'}>Про нас</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'/job'}>Робота в Hyggy</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Підписатись на розсилку</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'/blog'}>Блог</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>B2B</NavigationLink>
                                    </NavigationItem>
                                    <NavigationItem>
                                        <NavigationLink href={'#'}>Корисні посилання</NavigationLink>
                                    </NavigationItem>
                                </NavigationList>
                            </Navigation>
                        </NavigationBlockItem>
                        <NavigationBlock sx={{flexDirection: 'column', gap: '60px'}}>
                            <NavigationBlockItem>
                                <NavigationTitle>Центральний офіс</NavigationTitle>
                                <Navigation>
                                    <NavigationList>
                                        <NavigationItem>
                                            м.Київ<br/>вул. Іоанна павла, 21<br/>123456
                                        </NavigationItem>
                                    </NavigationList>
                                </Navigation>
                            </NavigationBlockItem>
                            <NavigationBlockItem>
                                <NavigationTitle>HYGGY B2B</NavigationTitle>
                                <Navigation>
                                    <NavigationList>
                                        <NavigationItem>
                                            Тел: <NavigationLink sx={{textDecoration: 'underline'}}
                                                                 href={'tel:+380123456789'}>+380123456789</NavigationLink>
                                        </NavigationItem>
                                        <NavigationItem>
                                            Імейл: <NavigationLink
                                            href={'mailto:b2b@hyggy.com'}>b2b@hyggy.com</NavigationLink>
                                        </NavigationItem>
                                        <NavigationItem>
                                            <NavigationLink href={'#'}
                                                            sx={{fontWeight: '500', textDecoration: 'underline'}}>
                                                Зв'яжіться з нами
                                            </NavigationLink>
                                        </NavigationItem>
                                    </NavigationList>
                                </Navigation>
                            </NavigationBlockItem>
                            <NavigationBlockItem>
                                <NavigationTitle>
                                    Зворотній зв’язок:
                                </NavigationTitle>
                                <Navigation>
                                    <NavigationList>
                                        <NavigationItem>
                                            <NavigationLink
                                                href={'mailto:email@hyggy.com'}>email@hyggy.com</NavigationLink>
                                        </NavigationItem>
                                        <NavigationItem>
                                            Тел: <NavigationLink sx={{textDecoration: 'underline'}}
                                                                 href={'tel:+380123456789'}>+380123456789</NavigationLink>
                                        </NavigationItem>
                                        <NavigationItem>
                                            <NavigationLink href={'#'}
                                                            sx={{fontWeight: '500', textDecoration: 'underline'}}>
                                                Зв'яжіться з нами
                                            </NavigationLink>
                                        </NavigationItem>
                                    </NavigationList>
                                </Navigation>
                            </NavigationBlockItem>
                        </NavigationBlock>
                    </NavigationBlock>
                    <UnderLinksBlock>
                        <PaymentMethodsBlock>
                            <PaymentLink href="#">
                                <PaymentImage src="/visa.png" alt="Visa"/>
                            </PaymentLink>
                            <PaymentLink href="#">
                                <PaymentImage src="/mastercard.png" alt="Mastercard"/>
                            </PaymentLink>
                            <PaymentLink href="#">
                                <PaymentImage src="/googlepay.png" alt="Google Pay"/>
                            </PaymentLink>
                        </PaymentMethodsBlock>
                        <SocialLinksBlock>
                            <SocialLink href="#">
                                <SocialImage src="/telegram.png" alt="Telegram"/>
                            </SocialLink>
                            <SocialLink href="#">
                                <SocialImage src="/instagram.png" alt="Instagram"/>
                            </SocialLink>
                            <SocialLink href="#">
                                <SocialImage src="/facebook.png" alt="Facebook"/>
                            </SocialLink>
                            <SocialLink href="#">
                                <SocialImage src="/youtube.png" alt="YouTube"/>
                            </SocialLink>
                        </SocialLinksBlock>
                    </UnderLinksBlock>
                </FooterContent>
            </Wrapper>
        </FooterBlock>
    );
};

export default Footer;