import React from 'react';
import { styled } from '@mui/system';
import {DiscountType, Product} from "../consts.ts";

const CardBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    flexDirection: 'column',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('md')]: {
        maxWidth: '330px',
    },
}));

const ImageBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative'
});

const MainImage = styled('img')(({theme}) => ({
    width: '390px',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'fill',
    [theme.breakpoints.down('md')]: {
        height: '100%',
        width: '100%',
    },
}));

const AdditionalInfoBlock = styled('div')({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    gap: '15px',
    left: '0',
    bottom: '0',
});

const DiscountBlock = styled('div')({
    backgroundColor: '#E30505',
    padding: '10px 12px',
});

const DiscountText = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '24px',
    fontWeight: '700',
    color: '#fff',
    padding: '0',
    margin: '0',
});

const NewBlock = styled('div')({
    backgroundColor: '#44D810',
    padding: '10px',
});

const NewText = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff',
    padding: '0',
    margin: '0',
});

const HeartButton = styled('button')({
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '0',
    border: 'none',
});


const HeartImage = styled('img')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const InfoBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '14px',
    gap: '13px',
});

const BrandName = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: '700',
    color: '#231f20',
    padding: '0',
    margin: '0',
});

const ProductName = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '18px',
    fontWeight: '400',
    color: '#231f20',
    padding: '0',
    margin: '0',
});

const StarsBlock = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
});

const FillStar = styled('img')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    margin: '0',
});

const PriceBlock = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
});

const MainPrice = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '36px',
    fontWeight: '700',
    color: '#231f20',
    padding: '0',
    margin: '0',
});

const PrevPrice = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '24px',
    fontWeight: '700',
    color: '#000',
    opacity: '0.5',
    textDecoration: 'line-through',
    padding: '0',
    margin: '0',
});

const PrevPriceAdditional = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontWeight: '700',
    color: '#000',
    opacity: '0.5',
    textDecoration: 'line-through',
    padding: '0',
    margin: '0',
});

const MainPriceAdditional = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontWeight: '700',
    color: '#231f20',
    padding: '0',
    margin: '0',
});

const FromBlock = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
})

const FromIcon = styled('img')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const FromText = styled('p')({
    fontFamily: 'Raleway',
    fontSize: '14px',
    fontWeight: '300',
    color: '#000',
    padding: '0',
    margin: '0',
});

interface ProductItemProps {
    product: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

    let finalPrice = product.price;
    if (product.isDiscount && product.discountAmount) {
        finalPrice =
            product.discountType === DiscountType.Percentage
                ? finalPrice - (finalPrice * product.discountAmount) / 100
                : finalPrice - product.discountAmount;
    }

    // проверяем, новинка ли товар (меньше месяца)
    const now = Date.now();
    const addedTime = new Date(product.addedAt).getTime();
    const oneMonthMs = 30 * 24 * 60 * 60 * 1000;
    const isNew = now - addedTime <= oneMonthMs;
    return(
        <CardBlock>
            <ImageBlock>
                <MainImage src={product.imageAsset.path} alt={product.name + ` image`}></MainImage>
                <HeartButton>
                    <HeartImage src={'src/assets/heart.png'} alt={'Heart Icon'}/>
                </HeartButton>
                <AdditionalInfoBlock>
                    {product.isDiscount && product.discountAmount && (
                    <DiscountBlock>
                        <DiscountText>
                            {product.discountType === DiscountType.Percentage
                                ? `-${product.discountAmount}%`
                                : `-${product.discountAmount}$`}
                        </DiscountText>
                    </DiscountBlock>
                    )}
                    {isNew && (
                        <NewBlock>
                            <NewText>Новинка</NewText>
                        </NewBlock>
                    )}
                </AdditionalInfoBlock>
            </ImageBlock>
            <InfoBlock>
                <BrandName>{product.brand.name}</BrandName>
                <ProductName>{product.name}</ProductName>
                <StarsBlock>
                    <FillStar src={'src/assets/star-fill.png'} alt={'Star Icon'}/>
                    <FillStar src={'src/assets/star-fill.png'} alt={'Star Icon'}/>
                    <FillStar src={'src/assets/star-fill.png'} alt={'Star Icon'}/>
                    <FillStar src={'src/assets/star-fill.png'} alt={'Star Icon'}/>
                    <FillStar src={'src/assets/star-fill.png'} alt={'Star Icon'}/>
                </StarsBlock>
                <PriceBlock>
                    <MainPrice>{finalPrice + `$`}</MainPrice>
                    <MainPriceAdditional>{`/шт.`}</MainPriceAdditional>
                </PriceBlock>
                {product.isDiscount && product.discountAmount && (
                    <PriceBlock>
                        <PrevPrice>{product.price}$</PrevPrice>
                        <PrevPriceAdditional>/шт.</PrevPriceAdditional>
                    </PriceBlock>
                )}
                <FromBlock>
                    <FromIcon src={'src/assets/red-circle.png'} alt={'Red Icon'}/>
                    <FromText>{'Доставка'}</FromText>
                </FromBlock>
                <FromBlock>
                    <FromIcon src={'src/assets/green-circle.png'} alt={'Red Icon'}/>
                    <FromText>{'В наявності'}</FromText>
                </FromBlock>
            </InfoBlock>
        </CardBlock>
    );

};

export default ProductItem;