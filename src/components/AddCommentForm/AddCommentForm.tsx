import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { date } from '../../configs/date';
import { useAppDispatch } from '../../hooks/redux';
import { addComment } from '../../store/slices/productSlice';

import './AddCommentForm.css';

const AddCommentForm: FC<{ productId: number, setIsComment: any }> = ({ productId, setIsComment }) => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useAppDispatch();


    const sendComment = (data: any) => {
        const comment = {
            productId,
            description: data.description,
            date: date
        };
        dispatch(addComment({ comment }));
        reset();
        setIsComment(false);
    }

    return (
        <form onSubmit={ handleSubmit(sendComment) } className='add-comment__body'>
            <label>Your comment: <input type='text' { ...register('description') }/></label>
            <input type='submit'/>
        </form>
    );
};

export { AddCommentForm };
