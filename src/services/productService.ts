import { axiosService } from './axioService';
import { IProduct } from '../interfaces/productInterface';
import { urls } from '../configs/urlConfig';

export const productService = {
    getAll: () => axiosService.get<IProduct[]>(urls.products),
    createNew: (data: IProduct) => axiosService.post<IProduct>(urls.products, data),
    editById: (id: number, data: IProduct) => axiosService.patch<IProduct>(`${urls.products}/${id}`, data),
    deleteById: (id: number | undefined) => axiosService.delete(`${urls.products}/${id}`)
}
