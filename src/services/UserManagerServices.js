import { baseService } from "./baseServices";

export default class UserManagerServices extends baseService {
    constructor() {
        super();
    }

    postListUser = (infoLogin) => {
        // tk , mk
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, infoLogin);
    };
}
export const userManagerServices = new UserManagerServices();