import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../interfaces/productInterface';
import { ConfirmDelete } from '../ConfirmDelete/ConfirmDelete';
import { Modal } from '../Modal/Modal';

import './ProductItem.css';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
    const [isConfirm, setIsConfirm] = useState<boolean>(false);

    return (
        <div className='item-box'>
             <Link to={product.id? product.id.toString() : ''} >
                 <img src={ product.imageUrl } alt=''/>
                 <h2>{ product.name }</h2>
                </Link>
            <button onClick={ () => setIsConfirm(true) }>Delete</button>
            <Modal children={ <ConfirmDelete productId={ Number(product.id) } setCanceled={ setIsConfirm }/> }
                   setActive={ setIsConfirm }
                   active={ isConfirm }/>
        </div>
    );
};

export { ProductItem };
