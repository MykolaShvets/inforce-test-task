import React, { FC, useState } from 'react';

import { IProduct } from '../../interfaces/productInterface';
import { Form } from '../Form/Form';
import { useAppDispatch } from '../../hooks/redux';
import { deleteProduct } from '../../store/slices/productSlice';

import './ProductModal.css';

const ProductModal: FC<{ product: IProduct }> = ({ product }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const dispatch = useAppDispatch();

    if (isEdit) {
        return <Form product={product} modalAction={ setIsEdit }/>
    }

    return (
        <div className='product-modal__container'>
            <img src={ product.imageUrl } alt=''/>
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <p>{ product.width } x { product.height }</p>
            <p>{ product.price }</p>
            <button onClick={ () => setIsEdit(true) }>Edit</button>
            <button onClick={ () => dispatch(deleteProduct(product?.id)) }>Delete</button>
        </div>
    );
};

export { ProductModal };
