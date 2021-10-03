import { userManagerServices } from "services/UserManagerServices";
import { LOGIN_ACTION } from "./types/UserManagerType";

export const loginAction = (infoLogin) => {
    return async(dispatch) => {
        try {
            const result = await userManagerServices.postListUser(infoLogin);

            if (result.data.status === 200) {
                dispatch({
                    type: LOGIN_ACTION,
                    infoLogin: result.data.content,
                });
            }

            console.log("result", result);
        } catch (error) {
            console.log("error", error);
        }
    };
};