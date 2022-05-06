import React, {FC} from 'react';

import { useAppDispatch } from "../../hooks/redux";
import { deleteComment } from "../../store/slices/productSlice";
import { IComment } from "../../interfaces/commentInterface";

import './CommentItem.css';

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
    const dispatch = useAppDispatch();

    return (
        <div className='comment-item'>
            <p className='comment__description'>{ comment.description }</p>
            <p className='comment__date'>{ comment.date }</p>
            <button onClick={()=> dispatch(deleteComment(comment.id))}>Delete</button>
        </div>
    );
};

export { CommentItem };
