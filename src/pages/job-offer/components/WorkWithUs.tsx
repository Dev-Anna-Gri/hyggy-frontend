import React from 'react';
import {styled} from '@mui/system';

const WorkWithUsBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const MainImage = styled('img')(({theme}) => ({
    width: '100%',
    marginBottom: '50px',
    
    [theme.breakpoints.down('md')]: {
        height: '207px',
        objectFit: 'cover',
    },
}));

const Title = styled('h1')(({theme}) => ({
    fontSize: '40px',
    fontWeight: '600',
    fontFamily: 'Inter',
    margin: '0',
    color: '#000',
    marginBottom: '35px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
    },
}));

const DescriptionBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    padding: '0 50px',
    gap: '20px',
    alignItems: 'center',
    flexDirection: 'column',
});

const Description = styled('p')(({theme}) => ({
    fontFamily: 'Inter',
    fontSize: '24px',
    color: '#000',
    margin: '0',
    lineHeight: '40px',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        lineHeight: '22px'
    },
}));

const WorkWithUs: React.FC = () => {
    return(
        <WorkWithUsBlock>
            <MainImage src="/job-main-img.png" alt="Work with Us"/>
            <Title>Працюй з нами</Title>
            <DescriptionBlock>
                <Description>
                    Ми – сучасний і динамічний інтернет-магазин, який активно зростає та шукає талановитих і 
                    мотивованих людей. Якщо ти готовий долучитися до команди, що рухає інновації та обслуговує 
                    клієнтів на найвищому рівні, ми будемо раді вітати тебе серед нас! Ми цінуємо професійний 
                    розвиток наших співробітників. Пропонуємо навчання, тренінги та можливість кар'єрного зростання 
                    у різних напрямках – від обслуговування клієнтів до IT і маркетингу. Ми цінуємо внесок кожного 
                    члена нашої команди, тому пропонуємо конкурентну оплату праці та систему 
                    бонусів за результативну роботу.
                </Description>
                <Description>
                    Наш інтернет-магазин спеціалізується на продажі товарів для дому, меблів та декору. 
                    Ми прагнемо надавати нашим клієнтам широкий вибір високоякісної продукції за доступними цінами. 
                    Завдяки постійній орієнтації на потреби споживачів та впровадженню новітніх технологій, 
                    ми стали одним із лідерів ринку. Наші головні цінності – це довіра, інновації та сервіс, 
                    орієнтований на клієнта. Ми працюємо для того, щоб кожен покупець отримував найкращий досвід 
                    покупок, а кожен працівник – можливість для особистого та професійного розвитку.
                </Description>
            </DescriptionBlock>
        </WorkWithUsBlock>
    );
};

export default WorkWithUs;