import React from 'react';
import {styled} from '@mui/system';

const AdvantagesBlock = styled('div')({
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '50px 0',
    marginTop: '85px',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.25)',
});

const AdvantagesContent = styled('div')(({theme}) => ({
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1400px',
    padding: '0 17px',
    [theme.breakpoints.down('md')]: {
        gap: '70px',
        justifyContent: 'center',
        alignItems: 'center',
    },  
}));


const AdvantageCard = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '30px',
});

const AdvantageTitle = styled('h2')({
    fontSize: '24px',
    fontWeight: '700',
    color: '#231f20',
    margin: '0',
    textTransform: 'uppercase',
    textAlign: 'center'
});

const JobAdvantages: React.FC = () => {
    return (
        <AdvantagesBlock>
            <AdvantagesContent>
                <AdvantageCard>
                    <img src="/world.png" alt="World"/>
                    <AdvantageTitle>МІЖНАРОДНІ МОЖЛИВОСТІ</AdvantageTitle>
                </AdvantageCard>
                <AdvantageCard>
                    <img src="/steps.png" alt="Steps"/>
                    <AdvantageTitle>СТРІМКА КАР’ЄРА</AdvantageTitle>
                </AdvantageCard>
                <AdvantageCard>
                    <img src="/team.png" alt="Team"/>
                    <AdvantageTitle>КОМАНДНИЙ ДУХ</AdvantageTitle>
                </AdvantageCard>
            </AdvantagesContent>
        </AdvantagesBlock>
    );
};

export default JobAdvantages;