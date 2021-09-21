import axios from "axios";
import { movieManagerServices } from "services/MovieManagerServices";
import { DOMAIN } from "util/settings/config";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
    return async(dispatch) => {
        try {
            const result = await movieManagerServices.getListBanner();
            dispatch({
                type: SET_CAROUSEL,
                arrImgBanner: result.data.content
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}