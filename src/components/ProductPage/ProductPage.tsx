import React, {FC, useEffect, useRef, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getProduct } from '../../store/slices/productSlice';

import { Form } from '../Form/Form';
import { AddCommentForm } from '../AddCommentForm/AddCommentForm';
import { Modal } from '../Modal/Modal';
import { ProductComments } from '../ProductComments/ProductComments';

import './ProductPage.css';

const ProductPage: FC = () => {
    const { product } = useAppSelector(state => state.productReducer);
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isComment, setIsComment] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProduct(id))
    }, [])


    return (
        <div>
            <div className='header'>
                <Link to='/'> <h2>Product List</h2> </Link>
            </div>
            { product && (
            <div className='product-page__container'>
                <img src={ product.imageUrl } alt=''/>
                <h2>{ product.name }</h2>
                <p>Count: { product.count }</p>
                <p>Size: { product.size.width } x { product.size.height }</p>
                <p>Weight: { product.weight }</p>
            <div className='product__btns'>
                <button onClick={ () => setIsEdit(true) }>Edit</button>
                <button onClick={ () => dispatch(() => setIsComment(true)) }>Comment</button>
            </div>
            <ProductComments productId={ Number(product.id) }/>
                <Modal children={ <Form modalAction={ setIsEdit } product={ product }/> }
                       setActive={ setIsEdit }
                       active={ isEdit }/>
            <Modal children={ <AddCommentForm productId={ Number(product.id) } setIsComment={ setIsComment }/> }
                   setActive={ setIsComment }
                   active={ isComment }/>
            </div>
            ) }
        </div>
    );
};

export { ProductPage };
