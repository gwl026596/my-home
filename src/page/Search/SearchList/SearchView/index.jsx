import React from 'react'
import './style.less'
export default class SearchView extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="search-view">
                {
                    this.props.data.result.map((element, index) => {
                        return (
                            <div className="search-content" key={index}>
                                <div className="searchImg">
                                <img src={element.extra.mainImage} alt="" />
                                <div className="expStatus">
                                    <label >{"ExP "+element.expStatus}</label>
                                </div>
                                </div>
                               
                                <div className="channelName">
                                    <label >{element.channelName}</label>
                                </div>
                                <div className="subject">
                                    <p >{element.subject}</p>
                                </div>
                               
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}