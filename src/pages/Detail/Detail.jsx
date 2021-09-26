import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "assets/style/rating.scss";
import { Tabs, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE_DETAIL } from "redux/actions/types/CinemaType";
import { getInfoMovieDetail } from "redux/actions/CinemaManagerAction";
import moment from "moment";
import "./Detail.scss";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector(
    (state) => state.FilmManagerReducer.filmDetail
  );

  console.log({ filmDetail });

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getInfoMovieDetail(id));
    console.log("id", id);
  }, []);

  return (
    <div
      className="banner-detail"
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ height: "100%", paddingTop: "200px", borderRadius: "0" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div
          className="flex justify-center"
          style={{ width: "65%", margin: "0 auto" }}
        >
          <div className="flex items-center" style={{ flexBasis: "70%" }}>
            <img
              src={filmDetail.hinhAnh}
              className="w-full h-80 object-cover"
              alt=""
              style={{ flexBasis: "30%" }}
            />
            <div className="info-film ml-6 h-full mt-10">
              <p className="date text-xs mb-1">
                Ngày khởi chiếu:{" "}
                <span className="font-bold ml-1">
                  {moment(filmDetail.ngayKhoiChieu).format(" DD . MM . YY")}
                </span>
              </p>
              <p className="text-red-500 font-bold text-3xl mb-1">
                {filmDetail.tenPhim}
              </p>
              <p className="text-sm w-96">{filmDetail.moTa}</p>
            </div>
          </div>
          <div
            classname="rating-movie-detail"
            style={{
              flexBasis: "30%",
              display: "flex !important",
              justifyContent: "center !important",
              alignItems: "center !important",
            }}
          >
            <div className={`c100 p${filmDetail.danhGia * 10} big `}>
              <span>{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
            <p className="text-center text-xl font-bold text-red-500">
              Đánh giá
            </p>
          </div>
        </div>
        <div
          className="tabs-content-detail mt-20 mx-auto bg-white p-4"
          style={{ maxWidth: "1200px", minHeight: "300px" }}
        >
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1">
              <div
                className="tabs-content-detail mx-auto"
                style={{ maxWidth: "1200px" }}
              >
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((cinemas, idx) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex items-center">
                            <img
                              src={cinemas.logo}
                              width={50}
                              height={50}
                              alt={cinemas.logo}
                            />
                            <div className="ml-2">{cinemas.tenHeThongRap}</div>
                          </div>
                        }
                        key={idx}
                      >
                        {cinemas.cumRapChieu?.map((cinema, idx) => {
                          return (
                            <div className="mt-5" key={idx}>
                              <div className="flex">
                                <img
                                  src="https://dulichlive.com/nha-trang/wp-content/uploads/sites/3/2019/06/review-cac-rap-chieu-phim-o-Nha-Trang-5.png"
                                  alt="rapChieu"
                                  style={{ width: "50px", height: "50px" }}
                                />
                                <div className="infoCinema ml-2">
                                  <h4 className="cinemaInfo text-lg mb-0">
                                    {cinema.tenCumRap}
                                  </h4>
                                  <span className="addressCinema text-red-500">
                                    {cinema.diaChi}
                                  </span>
                                </div>
                              </div>
                              <div className="showTimeInfo grid grid-cols-5 mt-3">
                                {cinema.lichChieuPhim
                                  ?.slice(0, 10)
                                  .map((showTimes, idx) => {
                                    return (
                                      <button
                                        className="text-white px-2 py-2 mr-2 text-center mb-2 bg-blue-500 hover:bg-blue-300 hover:text-black transition-all font-medium"
                                        key={idx}
                                      >
                                        {moment(
                                          showTimes.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </button>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Thông tin" key="2">
              <div className="text-center">
                <p>
                  Thông tin chi tiết đang tạm ẩn do hệ thống đang nâng cấp và
                  sửa chữa
                </p>
              </div>
            </TabPane>
            <TabPane tab="Đánh giá" key="3">
              <div className="text-center">
                <p>
                  Đánh giá đang tạm dừng hoạt động do hệ thống đang nâng cấp và
                  sửa chữa
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
