import React, { useState } from "react"
import FootNav from "../../components/FootNav"
import HeadBar from "./HeadBar"
import Find from "./Find"
import { connect } from 'react-redux'
import "./index.less"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.less';
import 'swiper/components/pagination/pagination.less';
import Viewer from 'react-viewer';
import Zmage from 'react-zmage'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }




    render() {
        return (

            <div className="container">
                <div  className="container1">红色</div>
                <div  className="container2">蓝色</div>
                <div   className="container3">带有更多内容的绿色 div</div>
                <a download href="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3577773561,2706257243&fm=26&gp=0.jpg"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3577773561,2706257243&fm=26&gp=0.jpg"/></a>
            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        City: state.City
    }
}
export default connect(mapStateToProps)(Home)