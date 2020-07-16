import React from 'react'
import './style.less'
import {
    LeftOutlined,
    SearchOutlined
} from '@ant-design/icons';
export default class SearchHeader extends React.Component {
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
        this.props.history.replace("/search"+"/"+this.state.value)
    }
    }
    OnClickBack() {
        window.history.back(-1)
    }
    render() {

        return (
            <div className="searchHeader">
                <div className="flex-item_1">
                    <LeftOutlined className="leftOutlined" onClick={this.OnClickBack.bind(this)} />
                </div>

                <div className="flex-item_2">
                    <SearchOutlined className="icon-search" />
                    <input
                        type="text"
                        value={this.state.value}
                        placeholder="请输入搜索内容"
                        onKeyUp={this.onkeyUpValue.bind(this)}
                        onChange={this.onChangeValue.bind(this)}

                    />
                </div>

            </div>
        )
    }
}