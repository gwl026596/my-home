import React from 'react'
import SearchHeader from './SearchHeader';
import SearchList from './SearchList';

export default class Search extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params.content);
    }
    render() {

        return (
            <div>
               <SearchHeader history={this.props.history}/>
               <SearchList content={this.props.match.params.content}/>
            </div>
        )
    }
}