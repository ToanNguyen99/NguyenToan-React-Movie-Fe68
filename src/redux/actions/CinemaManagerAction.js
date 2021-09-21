import { data } from "autoprefixer"
import { listCinemaServices } from "services/ListCinemaServices"
import { GET_LIST_CINEMA } from "./types/CinemaType"

export const getListCinemaAction = () => {
    return async dispatch => {
        try {
            const result = await listCinemaServices.getListCinema();
            console.log('result', result.data.content)
            if (result.status === 200) {
                dispatch({
                    type: GET_LIST_CINEMA,
                    arrListCinema: result.data.content

                })
            }
        } catch (errors) {
            console.log(errors)
        }
    }
}