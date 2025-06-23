import React from 'react';
import {styled} from '@mui/system';

const OurOffersBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '80px'
});

const MainInfoBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '35px',
    width: '100%',
    backgroundColor: '#00aaad'
});

const Title = styled('h2')(({theme}) => ({
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '36px',
    margin: '0',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}));

const Description = styled('p')(({theme}) => ({
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '40px',
    textAlign: 'justify',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '22px',
    },
}));

const CardsBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    
});

const CardItem = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        flexDirection: 'column-reverse',
    },
}));

const CardInfoBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: '90px 36px 0 36px',
    gap: '65px',
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: {
        padding: '36px',
    },
}));

const CardImage = styled('img')(({theme}) => ({
    width: '100%', 
    objectFit: 'cover',
    [theme.breakpoints.down('xl')]: {
        width: '50%',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const CardImageToHide = styled('img')(({theme}) => ({
    width: '100%',
    objectFit: 'cover',
    display: 'none',
    [theme.breakpoints.down('xl')]: {
        width: '50%',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        display: 'block',
    },
}));

const OurOffers: React.FC = () => {
    return (
        <OurOffersBlock>
            <MainInfoBlock>
                <Title sx={{color: '#fff'}}>ЗНАЙДИ РОБОТУ, ЯКУ ТИ ШУКАЄШ</Title>
                <Description sx={{color: '#fff'}}>
                    Ми віримо в потенціал кожного члена нашої команди. У нас ти зможеш постійно
                    вдосконалювати свої навички, відвідувати тренінги, брати участь у внутрішніх
                    програмах навчання та розвивати свою кар’єру. Ми підтримуємо ініціативи та заохочуємо
                    досягнення. Розвивайся в напрямках, які тобі цікаві – від клієнтського сервісу до логістики,
                    від маркетингу до IT-рішень. Ми розуміємо, наскільки важливо підтримувати баланс між роботою
                    та особистим життям. Тому пропонуємо гнучкий графік роботи,
                    що дозволяє поєднувати роботу з іншими важливими справами.
                </Description>
            </MainInfoBlock>
            <CardsBlock>
                <CardItem>
                    <CardImageToHide src={'/work-in-retail.png'}/>
                    <CardInfoBlock>
                        <Title sx={{color: '#231f20'}}>РОБОТА В РІТЕЙЛІ</Title>
                        <Description sx={{color: '#231f20'}}>
                            Окрім того, ти зможеш працювати віддалено з будь-якої точки світу, використовуючи сучасні 
                            технології для ефективної комунікації з командою. Ми цінуємо талант і наполегливість наших 
                            співробітників, тому пропонуємо гідну оплату праці та систему бонусів, яка мотивує досягати 
                            нових висот. Твоя праця буде винагороджена відповідно до твоїх зусиль і результатів. 
                            Наш інтернет-магазин постійно впроваджує новітні технології, щоб залишатися на піку ринку 
                            електронної комерції. В нашій компанії ти знайдеш колектив однодумців, які підтримують 
                            одне одного та прагнуть досягати спільних цілей.
                        </Description>
                    </CardInfoBlock>
                    <CardImage src={'/work-in-retail.png'}/>
                </CardItem>
                <CardItem>
                    <CardImageToHide src={'/work-in-main-office.png'}/>
                    <CardImage src={'/work-in-main-office.png'}/>
                    <CardInfoBlock>
                        <Title sx={{color: '#231f20'}}>РОБОТА В ГОЛОВНОМУ ОФІСІ</Title>
                        <Description sx={{color: '#231f20'}}>
                            Ми віримо, що успіх – це результат командної роботи, де кожен співробітник відіграє 
                            важливу роль. У нас ти знайдеш не тільки колег, але й друзів, які завжди готові допомогти 
                            та підтримати. У нас кожен співробітник може впливати на майбутнє компанії. Твої ідеї, 
                            ініціативи та пропозиції не залишаться непоміченими. Ми заохочуємо творчий підхід до 
                            роботи та надаємо можливість втілювати нові ідеї в життя. Ти зможеш робити реальний внесок 
                            у розвиток бізнесу, бачивши результати своєї праці. Ми віримо в чесність,
                            відповідальність та взаємодопомогу.
                        </Description>
                    </CardInfoBlock>
                </CardItem>
                <CardItem>
                    <CardImageToHide src={'/work-with-clients.png'}/>
                    <CardInfoBlock>
                        <Title sx={{color: '#231f20'}}>РОБОТА В ВІДДІЛІ ПО РОБОТІ З КЛІЄНТАМИ</Title>
                        <Description sx={{color: '#231f20'}}>
                            Окрім того, ти зможеш працювати віддалено з будь-якої точки світу, використовуючи сучасні
                            технології для ефективної комунікації з командою. Ми цінуємо талант і наполегливість наших
                            співробітників, тому пропонуємо гідну оплату праці та систему бонусів, яка мотивує досягати
                            нових висот. Твоя праця буде винагороджена відповідно до твоїх зусиль і результатів.
                            Наш інтернет-магазин постійно впроваджує новітні технології, щоб залишатися на піку ринку
                            електронної комерції. В нашій компанії ти знайдеш колектив однодумців, які підтримують
                            одне одного та прагнуть досягати спільних цілей.
                        </Description>
                    </CardInfoBlock>
                    <CardImage src={'/work-with-clients.png'}/>
                </CardItem>
            </CardsBlock>
            <MainInfoBlock>
                <Title sx={{color: '#fff'}}>ПРИЄДНУЙСЯ ДО НАШОЇ КОМАНДИ І ПРАЦЮЙ З НАМИ</Title>
                <Description sx={{color: '#fff'}}>
                    Ми віримо в потенціал кожного члена нашої команди. У нас ти зможеш постійно
                    вдосконалювати свої навички, відвідувати тренінги, брати участь у внутрішніх
                    програмах навчання та розвивати свою кар’єру. Ми підтримуємо ініціативи та заохочуємо
                    досягнення. Розвивайся в напрямках, які тобі цікаві – від клієнтського сервісу до логістики,
                    від маркетингу до IT-рішень. Ми розуміємо, наскільки важливо підтримувати баланс між роботою
                    та особистим життям. Тому пропонуємо гнучкий графік роботи,
                    що дозволяє поєднувати роботу з іншими важливими справами.
                </Description>
            </MainInfoBlock>
        </OurOffersBlock>
    );
};

export default OurOffers;