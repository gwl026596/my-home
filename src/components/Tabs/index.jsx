import React from 'react'
import './style.less'
export default class Tabs extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            currentIndex:0
        }
    }
    setItemTitle(index){
        return index===this.state.currentIndex?"tabSelected":"tabSelect"
    }
    setItemContent(index){
        return index===this.state.currentIndex?"show":"hide"
    }
    setOnclickTitle(index){
        this.setState({
            currentIndex:index
        })
    }
   
    render() {
        return (
            <div>
                <div className="tab-item-title">
                    {
                        React.Children.map(this.props.children, (element, index) => {

                            return (
                                <div className={this.setItemTitle(index)} onClick={this.setOnclickTitle.bind(this,index)} key={index}>
                                    {element.props.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tab-item-content">
                {
                        React.Children.map(this.props.children, (element, index) => {

                            return (

                                <div className={this.setItemContent(index)} onClick={this.setOnclickTitle.bind(this,index)} key={index} key={index}>{element.props.children}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}