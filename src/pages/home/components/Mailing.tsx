import React from "react";
import {styled} from '@mui/system';

const MailingBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '65px',
    flexDirection: 'column',
    width: '100%'
});

const Title = styled('h2')(({theme}) => ({
    fontSize: '28px',
    fontWeight: '600',
    textAlign: 'center',
    color: '#231f20',
    [theme.breakpoints.down('xl')]: {
       fontSize: '24px',
    },
}));

const Description = styled('p')(({theme}) => ({
    fontSize: '24px',
    fontWeight: '400',
    color: '#231f20',
    textAlign: 'center',
    maxWidth: '1400px',
    [theme.breakpoints.down('xl')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
}));

const InputBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '72px 0 90px 0',
    width: '100%',
    gap: '30px',
    [theme.breakpoints.down(1700)]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.down('md')]: {
        gap: '10px',
    }
}));

const InputWrapper = styled('div')(({theme}) => ({
    backgroundColor: '#e0e0e0',
    height: '90px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '55px',
    [theme.breakpoints.down('md')]: {
        width: '50% !important',
        paddingLeft: '15px',
        height: '100%',
    },
}));

const InputStyled = styled('input')(({theme}) => ({
    backgroundColor: '#e0e0e0',
    height: '90px',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    width: '100%',
    color: '#231f20',
    fontSize: '32px',
    '&::placeholder': {
        color: '#757575',
        opacity: 1,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        height: '33px',
        width: '100%',
        padding: '20px 0'
    },
}));

const SubButton = styled('button')(({theme}) => ({
    padding: '20px 100px',
    backgroundColor: '#00aaad',
    color: '#fff',
    fontSize: '32px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s',
    '&:hover':{
        backgroundColor: '#005f60',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        fontWeight: '400',
        padding: '8px 46px',
        width: '50%',
    },

    [theme.breakpoints.down('sm')]: {
        padding: '8px 0',
    },
}));

const Mailing: React.FC = () => {
    return (
        <MailingBlock>
            <Title>
                Підпишись на розсилку новин та отримай код на безкоштовну доставку для свого першого замовлення!
            </Title>
            <Description>
                Підпишіться на нашу розсилку та отримайте бонус! 10% знижка на перше замовлення, 
                ексклюзивні пропозиції та ранній доступ до розпродажів. 
                Введіть свій email нижче та почніть отримувати переваги!
            </Description>
            <InputBlock>
                <InputWrapper sx={{width: '390px'}}>
                    <InputStyled placeholder="Ім'я" type={'name'} />
                </InputWrapper>
                <InputWrapper sx={{width: '810px'}}>
                    <InputStyled placeholder="E-mail" type={'email'} />
                </InputWrapper>
                <SubButton>Поділитися</SubButton>
            </InputBlock>
        </MailingBlock>
    );
};

export default Mailing;