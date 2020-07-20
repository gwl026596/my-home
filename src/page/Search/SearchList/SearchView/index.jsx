import React from 'react'
import './style.less'
import { Link } from 'react-router-dom'

export default class SearchView extends React.Component {
    

 
    render() {
        return (
            <div className="search-view" >
                {
                    this.props.data.map((element, index) => {
                        return (
                            <div className="search-content" key={element.id}>
                                <Link to={`/details/${element.id}` }   >
                                <div className="searchImg">
                                    <img src={element.extra.mainImage} alt="" />
                                    <div className="expStatus">
                                        <label >{"ExP " + element.expStatus}</label>
                                    </div>
                                </div>

                                <div className="channelName">
                                    <label >{element.channelName}</label>
                                </div>
                                <div className="subject">
                                    <p >{element.subject}</p>
                                </div>
                             </Link>
                            </div>
                        )
                    })
                }
              
            </div>
        )
    }
}