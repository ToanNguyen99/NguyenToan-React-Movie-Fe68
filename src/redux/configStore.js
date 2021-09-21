import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { CinemaManagerReducer } from './reducers/CinemaManagerReducer';
import { FilmManagerReducer } from './reducers/FilmManagerReducer';

const rootReducer = combineReducers({
    CarouselReducer,
    FilmManagerReducer,
    CinemaManagerReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));