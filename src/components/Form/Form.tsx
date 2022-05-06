import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { IProduct } from '../../interfaces/productInterface';
import { addNewProduct, editProduct } from '../../store/slices/productSlice';
import { useAppDispatch } from '../../hooks/redux';

import './Form.css';

const Form: FC<{ product?: IProduct | null, modalAction: any }> = ({ product, modalAction }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    //have some problems with types...
    const formSubmit = (data: any) => {

        const {name, imageUrl, count, width, height, weight} = data;

        const newProduct: IProduct = {name, imageUrl, count, size: {width, height}, weight: `${weight}g`, comments: []}

        if (product) {
            dispatch(editProduct({ id: Number(product.id), updatedProduct: newProduct }));
            modalAction(false);
            return;
        }

        dispatch(addNewProduct(newProduct));
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
            <label>Count:
                <input type='number'
                       defaultValue={ product? `${product.count }` : ''}
                       { ...register('count') }/>
            </label>
            <label>Width:
                <input type='number'
                       defaultValue={ product? `${product.size.width}` : '' }
                       { ...register('width') }/>
            </label>
            <label>Height:
                <input type='number'
                       defaultValue={ product? `${ product.size.height}` : '' }
                       { ...register('height') }/>
            </label>
            <label>Weight:
                <input type='text'
                       defaultValue={ product? `${product.weight }` : ''}
                       { ...register('weight') }/>
            </label>
            <input type='submit'/>
            <button onClick={ ()=>modalAction(false) }>Cancel</button>
        </form>
    );
};

export { Form };
