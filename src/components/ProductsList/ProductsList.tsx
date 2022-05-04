import React, { FC, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProducts } from '../../store/slices/productSlice';
import { ProductItem}  from '../ProductItem/ProductItem';
import { Form } from '../Form/Form';

import './ProductList.css';

const ProductsList: FC = () => {
    const [isNewProdModalActive, setIsNewProdModalActive] = useState<boolean>(false)
    const { products } = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [products])

    return (
        <div className='products-list'>
            <div className='products'>
                {products && products.map(product => <ProductItem product={ product } key={ product.id }/>)}
            </div>
            <button onClick={ () => setIsNewProdModalActive(true) }>Add</button>
            <div className={isNewProdModalActive ? 'new-prod-form active' : 'new-prod-form'}>
                <button onClick={ () =>setIsNewProdModalActive(false) }>Close</button>
                <Form modalAction={ setIsNewProdModalActive }/>
            </div>
        </div>
    );
};

export { ProductsList };
