import { movieManagerServices } from "services/MovieManagerServices";
import { SET_LIST_MOVIE } from "./types/FilmManagerType";

export const getListFilmAction = () => {


    return async(dispatch) => {
        try {
            const result = await movieManagerServices.getlistMovie();
            // get data từ API và trả về reducer
            dispatch({
                type: SET_LIST_MOVIE,
                arrFilm: result.data.content
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}