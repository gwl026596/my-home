import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import "./style.less"
export default class HeadBar extends React.Component{

    //class 類字段无法传递参数， 事件函数传递参数，只有两种，一种通过this.OnClickBack.bind('我是谁'),第二种箭头函数 ()=>this.OnClickBack('我是谁')，不能这样写this.OnClickBack('我是谁')
    OnClickBack=(str)=>{
        console.log(str);
        window.history.back(-1)
    }

    render(){
        return(
            <div id="header">
                
                 <LeftOutlined className="leftOutlined" onClick={()=>this.OnClickBack('我是谁')}/>
                 <h1 className="headH1">{this.props.city}</h1>
            </div>
        )
    }
}