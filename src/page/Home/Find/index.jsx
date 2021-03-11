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
        console.log('发技术附件品牌可是泼妇');
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


        var arr1 = 'imagine'.split('')
        var arr2 = arr1.reverse()


        setTimeout(function () {
            console.log('1');
        })

        new Promise(function (resolve) {
            console.log('2');
            resolve();
        }).then(function () {
            console.log('3');
        })
      console.log('4');
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
                                    <img src={data.bannerUrl} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


        )
    }

}