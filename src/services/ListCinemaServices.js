import { baseService } from "./baseServices"
import { GROUPID } from 'util/settings/config';
export default class ListCinemaServices extends baseService {
    constructor() {
        super();
    }
    getListCinema = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
}
export const listCinemaServices = new ListCinemaServices;