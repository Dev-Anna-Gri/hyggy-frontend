import React from 'react';
import {styled} from '@mui/system';

const AdvantagesBlock = styled('div')({
    width: '100%',
    backgroundColor: '#fff',
    padding: '55px',
    marginTop: '106px',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.25)',
})

const Wrapper = styled('div')({
    width: '100%',
    maxWidth: '1650px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
});

const AdvantagesContent = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xl')]: {
        justifyContent: 'center',
        gap: '30px',
    },
}));

const AdvantageItem = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '426px',
    gap: '20px',
});

const AdvantageDescription = styled('p')(({theme}) => ({
    margin: '0',
    fontSize: '16px',
    lineHeight: 'normal',
    fontWeight: '400',
    color: '#231f20',
    textAlign: 'left',
    [theme.breakpoints.down('xl')]: {
        textAlign: 'center',
    },
}));

const Advantages: React.FC = () => {
    return (
        <AdvantagesBlock>
            <Wrapper>
                <AdvantagesContent>
                    <AdvantageItem>
                        <img src="/chair.png" alt="Chair"/>
                        <AdvantageDescription>
                            Різноманітний вибір сучасних рішень для декорування та
                            облаштування як інтер’єру, так і екстер’єру.
                        </AdvantageDescription>
                    </AdvantageItem>
                    <AdvantageItem>
                        <img src="/flag.png" alt="Flag"/>
                        <AdvantageDescription>
                            Наш стиль нагадує скандинавський, але ми виходимо за рамки одного напрямку,
                            пропонуючи універсальні та функціональні варіанти, що задовольнять різні смаки.
                        </AdvantageDescription>
                    </AdvantageItem>
                    <AdvantageItem>
                        <img src="/catalog.png" alt="Catalog"/>
                        <AdvantageDescription>
                            Ми орієнтовані на різні категорії покупців, пропонуючи товари в
                            діапазоні від середньо-низьких до середньо-високих цін.
                        </AdvantageDescription>
                    </AdvantageItem>
                </AdvantagesContent>
            </Wrapper>
        </AdvantagesBlock>
    );
};

export default Advantages;