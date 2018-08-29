import React, { PureComponent } from 'react'
import Topic from './components/Topic';
import Writer from './components/Writer';
import List from './components/List';
import Recommend from './components/Recommend';
import axios from 'axios';
import {connect} from 'react-redux'
import {HomeWrapper,HomeLeft,HomeRight, BackTop} from './style'
import {actionCreators} from './store'
class Home extends PureComponent {
    handleBackTop(){
        window.scrollTo(0,0)
    }
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
                {this.props.showScroll? <BackTop onClick={this.handleBackTop}>回顶部</BackTop>:null}
               
            </HomeWrapper>
        )
    }
    componentDidMount(){

        this.props.changeHomeData()
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)

    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData: () => {
            const action = actionCreators.getHomeInfo();
            dispatch(action)
        },
        changeScrollTopShow:(e)=>{
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);