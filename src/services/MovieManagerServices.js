import { GROUPID } from 'util/settings/config';
import { baseService } from './baseServices';

export default class MovieManagerServices extends baseService {
    constructor() {
        super();
    }

    getListBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    getlistMovie = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

}
export const movieManagerServices = new MovieManagerServices();