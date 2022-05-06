import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../../interfaces/productInterface';
import { IComment } from '../../interfaces/commentInterface';
import { productService } from '../../services/productService';
import { commentService } from '../../services/commentService';

interface IProductState {
    products: IProduct[];
    product: IProduct | null;
    comments: IComment[];
};

const initialState: IProductState = {
    products: [],
    product: null,
    comments: []
};

export const getProducts = createAsyncThunk(
    'productSlice/getProducts',
    async (_, {dispatch}) => {
        try {
            const { data } = await productService.getAll();
            dispatch(SET_PRODUCTS({ products: data }));
        } catch (e: any) {
            console.log(e.message);
        }
    }
);


export const getProduct = createAsyncThunk<void, string | undefined>(
    'productSlice/getProduct',
    async (id, {dispatch}) => {
        try {
            const { data } = await productService.getById(id);
            dispatch(SET_PRODUCT({ product: data }));
        } catch (e: any) {
            console.log(e.message);
        }
    }
);

export const addNewProduct = createAsyncThunk<void, IProduct>(
    'productSlice/addNewProduct',
    async (newProduct, { dispatch }) => {
        try {
            const { data } = await productService.createNew(newProduct);
            dispatch(CREATE_NEW_PRODUCT({ product: data }));
        } catch (e: any) {
            console.log(e.message);
        }
    }
);

export const deleteProduct = createAsyncThunk<void, number | undefined>(
    'productSlice/deleteProduct',
    async (id, { dispatch }) => {
        try {
            await productService.deleteById(id);
            const { data } = await productService.getAll();
            dispatch(SET_PRODUCTS({ products: data }));
        } catch (e: any) {
            console.log(e.message);
        }
    }
);


export const editProduct = createAsyncThunk<void, { id: number, updatedProduct: IProduct }>(
    'productSlice/editProduct',
    async ({id, updatedProduct}, {dispatch}) => {
        try {
            await productService.editById(id, updatedProduct);
            const { data } = await productService.getById(id.toString());
            dispatch(SET_PRODUCT({ product: data }));
        } catch (e: any) {
            console.log(e.message);
        }
    }
);

export const getComments = createAsyncThunk(
    'productSlice/getComments',
    async (_, { dispatch }) => {
        try {
            const { data } = await commentService.getAll();
            dispatch(SET_COMMENTS({ comments: data }));
        } catch (e: any){
            console.log(e.message);
        }
    }
);

export const addComment = createAsyncThunk<void, { comment: IComment }>(
    'productSlice/addComment',
        async ({comment}, { dispatch }) => {
        try {
          const { data } = await commentService.createNew(comment);
          dispatch(CREATE_NEW_COMMENT({ comment: data }));
        } catch (e: any){
            console.log(e.message);
        }
    }
);

export const deleteComment = createAsyncThunk<void, number | undefined>(
    'productSlice/deleteComment',
    async (id, { dispatch }) => {
        try {
            await commentService.deleteById(id);
            const { data } = await commentService.getAll();
            dispatch( SET_COMMENTS({ comments: data }));
        } catch (e: any) {
            console.log(e.message);
        }
    }
);


const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        SET_PRODUCTS: (state, action: PayloadAction<{ products: IProduct[] }>) => {
            state.products = action.payload.products;
        },
        SET_PRODUCT: (state, action: PayloadAction<{ product: IProduct }>) => {
            state.product = action.payload.product;
        },
        SET_COMMENTS: (state, action: PayloadAction<{ comments: IComment[] }>) => {
            state.comments = action.payload.comments;
        },
        CREATE_NEW_PRODUCT: (state, action: PayloadAction<{ product: IProduct }>) => {
            state.products.push(action.payload.product);
        },
        CREATE_NEW_COMMENT: (state, action: PayloadAction<{ comment: IComment }>) => {
            state.comments.push(action.payload.comment);
        }
    }
});


export const productReducer = productSlice.reducer;

export const {
    SET_PRODUCTS,
    SET_PRODUCT,
    CREATE_NEW_PRODUCT,
    SET_COMMENTS,
    CREATE_NEW_COMMENT
} = productSlice.actions;
