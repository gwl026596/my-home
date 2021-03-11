import React from "react"
import "./style.less"
import SwipeableViews from 'react-swipeable-views'
// import Swiper JS
import Swipers from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
export default class Swiper extends React.Component {

    constructor() {
        super()
        this.state = {
            resultData: []
        }
    }
componentDidUpdate(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
}
    componentDidMount() {

      

        fetch("/nextstore-web/bomb/getBannerIndexList?moduleType=3")
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data);
                this.setState({
                    resultData: data.result
                })
            })

        fetch("https://m.ctrip.com/restapi/soa2/16189/json/searchTripShootListForHomePageV2?_fxpcqlniredt=09031010211161114530&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10650013707&__gw_platform=H5", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "districtId": -1,
                "groupChannelCode": "tourphoto_global1",
                "type": null,
                "lat": 34.2317081,
                "lon": 108.928918,
                "locatedDistrictId": 7,
                "pagePara": {
                    "pageIndex": 1,
                    "pageSize": 10,
                    "sortType": 9,
                    "sortDirection": 0
                },
                "imageCutType": 1,
                "head": {
                    "cid": "09031010211161114530",
                    "ctok": "",
                    "cver": "1.0",
                    "lang": "01",
                    "sid": "8888",
                    "syscode": "09",
                    "auth": null,
                    "extension": [
                        { "name": "protocal", "value": "https" }
                    ]
                },
                "contentType": "json"
            })
        }).then(res => res.json())
            .then(data => {

            })



    }
    render() {
        const leght = this.state.resultData.length
        let bannerList = ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=220114764,2385339547&fm=26&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2298779573,3058734391&fm=26&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3577773561,2706257243&fm=26&gp=0.jpg"
        ];
        return (

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                    <div class="swiper-slide">Slide 10</div>
                </div>
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
        )
    }
}