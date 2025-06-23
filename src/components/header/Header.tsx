import React, {useRef, useState} from 'react';
import {styled} from '@mui/system';
import {useNavigate} from "react-router-dom";


const HeaderBlock = styled('header')({
    width: '100%',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.25)',
});

const UpLine = styled('div')({
    width: '100%',
    backgroundColor: '#00aaad',
    height: '59px'
});

const HeaderContent = styled('div')({
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const HeaderUpperPart = styled('div')(({theme}) => ({
    width: '1629px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down(1700)]: {
        width: '100%',
        padding: '20px 20px 0 20px',
    },
}));

const HeaderBottomPart = styled('div')(({theme}) => ({
    width: '1629px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down(1700)]: {
        width: '100%',
        padding: '0 20px',
    },
    [theme.breakpoints.down(1350)]: {
        display: 'none',
    },
}));

const HeaderBottomMobilePart = styled('div')(({theme}) => ({
    width: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        padding: '20px',
    },
}));

const HamburgerLogoBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row-reverse',
        gap: '25px',
    },
}));

const DecorativeLine = styled('div')(({theme}) => ({
    height: '1px',
    width: '100%',
    color: '#000',
    backgroundColor: '#000',
    opacity: '50%',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

const LogoBlock = styled('div')(({theme}) => ({
    width: '110px',
    height: '71px',
    marginRight: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        margin: '0px',
        width: '100%',
        height: '100%'
    },
}));

const HamburgerBlock = styled('div')(({theme}) => ({
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {},
}));

const MenuText = styled('p')(({theme}) => ({
    fontFamily: 'Raleway',
    fontSize: '30px',
    fontWeight: '400',
    color: '#231f20',
    [theme.breakpoints.down('lg')]: {
        display: 'none',
    },
}));

const InputBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '22px 22px 22px 45px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

const InputBlockMobile = styled('div')(({theme}) => ({
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '22px 22px 22px 45px',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        padding: '0px'
    },
}));

const InputWrapper = styled('div')(({theme}) => ({
    width: '670px',
    backgroundColor: '#e0e0e0',
    height: '70px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: {
        width: '500px',
        padding: '10px',
    },
    [theme.breakpoints.down('lg')]: {
        width: '325px',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const SearchIconStyled = styled('img')({
    pointerEvents: 'none',
    cursor: 'pointer',
    color: '#757575',
});

const InputStyled = styled('input')({
    backgroundColor: '#e0e0e0',
    height: '70px',
    width: '560px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    color: '#231f20',
    fontSize: '16px',
    '&::placeholder': {
        color: '#757575',
        opacity: 1,
    },
});

const UpperButtonBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const UpperButtonItem = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '86px',
    [theme.breakpoints.down(1350)]: {
        gap: '30px',
        width: '100%'
    },
    [theme.breakpoints.down('md')]: {
        gap: '10px',
    },
}));

const UpperButton = styled('button')({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#231f20',
    border: 'none',
    fontSize: '20px',
    fontWeight: '400',
    '&:hover': {
        textDecoration: 'underline',
    }
});

const UpperButtonImage = styled('img')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '22px',
    },
}));

const HamburgerButtonImage = styled('img')(({theme}) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        width: '35px',
    },
}));

const LogoImage = styled('img')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '72px',
    },
}));

const UpperButtonText = styled('p')(({theme}) => ({
    color: '#231f20',
    border: 'none',
    fontSize: '20px',
    fontWeight: '400',
    margin: '0',
    '&:hover': {
        textDecoration: 'underline',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const StoreSelector = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const StoreCurrentItem = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: "pointer",
    gap: '5px',
});

const CurrentStoreName = styled('p')({
    fontSize: '24px',
    fontWeight: '400',
    padding: '0',
    color: '#000'
});

const DownHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '35px, 0px',
    width: '100%'
});

const ButtonDownHeaderBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '17px',
});

const NavButton = styled('button')({
    padding: '12px 42px',
    backgroundColor: '#e0e0e0',
    color: '#231f20',
    fontSize: '24px',
    fontWeight: '400',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0px',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: '#00AAAD',
        color: '#fff'
    }
});



const Header: React.FC = () => {
    
    const navigate = useNavigate();
    const headerRef = useRef<HTMLDivElement>();
    const scrollToAnchor = (anchor: string) => {
        const element = document.getElementById(anchor);

        if (element) {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };
    const handleAnchorClick = (event: React.MouseEvent<HTMLButtonElement>, href: string) => {
        event.preventDefault();

        const [path, anchor] = href.split('#');

        if (path && path !== window.location.pathname) {
            navigate(path);
            setTimeout(() => {
                scrollToAnchor(anchor);
            }, 0);
        } else if (anchor) {
            scrollToAnchor(anchor);
        }
    };
    return (
        <HeaderBlock>
            <UpLine/>
            <HeaderContent>
                <HeaderUpperPart>
                    <HamburgerLogoBlock>
                        <LogoBlock>
                            <a href="/" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <LogoImage src="/logo.svg" alt="Logo"/>
                            </a>
                        </LogoBlock>
                        <HamburgerBlock>
                            <HamburgerButtonImage src="/hamburger-icon.png" alt="Hamburger icon"/>
                            <MenuText>Меню</MenuText>
                        </HamburgerBlock>
                    </HamburgerLogoBlock>
                    <InputBlock>
                        <InputWrapper>
                            <InputStyled placeholder="Пошук..."/>
                            <SearchIconStyled src='/search.svg'/>
                        </InputWrapper>
                    </InputBlock>
                    <UpperButtonBlock>
                        <UpperButtonItem>
                            <UpperButton>
                                <UpperButtonImage src="/heart.png" alt="Heart"/>
                                <UpperButtonText>Обране</UpperButtonText>
                            </UpperButton>
                            <UpperButton>
                                <UpperButtonImage src="/login.svg" alt="Login"/>
                                <UpperButtonText>Вхід</UpperButtonText>
                            </UpperButton>
                            <UpperButton>
                                <UpperButtonImage src="/cart.svg" alt="Heart"/>
                                <UpperButtonText>Кошик</UpperButtonText>
                            </UpperButton>
                        </UpperButtonItem>
                    </UpperButtonBlock>
                </HeaderUpperPart>
                <DecorativeLine/>
                <HeaderBottomPart>
                    <DownHeader>
                        <StoreSelector>
                            <StoreCurrentItem>
                                <img src="/location.png" alt="Location"/>
                                <CurrentStoreName>HYGGY Київ ТЦ Променада</CurrentStoreName>
                                <img src="/arrow-down.png" alt="Arrow"/>
                            </StoreCurrentItem>
                        </StoreSelector>
                        <ButtonDownHeaderBlock>
                            <NavButton onClick={(e) => handleAnchorClick(e, `/blog`)}>Блог</NavButton>
                            <NavButton onClick={(e) => handleAnchorClick(e, `/products`)}>Магазини</NavButton>
                            <NavButton>Питання-відповідь</NavButton>
                            <NavButton onClick={(e) => handleAnchorClick(e, `/job`)}>Робота</NavButton>
                        </ButtonDownHeaderBlock>
                    </DownHeader>
                </HeaderBottomPart>

                <HeaderBottomMobilePart>
                    <InputBlockMobile>
                        <InputWrapper>
                            <InputStyled placeholder="Пошук..."/>
                            <SearchIconStyled src='/search.svg'/>
                        </InputWrapper>
                    </InputBlockMobile>
                </HeaderBottomMobilePart>

            </HeaderContent>
        </HeaderBlock>
    );
};

export default Header;