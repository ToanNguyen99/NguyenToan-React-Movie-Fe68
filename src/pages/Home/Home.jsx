import React, { useState, useEffect } from "react";
import HomeTabs from "./HomeTabs/HomeTabs";
// Connect redux
import { useSelector, useDispatch } from "react-redux";
import Film from "components/Film/Film";

import MultipleRowSlick from "components/ReactSlick/MultipleRowSlick";
import { getListFilmAction } from "redux/actions/FilmManagerAction";
import { getListCinemaAction } from "redux/actions/CinemaManagerAction";
import "./Home.scss"
import HomeCarousel from "templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";


export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.FilmManagerReducer);
  const { arrListCinema  } = useSelector(state => state.CinemaManagerReducer)
  const dispatch = useDispatch();
  console.log("props Home", props);

  // render DS phim
  // const renderFilm = () => {
  //   return arrFilm.map((movie, index) => <Film key={index} />);
  // };

  useEffect(() => {
    const action = getListFilmAction();
    dispatch(action); // dispacth func tu redux thunk 
    dispatch(getListCinemaAction());
  }, [])

  return (
    <>
      <HomeCarousel/>
      <div className="container px-5 py-24 mx-auto">
        
        <section classname="home-list">
          <MultipleRowSlick arrFilm={arrFilm}/>
          {/* <div className="flex flex-wrap -m-4">
            
            {renderFilm()}
          </div> */}
        </section>

        <div className="tabs-content mt-10">
          <HomeTabs arrListCinema={arrListCinema}/>
        </div>
      </div>
    </>
  );
}
