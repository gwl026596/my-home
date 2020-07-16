import React from "react"
import {HomeOutlined,ShopOutlined,TrophyOutlined,TeamOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom"
import "./style.less"
export default class FootNav extends React.Component{
render(){
    return(
        <div className="nav-footer">
        <ul >
             <li>
           <NavLink exact to="/">
               <HomeOutlined className="icon"/> 
               首页
               </NavLink>
               </li>

               <li>
           <NavLink  to="/shop">
               <ShopOutlined className="icon"/>
               商城
               </NavLink>
               </li>

               <li>
           <NavLink  to="/life">
               <TrophyOutlined className="icon"/>
               生活服务
               </NavLink>
               </li>
               
               <li>
           <NavLink  to="/mine">
               <TeamOutlined className="icon"/>
               我的
               </NavLink>
               </li>
        </ul>
        </div>
    )
}
}