import React from "react";
import { Tabs, Radio, Space } from "antd";
import { connect } from "react-redux";
import { PureComponent } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;

export default class HomeTabs extends PureComponent {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  componentDidMount() {}

  renderListCinema = () => {
    return this.props.arrListCinema?.map((cinema, index) => {
      let { tabPosition } = this.state;
      return (
        <TabPane
          tab={<img className="rounded-full" src={cinema.logo} width="50" />}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {cinema.lstCumRap?.map((cinemaComplex, index) => {
              return (
                <TabPane
                  tab={
                    <div
                      className="flex items-center"
                      style={{ width: "300px" }}
                    >
                      <img
                        src="https://dulichlive.com/nha-trang/wp-content/uploads/sites/3/2019/06/review-cac-rap-chieu-phim-o-Nha-Trang-5.png"
                        width="50"
                      />
                      <h4 className="text-left ml-4">
                        {cinemaComplex.tenCumRap}
                        <p className="text-red-500 mb-0"> Chi tiết</p>
                      </h4>
                      <br />
                    </div>
                  }
                  key={index}
                >
                  {/* load phim */}
                  {cinemaComplex.danhSachPhim.map((movie, index) => {
                    return (
                      <div className="flex mb-5 border-b-2 pb-4" key={index}>
                        <div className="movie-img flex">
                          <img
                            className="w-16 h-16 object-cover"
                            src={movie.hinhAnh}
                            alt={movie.hinhAnh}
                          />
                          <div className="info-movie ml-5 ">
                             <h1 className="capitalize text-black mb-0">{movie.tenPhim}</h1>
                             <p className="address mb-0">
                               {cinemaComplex.diaChi}
                             </p>
                             <div className="timeShow grid grid-cols-7 gap-4 mt-2">
                               {movie.lstLichChieuTheoPhim?.slice(0,14).map((timeShow, index) => {
                                 return <NavLink to="/">
                                   <button className="text-white px-2 py-2 bg-blue-500 hover:bg-blue-300 hover:text-black transition-all font-medium">
                                    {moment(timeShow.ngayChieuGioChieu).format('hh:mm A')}

                                   </button>
                                 </NavLink>
                               })}
                             </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {cinemaComplex.tenCumRap}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  render() {
    console.log(this.props, "hihi");
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>{this.renderListCinema()}</Tabs>
      </>
    );
  }
}
