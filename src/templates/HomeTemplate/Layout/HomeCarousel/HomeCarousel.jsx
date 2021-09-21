import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "redux/actions/CarouselAction";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImgBanner } = useSelector((state) => state.CarouselReducer);
  
  const dispatch = useDispatch();
  // userEffect sẽ tự kích hoạt để load data
    useEffect(() => {
      dispatch(getCarouselAction())
    }, [])

  const renderImg = () => {
    return arrImgBanner.map((item, index) => {
      return (
        <div>
          <div style={{...contentStyle, backgroundImage: `url(${item.hinhAnh})`}} key={index}>
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel effect="fade">{renderImg()}</Carousel>;
}
