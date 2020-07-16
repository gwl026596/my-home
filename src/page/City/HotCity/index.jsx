import React from 'react'
import "./style.less"

export default class HotCity extends React.Component {
    OnclickItem=(data)=>{
        console.log(data);
        this.props.cityName(data)
    }
    render() {
        return (
            <div className="hotCity">
                <h1>热门城市</h1>
                <ul>
                    <li onClick={this.OnclickItem.bind(this,"北京")}>北京</li>
                    <li onClick={this.OnclickItem.bind(this,"上海")}>上海</li>
                    <li onClick={this.OnclickItem.bind(this,"杭州")}>杭州</li>
                    <li onClick={this.OnclickItem.bind(this,"广州")}>广州</li>
                    <li onClick={this.OnclickItem.bind(this,"苏州")}>苏州</li>
                    <li onClick={this.OnclickItem.bind(this,"深圳")}>深圳</li>
                    <li onClick={this.OnclickItem.bind(this,"南京")}>南京</li>
                    <li onClick={this.OnclickItem.bind(this,"合肥")}>合肥</li>
                    <li onClick={this.OnclickItem.bind(this,"西安")}>西安</li>
                    <li onClick={this.OnclickItem.bind(this,"宁波")}>宁波</li>
                    <li onClick={this.OnclickItem.bind(this,"青岛")}>青岛</li>
                    <li onClick={this.OnclickItem.bind(this,"天津")}>天津</li>
                </ul>

            </div>

        )
    }
}