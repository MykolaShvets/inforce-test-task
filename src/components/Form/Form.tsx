import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { IProduct } from '../../interfaces/productInterface';
import { addNewProduct, editProduct } from '../../store/slices/productSlice';
import { useAppDispatch } from '../../hooks/redux';

import './Form.css';

const Form: FC<{ product?: IProduct, modalAction: any }> = ({ product, modalAction }) => {
    const {register, handleSubmit} = useForm();
    const dispatch = useAppDispatch();

    //have some problems with types...
    const formSubmit = (data: any) => {

        if (product) {
            dispatch(editProduct({ id: Number(product.id), updatedProduct: data }));
            modalAction(false);
            return;
        }

        dispatch(addNewProduct(data));
        modalAction(false);
    };

    return (
        <form onSubmit={ handleSubmit(formSubmit) } className='form'>
            <label>Name:
                <input type='text'
                       defaultValue={ product? `${ product.name }` : '' }
                       { ...register('name') }/>
            </label>
            <label>Image:
                <input type='text'
                       defaultValue={ product? `${product.imageUrl }` : ''}
                       { ...register('imageUrl') }/>
            </label>
            <label>Description:
                <input type='text'
                       defaultValue={product? `${product.description }` : ''}
                       { ...register('description') }/>
            </label>
            <label>Width:
                <input type='text'
                       defaultValue={ product? `${product.width}` : '' }
                       { ...register('width') }/>
            </label>
            <label>Height:
                <input type='text'
                       defaultValue={ product? `${ product.height}` : '' }
                       { ...register('height') }/>
            </label>
            <label>Price:
                <input type='text'
                       defaultValue={ product? `${product.price}` : '' }
                       { ...register('price') }/>
            </label>
            <input type='submit'/>
        </form>
    );
};

export { Form };
