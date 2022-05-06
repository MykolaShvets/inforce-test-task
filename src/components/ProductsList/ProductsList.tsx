import React, { FC, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProducts } from '../../store/slices/productSlice';
import { ProductItem}  from '../ProductItem/ProductItem';
import { Form } from '../Form/Form';
import { Modal } from '../Modal/Modal';

import './ProductList.css';

const ProductsList: FC = () => {
    const [isNewProdModalActive, setIsNewProdModalActive] = useState<boolean>(false);
    const { products } = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <div className='products-list'>
            <div className='products'>
                {products && products.map(product => <ProductItem product={ product } key={ product.id }/>)}
            </div>
            <button className='add__btn' onClick={ () => setIsNewProdModalActive(true) }>Add</button>
            <Modal children={ <Form modalAction={ setIsNewProdModalActive }/> }
                   active={ isNewProdModalActive }
                   setActive={ setIsNewProdModalActive } />
        </div>
    );
};

export { ProductsList };
