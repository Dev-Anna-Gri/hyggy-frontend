import React from "react";
import {styled} from '@mui/system';

const BlogBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '41px',
});

const Title = styled('h2')(({theme}) => ({
    fontSize: '36px',
    fontWeight: '600',
    color: '#231f20',
    textAlign: 'center',
    padding: '6px 172px',
    backgroundColor: '#d9d9d9',
    margin: '0',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        padding: '8px 46px',
    },
}));

const SliderBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '30px',
    [theme.breakpoints.down(1700)]: {
        flexDirection: 'column',
    },
}));

const SlideItem = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    maxWidth: '810px',
    [theme.breakpoints.down(1700)]: {
        alignItems: 'center !important',
    },
}));

const SlideItemTitle = styled('h3')(({theme}) => ({
    fontSize: '24px',
    fontWeight: '600',
    color: '#231f20',
    maxWidth: '555px',
    margin: '0',
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px'
    },
}));

const SlideDescriptionBlock = styled('div')({
    padding: '21px',
    backgroundColor: '#d9d9d9',
    marginBottom: '50px'
});

const SlideDescription = styled('p')(({theme}) => ({
    fontSize: '20px',
    color: '#231f20',
    lineHeight: 'normal',
    margin: '0px',
    [theme.breakpoints.down(1700)]: {
        textAlign: 'justify !important',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px'
    },
}));

const SlideImage = styled('img')({
    width: '100%'
})

const SlideButton = styled('button')(({theme}) => ({
    padding: '19px 100px',
    backgroundColor: '#00aaad',
    color: '#fff',
    fontSize: '32px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '0',
    transition: 'all 0.3s',
    '&:hover': {
        backgroundColor: '#005f60',
    },
    [theme.breakpoints.down('md')]: {
        padding: '8px 46px',
        fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
    },
}));


const Blog: React.FC = () => {
    return (
        <BlogBlock>
            <Title>Блог</Title>
            <SliderBlock>
                <SlideItem sx={{alignItems: 'flex-start'}}>
                    <SlideImage src="/slide-img-1.png" style={{marginBottom: '40px'}} alt="Slide image"/>
                    <SlideItemTitle sx={{
                        top: '25px',
                        left: '25px',
                        textAlign: 'left'
                    }}>
                        Створіть Затишний Дім: 5 Порад з Вибору Меблів для Різних Кімнат
                    </SlideItemTitle>
                    <SlideDescriptionBlock>
                        <SlideDescription sx={{textAlign: 'left'}}>
                            Вибір меблів для вашого будинку – це не тільки питання стилю, але й комфорту
                            та функціональності. У цьому пості ми розповімо, як підібрати ідеальні предмети
                            для кожної кімнати вашого будинку, щоб створити затишний та гармонійний простір.
                        </SlideDescription>
                    </SlideDescriptionBlock>
                    <SlideButton>Детальніше</SlideButton>
                </SlideItem>

                <SlideItem sx={{alignItems: 'flex-end'}}>
                    <SlideImage src="/slide-img-2.png" style={{marginBottom: '40px'}} alt="Slide image"/>
                    <SlideItemTitle sx={{
                        top: '25px',
                        right: '25px',
                        textAlign: 'right'
                    }}>
                        Як Правильно Вибрати Освітлення для Різних Кімнат Вашої оселі
                    </SlideItemTitle>
                    <SlideDescriptionBlock>
                        <SlideDescription sx={{textAlign: 'right'}}>
                            Освітлення відіграє ключову роль у створенні комфортної атмосфери у вашому будинку.
                            Правильно підібране освітлення не тільки підкреслює стиль інтер'єру, але й впливає на
                            ваш настрій. Ми розповімо, як вибрати освітлення для кожної кімнати вашого будинку,
                            щоб створити ідеальну атмосферу.
                        </SlideDescription>
                    </SlideDescriptionBlock>
                    <SlideButton>Детальніше</SlideButton>
                </SlideItem>
            </SliderBlock>
        </BlogBlock>
    );
};

export default Blog;