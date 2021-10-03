import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { CinemaManagerReducer } from "./reducers/CinemaManagerReducer";
import { FilmManagerReducer } from "./reducers/FilmManagerReducer";
import { UserManagerReducer } from "./reducers/UserManagerReducer";

const rootReducer = combineReducers({
    CarouselReducer,
    FilmManagerReducer,
    CinemaManagerReducer,
    UserManagerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));