import React from "react"
import FootNav from "../../components/FootNav"
import HeadBar from "./HeadBar"
import Swiper from "../../components/Swiper"
import Find from "./Find"
import {connect} from 'react-redux'
 class Home extends React.Component {
    render() {
        return (
            <div>
               
              
                <Swiper />
                <Find />
                <HeadBar city={this.props.City.cityName} history={this.props.history}/>
                <FootNav />
               
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        City:state.City
    }
}
export default connect(mapStateToProps)(Home)