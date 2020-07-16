import React from "react"
import {
    DownOutlined,
    ShoppingCartOutlined,
    SearchOutlined,
    createFromIconfontCN
} from '@ant-design/icons';
import "./style.less"
import { Link } from "react-router-dom"
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1931039_uy3cvhj487.js', // 在 iconfont.cn 上生成
});
export default class HeadBar extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            value: ""
        }
    }

    onChangeValue(event) {
        this.setState({
            value: event.target.value
        })
    }

    onkeyUpValue(event){
    if(event.keyCode==13){
        this.props.history.push("/search"+"/"+this.state.value)
    }
    }

    render() {

        return (
            <div id="home-headbar" className="clear-fix">
                <div className="home-head-left float-left">
                    <Link to="/city" className="link">
                        <span>{this.props.city}</span>
                        <DownOutlined />
                    </Link>
                </div>
                <div className="home-head-middle">

                    <SearchOutlined className="icon-search" />
                    <input
                        type="text"
                        value={this.state.value}
                        placeholder="请输入搜索内容"
                        onKeyUp={this.onkeyUpValue.bind(this)}
                        onChange={this.onChangeValue.bind(this)}
                    />

                </div>
                <div className="home-head-right float-right">
                    <ShoppingCartOutlined style={{ fontSize: '15px', color: 'white' }} />
                </div>
            </div>
        )
    }
}