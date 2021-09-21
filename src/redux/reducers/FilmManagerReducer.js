import { SET_LIST_MOVIE, SET_MOVIE_COMING_SOON, SET_MOVIE_IS_PLAYING } from "redux/actions/types/FilmManagerType"

const stateDefault = {
    arrFilm: [{
        "maPhim": 1364,
        "tenPhim": "Home",
        "biDanh": "home",
        "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/home.jpg",
        "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
        "maNhom": "GP06",
        "ngayKhoiChieu": "2019-07-29T00:00:00",
        "danhGia": 5,
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
    }, ],
    dangChieu: true,
    sapChieu: false,
    arrFilmDefault: []

}
export const FilmManagerReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_LIST_MOVIE:
            {
                state.arrFilm = action.arrFilm
                state.arrFilmDefault = state.arrFilm
                return {...state }
            }
        case SET_MOVIE_IS_PLAYING:
            {
                state.dangChieu = !state.dangChieu
                state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
                return {...state }
            }
        case SET_MOVIE_COMING_SOON:
            {
                state.sapChieu = !state.sapChieu
                state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
                return {...state }
            }

        default:
            return {...state }
    }
}