import React from 'react'
import SearchView from './SearchView'
import LoadMore from '../../../components/LoadMore'
export default class SearchList extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            resultData: {},
            resultDataList: [],
            pageNo:1
        }
    }
   

    componentDidUpdate(prevProps, prevState) {
        // 再次做网络请求就可以了
       
        const content = this.props.content;
        console.log(prevProps.content+"=="+content); // 上一次的props
        if(prevProps.content === content){
            return;
        }
        this.setState({
            resultData: {},
            resultDataList: [],
            pageNo:1
        })
        this.getData(content,this.state.pageNo)
    }

    componentDidMount() {
        this.getData(this.props.content,this.state.pageNo)

    }

    getData(content,pageNo) {
        fetch("/nextstore-web/esb/getTagArticle", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "pageNo": pageNo,
                "pageSize": "10",
                "tagId": content,
                "userId": "2000219214"
            })
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    resultData: data.result,
                    resultDataList: this.state.resultDataList.concat(data.result.result) ,
                    pageNo:this.state.pageNo+1
                })
            })
    }
    onLoadMore(){
        this.getData(this.props.content,this.state.pageNo)
        console.log("加载更多");
    }
    render() {
        return (
            <div>
                {
                    this.state.resultDataList.length > 0 ? <SearchView data={this.state.resultDataList} /> : <div style={{ fontSize: "18px" }}> 正在加载.... </div>
                }
               {
                     <LoadMore  loadMore={this.onLoadMore.bind(this)}/>
               }
            </div>
        )
    }
}