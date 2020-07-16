import React from "react"
import "./style2.less"
export default class Find extends React.Component {

    constructor() {
        super()
        this.state = {
            resultData: []
        }
    }

    componentDidMount() {

        fetch("/nextstore-web/api/channelBanner/list?channelType=2")
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
    }

    render() {
        return (
            <div className="find">
                <h2>热门推荐</h2>
               <ul id="findUl">
                    {
                        this.state.resultData.map((data, index) => {
                            return (
                                <li key={index}>
                                    <img  src={data.bannerUrl} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
           
           
        )
    }

}