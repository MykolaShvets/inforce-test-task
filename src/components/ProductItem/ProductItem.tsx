import React, { FC, useState } from 'react';

import { IProduct } from '../../interfaces/productInterface';
import { ProductModal } from '../ProductModal/ProductModal';

import './ProductItem.css';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
    const [isProductModalActive, setIsProductModalActive] = useState<boolean>(false);

    return (
        <div onClick={() => <ProductModal product={ product }/>} className='item-box'>
            <img src={ product.imageUrl } alt=''/>
            <h2>{ product.name }</h2>
            <button onClick={ () => setIsProductModalActive(!isProductModalActive) }>Info
            </button>
            <div className={ isProductModalActive ? 'modal active' : 'modal' }>
                <button onClick={ () =>setIsProductModalActive(false) }>Close</button>
                <ProductModal product={ product }/>
            </div>
        </div>
    );
};

export { ProductItem };
