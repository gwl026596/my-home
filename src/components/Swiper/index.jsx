import React from "react"
import "./style.less"
import SwipeableViews from 'react-swipeable-views'

export default class Swiper extends React.Component {

    constructor() {
        super()
        this.state = {
            resultData: []
        }
    }

    componentDidMount() {
        fetch("/nextstore-web/bomb/getBannerIndexList?moduleType=3")
            .then(res =>{
                console.log(res)
                return res.json()
            } )
            .then(data => {
                console.log(data);
                this.setState({
                    resultData: data.result
                })
            })
      
    }
    render() {
        const leght = this.state.resultData.length
        return (
            <SwipeableViews id="swipeableViews">

                {leght > 0 ? (

                    this.state.resultData.map((data, index) => {
                        return (<div key={index}>
                            <img  src={data.firstImageUrl} alt="加载失败" />
                        </div>)

                    })) : (<div style={{fontSize:"15px"}}> 正在加载...</div>)
                }

            </SwipeableViews>
        )
    }
}