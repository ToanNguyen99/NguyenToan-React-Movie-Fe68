import { baseService } from "./baseServices"
import { GROUPID } from 'util/settings/config';
export default class ListCinemaServices extends baseService {
    constructor() {
        super();
    }
    getListCinema = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    getMovieShowTimeInfo = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)

    }
}

export const listCinemaServices = new ListCinemaServices;