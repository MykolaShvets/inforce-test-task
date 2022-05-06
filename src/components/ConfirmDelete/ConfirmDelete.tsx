import React, { FC } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { deleteProduct } from '../../store/slices/productSlice';

import './ConfirnDelete.css';

const ConfirmDelete: FC<{ productId: number, setCanceled:any }> = ({ productId , setCanceled }) => {
    const dispatch = useAppDispatch();

    const confirmDelete = () => {
        dispatch(deleteProduct(productId));
        setCanceled(false);
    }

    return (
        <div className='confirm__body'>
            <button onClick={ () => confirmDelete() }>Confirm</button>
            <button onClick={ () => setCanceled(false) }>Cancel</button>
        </div>
    );
};

export {ConfirmDelete};
