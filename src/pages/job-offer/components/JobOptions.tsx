import React from 'react';
import {styled} from '@mui/system';

const JobOptionsBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: '75px',
    [theme.breakpoints.down(1650)]: {
        justifyContent: 'center',
        gap: '35px',
    },
}));

const OptionCard = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0',
    position: 'relative',
});

const OptionImage = styled('img')({
    borderRadius: '0', 
    width: '100%',
});

const Title = styled('h2')(({theme}) => ({
    fontFamily: 'Inter',
    fontSize: '40px',
    fontWeight: '800',
    color: '#fff',
    position: 'absolute',
    margin: '0',
    bottom: '35px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}));

const JobOptions: React.FC = () => {
    return (
        <JobOptionsBlock>
            <OptionCard>
                <OptionImage src="/retail.png" alt="Retail"/>
                <Title>РІТЕЙЛ</Title>
            </OptionCard>
            <OptionCard>
                <OptionImage src="/contacts.png" alt="Contacts"/>
                <Title>КОНТАКТИ</Title>
            </OptionCard>
            <OptionCard>
                <OptionImage src="/main-office.png" alt="Main Office"/>
                <Title>ГОЛОВНИЙ ОФІС</Title>
            </OptionCard>
        </JobOptionsBlock>
    );
};

export default JobOptions;
