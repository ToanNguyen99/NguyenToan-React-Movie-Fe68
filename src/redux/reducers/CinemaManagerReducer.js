import { GET_LIST_CINEMA } from "redux/actions/types/CinemaType"

const stateDefault = {
    arrListCinema: []
}

export const CinemaManagerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_LIST_CINEMA:
            {
                state.arrListCinema = action.arrListCinema
                return {...state }
            }



        default:
            return {...state }

    }
}