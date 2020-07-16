import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import "./style.less"
export default class HeadBar extends React.Component{

    OnClickBack=()=>{
        window.history.back(-1)
    }

    render(){
        return(
            <div id="header">
                
                 <LeftOutlined className="leftOutlined" onClick={this.OnClickBack}/>
                 <h1 className="headH1">{this.props.city}</h1>
            </div>
        )
    }
}