import { LOGIN_ACTION } from "redux/actions/types/UserManagerType";
import { TOKEN, USER_LOGIN } from "util/settings/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
};

export const UserManagerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            {
                const { infoLogin } = action;
                localStorage.setItem(USER_LOGIN, JSON.stringify(infoLogin));
                localStorage.setItem(TOKEN, infoLogin.accessToken);
                return {...state, userLogin: infoLogin };
            }

        default:
            return {...state };
    }
};