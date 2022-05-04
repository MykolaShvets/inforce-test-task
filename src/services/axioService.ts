import axios from 'axios';

import {baseURL} from '../configs/urlConfig';

export const axiosService = axios.create({baseURL});
