import React,{Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import{HeaderWarpper,Logo,Nav,NavItem,NavInput,Additon,Button,SearchWarpper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList,SearchInfoItem} from './style';

class Header extends Component{
    getListArea(){
        const newList = this.props.list.toJS();
        const listPage=[];
        if(newList.length){
            for(let i=(this.props.page-1)*10;i<(this.props.page)*10;i++){
                listPage.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem> 
                )
            }
            
        }
       
        if(this.props.focused || this.props.mouseIn){
        
            return(
                <SearchInfo 
                    onMouseEnter={this.props.handleEnter}
                    onMouseLeave={this.props.handleLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>

                        {listPage}
                    </SearchInfoList>
                </SearchInfo>       
            )
        }else{
            return null;
        }
    }
    render(){
        return(
            <HeaderWarpper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    {this.props.login?
                    <NavItem className="right" onClick={this.props.logout}>退出</NavItem>:
                    <Link to="/login"><NavItem className="right">登录</NavItem></Link>}
                    
                    <SearchWarpper>
                        <CSSTransition timeout={200}
                            in={this.props.focused}
                            classNames="side">
                            <NavInput className={this.props.focused?'focused':''}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}/>
                        </CSSTransition>
                        <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe6cf;</i>
                        {this.getListArea()}
                    </SearchWarpper>
                </Nav>
                <Additon>
                   <Link to="/write"> <Button className="reg"><i className="iconfont">&#xe615;</i>写文章</Button></Link>
                    <Button className="writting">注册</Button>
                </Additon>
            </HeaderWarpper>
        )
    }

   
}
const mapStateToProps = (state)=>{
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }

}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
            // dispatch(actionCreators.getList())
            // dispatch(actionCreators.searchFocus())

        },
        handleBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header) ;