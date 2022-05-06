import {axiosService} from "./axioService";
import {urls} from "../configs/urlConfig";
import {IComment} from "../interfaces/commentInterface";

export const commentService = {
    getAll: () => axiosService.get<IComment[]>(urls.comments),
    createNew: (data: IComment) => axiosService.post<IComment>(urls.comments, data),
    deleteById: (id: number | undefined) => axiosService.delete(`${urls.comments}/${id}`)
}
