import React from 'react';
import {styled} from '@mui/system';

const AboutUsBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '38px 0px 46px 0',
    gap: '30px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },
}));

const ImageBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const AboutUsImage = styled('img')(({theme}) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
        width: '90%',
    },
}));

const TextBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column'
});

const Title = styled('h2')(({theme}) => ({
    fontSize: '36px',
    fontWeight: '600',
    color: '#231f20',
    margin: '0',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

const MobileTitle = styled('h2')(({theme}) => ({
    display: 'none',
    fontSize: '24px',
    fontWeight: '600',
    color: '#231f20',
    margin: '0',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    },
}));

const Text = styled('p')(({theme}) => ({
    fontSize: '24px',
    textAlign: 'left',
    color: '#231f20',
    fontWeight: '400',
    maxWidth: '800px',
    margin: '0',
    lineHeight: '1.2',
    [theme.breakpoints.down('xl')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        textAlign: 'justify',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));


const AboutUs: React.FC = () => {
    return (
        <AboutUsBlock>
            <MobileTitle>Про нас</MobileTitle>
            <ImageBlock>
                <AboutUsImage src="/about-us-image.png" alt="Chair image"/>
            </ImageBlock>
            <TextBlock>
                <Title>Про нас</Title>
                <Text>
                    У Hyggy ми робимо все можливе, щоб ваш будинок став більш затишним та стильним.
                    Ми пропонуємо ретельно відібрані меблі від надійних виробників, забезпечуючи відмінну
                    якість та сучасний дизайн. Наша мета – надати вам широкий вибір, який відповідає різним
                    смакам та бюджетам. Ми пишаємось тим, що наш асортимент включає як класичні, так і сучасні
                    рішення для будь-якого інтер'єру. Ми розуміємо, що купівля меблів – це важлива подія, і прагнемо
                    зробити цей процес простим та приємним. Наша команда професіоналів завжди готова допомогти вам з
                    вибором та відповісти на будь-які питання. Ми приділяємо особливу увагу кожному клієнту,
                    щоб ви могли знайти те, що вам потрібно. У [Назва магазину] ми прагнемо створити ідеальні умови
                    для комфортного та стильного проживання. Приєднуйтесь до нас та перетворіть свій будинок з нашими
                    рішеннями. Дякую, що вибираєте нас!
                </Text>
            </TextBlock>
        </AboutUsBlock>
    );
};

export default AboutUs;