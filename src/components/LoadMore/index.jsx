import React from 'react'
import './style.less'

export default class LoadMore extends React.Component{
    constructor(props) {
        super(props)
        this.load = React.createRef()
    }

    componentDidMount() {
        const _this = this
        const clientHeight = document.documentElement.clientHeight
        let timer=null
        window.onscroll = function (event) {
            if(timer){
                clearTimeout(timer)
            }
            timer= setTimeout(function(){
                if (_this.load.current.getBoundingClientRect().top < clientHeight) {
                   
                    _this.props.loadMore()
                }
            },100)
           
        }
    }
    componentWillUnmount(){
        window.onscroll = null
    }
    render(){
        return(
            <div ref={this.load}>加载更多</div>
        )
    }
}