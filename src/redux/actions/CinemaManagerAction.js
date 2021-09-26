import { data } from "autoprefixer"
import ListCinemaServices, { listCinemaServices } from "services/ListCinemaServices"
import { GET_LIST_CINEMA, SET_MOVIE_DETAIL } from "./types/CinemaType"

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

export const getInfoMovieDetail = (id) => {
    return async dispatch => {
        {
            try {
                const result = await listCinemaServices.getMovieShowTimeInfo(id)

                console.log('result', result)
                dispatch({
                    type: SET_MOVIE_DETAIL,
                    filmDetail: result.data.content
                })
            } catch (errors) {
                console.log(errors)
            }
        }
    }
}