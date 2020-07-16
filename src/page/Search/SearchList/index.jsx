import React from 'react'
import SearchView from './SearchView'

export default class SearchList extends React.Component {
    a = 0
    constructor(props) {
        super(props)
        this.state = {
            resultData: {},
            resultDataList: []
        }
    }
    componentWillUpdate(prevProps, prevState) {
        console.log(this.props.content + "===" + prevProps + "===" + prevState);

        this.a++
        if (this.a == 5) {
            return
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        // 再次做网络请求就可以了
        const content = this.props.content;
        console.log(prevProps.content+"=="+content); // 上一次的props
        if(prevProps.content === content){
            return;
        }
        this.getData(content)
    }

    componentDidMount() {
        this.getData(this.props.content)

    }

    getData(context) {
        fetch("/nextstore-web/esb/getTagArticle", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "pageNo": 1,
                "pageSize": "10",
                "tagId": context,
                "userId": "2000219214"
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    resultData: data.result,
                    resultDataList: data.result.result,
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.resultDataList.length > 0 ? <SearchView data={this.state.resultData} /> : <div style={{ fontSize: "18px" }}> 正在加载.... </div>
                }

            </div>
        )
    }
}