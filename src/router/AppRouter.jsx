import React from "react"
import { Route, HashRouter, Switch } from "react-router-dom"
import Home from "../page/Home"
import Life from "../page/Life"
import Shop from "../page/Shop"
import Mine from "../page/Mine"
import City from "../page/City"
import App from "../App"
import Search from "../page/Search"
export default class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/life" component={Life}></Route>
                        <Route path="/shop" component={Shop}></Route>
                        <Route path="/mine" component={Mine}></Route>
                        <Route path="/city" component={City}></Route>
                        <Route path="/search/:content" component={Search}></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}