import React from 'react'
import HeadBar from '../../components/HeadBar'
import HotCity from './HotCity'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../actions'
class City extends React.Component {
    OnClickCityName(cityName1) {
        console.log(cityName1);
      
        this.props.cityActions.updateCity({
            cityName:cityName1
          })
        window.history.back(-1)
    }
    render() {
        return (
            <div >
                <HeadBar city={"上海"} />
                <HotCity cityName={this.OnClickCityName.bind(this)} />
            </div>
        )
    }
};
const mapStateToProps = state => {
  return {
    City: state.City
  }
}
const mapDispatchToProps = dispatch => {
  return {
    cityActions: bindActionCreators(cityActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)