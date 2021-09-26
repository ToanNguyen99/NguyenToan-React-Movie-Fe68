import React from "react";
import { NavLink } from "react-router-dom";
import "./Film.scss"

export default function Film(props) {
  const { film } = props;

  return (
    <div className="film-item h-full bg-gray-100 bg-opacity-75  rounded-lg overflow-hidden text-center relative mx-3 my-5 cursor-pointer">
      <div className="img-film">
        <img
          className="w-full object-fill h-80"
          src={film.hinhAnh}
          alt={film.hinhAnh}
        />
        <NavLink to={`/detail/${film.maPhim}`} className="btn-book">
          Đặt Vé
        </NavLink>
      </div>
      <div className="box-info p-4">
        <h1 className="word-limit-title title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {film.tenPhim}
        </h1>
        <p className="word-limit-desc leading-relaxed mb-3">{film.moTa}</p>
        
        </div>
    </div>
  );
}
