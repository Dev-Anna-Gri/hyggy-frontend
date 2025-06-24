import React, {useEffect, useState} from 'react';
import {styled} from '@mui/system';
import Header from "../../components/header/Header.tsx";
import Advantages from "../home/components/Advantages.tsx";
import Mailing from "../home/components/Mailing.tsx";
import Footer from "../../components/footer/Footer.tsx";
import ProductItem from "./components/ProductItem.tsx";
import {Brand, Category, DiscountType, Product, Subcategory} from './consts';
import {getAllProducts} from "../../api.ts";

const Background = styled('div')({
    width: '100%',
    padding: 0,
    margin: 0,
});

const Wrapper = styled('div')({
    width: '100%',
    maxWidth: '1650px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '0px 17px'
});

const DecorativeLine = styled('div')({
    height: '1px',
    width: '100%',
    color: '#000',
    backgroundColor: '#000',
    opacity: '50%',
});

const ProductBlock = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'stretch',
    width: '100%',
    flexWrap: 'wrap',
    paddingTop: '50px',
    gap: '30px 33px',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
    },
}));

// const brand: Brand = { id: 1, name: 'BISTRUP' };
// const category: Category = { id: 1, name: 'Товари для дому' };
// const subcategory: Subcategory = { id: 1, name: 'Стільці', category };
//
// // 2. Массив продуктов
// const products: ({
//     image: string;
//     addedAt: Date;
//     smallDescription: string;
//     discountAmount: number;
//     isDiscount: boolean;
//     fullTextHTML: string;
//     discountTime: Date;
//     price: number;
//     name: string;
//     discountType: null;
//     id: number;
//     subcategory: Subcategory;
//     brand: Brand
// } | {
//     image: string;
//     addedAt: Date;
//     smallDescription: string;
//     discountAmount: number;
//     isDiscount: boolean;
//     fullTextHTML: string;
//     discountTime: Date;
//     price: number;
//     name: string;
//     discountType: DiscountType;
//     id: number;
//     subcategory: Subcategory;
//     brand: Brand
// })[] = [
//     {
//         id: 1,
//         name: 'Стілець обідній BISTRUP оливковий/дуб',
//         image: '/src/assets/product1.png',
//         smallDescription: 'Маленький опис',
//         price: 100,
//         brand,
//         fullTextHTML: '',
//         subcategory,
//         isDiscount: false,
//         discountType: null,
//         discountAmount: 0,
//         discountTime: new Date(),
//         addedAt: new Date(),
//     },
//     {
//         id: 2,
//         name: 'Стілець обідній BISTRUP оливковий/дуб',
//         image: '/src/assets/product2.png',
//         smallDescription: 'Маленький опис',
//         price: 100,
//         brand,
//         fullTextHTML: '',
//         subcategory,
//         isDiscount: true,
//         discountType: DiscountType.Percentage,
//         discountAmount: 40,
//         discountTime: new Date(),
//         addedAt: new Date(),
//     }
// ];
const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);
    
    return (
        <Background>
            <Header/>
            <Wrapper>
                {loading ? (
                    <p>Загрузка...</p>
                ) : (
                    <ProductBlock>
                        {products.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </ProductBlock>
                )}
            </Wrapper>
            <Advantages/>
            <Wrapper>
                <Mailing/>
            </Wrapper>
            <DecorativeLine sx={{marginBottom: '115px'}}/>
            <Footer/>
        </Background>
    );
};

export default Products;