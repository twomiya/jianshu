import React, { Component } from 'react'
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import axios from 'axios';
import {connect} from 'react-redux'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import {actionCreators} from './store'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4427/59bf298e860d8e75c34e0a7e2c01c16859a29178.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
       
        this.props.changeHomeData()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData: () => {
            const action = actionCreators.getHomeInfo();
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(Home);