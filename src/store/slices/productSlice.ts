import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/productInterface';
import { productService } from '../../services/productService';

interface IProductState {
    products: IProduct[];
};

const initialState: IProductState = {
    products: []
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

export const addNewProduct = createAsyncThunk<void, IProduct>(
    'productSlice/addNewProduct',
    async (newProduct, {dispatch}) => {
        try {
            const { data } = await productService.createNew(newProduct);
        } catch (e: any) {
            console.log(e.message);
        }
    }
);

export const deleteProduct = createAsyncThunk<void, number | undefined>(
    'productSlice/deleteProduct',
    async (id, {dispatch}) => {
        try {
            await productService.deleteById(id);
        } catch (e: any) {
            console.log(e.message);
        }
    }
);


export const editProduct = createAsyncThunk<void, { id: number, updatedProduct: IProduct }>(
    'productSlice/editProduct',
    async ({id, updatedProduct}, {dispatch}) => {
        try {
            const { data } = await productService.editById(id, updatedProduct);
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
        }
    }
});


export const productReducer = productSlice.reducer;

export const { SET_PRODUCTS } = productSlice.actions;
