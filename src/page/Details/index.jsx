import React from 'react'
import './style.less'
import Tabs from '../../components/Tabs'
import HeadBar from '../../components/HeadBar'

export default class Details extends React.Component{

    render(){
        const id=this.props.match.params.id
        return(
            <div>
                <HeadBar city="商品详情"/>
                <Tabs>
                    <tab title="商品详情" >
                     <div>好运的上衣</div>
                    </tab>
                    <tab title="用户评价" >
                    <div>第一次购买，还不错</div>
                    </tab>
                </Tabs>
            </div>
        )
    }
}