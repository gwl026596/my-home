import React from 'react';
import AppRouter from './router/AppRouter';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from './page/actions'
class App extends React.Component {

  componentDidMount() {
    this.props.cityActions.initCity({
      cityName: "南京"
    })
  }

  render() {
    return (
      <div>{this.props.children}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
