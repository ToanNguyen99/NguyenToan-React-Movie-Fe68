import Film from "components/Film/Film";
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  SET_MOVIE_COMING_SOON,
  SET_MOVIE_IS_PLAYING,
} from "redux/actions/types/FilmManagerType";
import "./MultipleRowSlick.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function MultipleRowSlick(props) {
  const dispatch = useDispatch();
  const {dangChieu, sapChieu} = useSelector(state => state.FilmManagerReducer)
  const renderFilms = () => {
    return props.arrFilm.slice(0, 10).map((item, index) => {
      return (
        <div key={index} className="width-reactSlick">
          {" "}
          <Film film={item} />{" "}
        </div>
      );
    });
  };
  let activeClassDangChieu = dangChieu === true? 'active_ButtonFilm' : 'noActive_ButtonFilm';
  let activeClassSapChieu = sapChieu === true? 'active_ButtonFilm' : 'noActive_ButtonFilm'
  const settings = {
    className: "center slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-12 mb-3">
        <button
          className={`text-xl font-medium text-red-500 ${activeClassDangChieu}`}
          onClick={() => {
            const action = { type: SET_MOVIE_IS_PLAYING };
            dispatch(action);
          }}
        >
          Phim đang chiếu
        </button>
        <button
          className={`text-xl font-medium ${activeClassSapChieu}`}
          onClick={() => {
            const action = { type: SET_MOVIE_COMING_SOON };
            dispatch(action);
          }}
        >
          Phim sắp chiếu
        </button>
      </div>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
}
