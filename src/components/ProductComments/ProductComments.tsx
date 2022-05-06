import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getComments } from '../../store/slices/productSlice';
import { CommentItem } from '../CommentItem/CommentItem';

const ProductComments: FC<{ productId: number }> = ({ productId }) => {

    const { comments } = useAppSelector(state => state.productReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getComments())
    }, [])

    return (
        <div>
            { comments
                .filter(comment => comment.productId === productId)
                .map(comment => <CommentItem comment={ comment } key={ comment.id }/>) }
        </div>
    );
};

export { ProductComments };
