import React,{Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import{HeaderWarpper,Logo,Nav,NavItem,NavInput,Additon,Button,SearchWarpper} from './style'
class Header extends Component{
    // constructor(props){
    //     super(props);
    //     // this.state={
    //     //     focused:false
    //     // }
    //     this.handleFocus = this.handleFocus.bind(this)
    //     this.handleBlur = this.handleBlur.bind(this)

    // }
    // handleFocus(){
    //     this.setState({
    //         focused:true
    //     })

    // }
    // handleBlur(){
    //     this.setState({
    //         focused:false
    //     })  
    // }
    render(){
        return(
            <HeaderWarpper>
                <Logo href="/"/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWarpper>
                        <CSSTransition timeout={200}
                            in={this.props.focused}
                            classNames="side">
                            <NavInput className={this.props.focused?'focused':''}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}/>
                        </CSSTransition>
                        <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe6cf;</i>
                    </SearchWarpper>
                </Nav>
                <Additon>
                    <Button className="reg"><i className="iconfont">&#xe615;</i>写文章</Button>
                    <Button className="writting">注册</Button>
                </Additon>
            </HeaderWarpper>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        focused:state.header.focused
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleFocus(){
            const action={
                type:'search_focus',
            }
            dispatch(action)

        },
        handleBlur(){
            const action={
                type:'search_blur',
            }
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header) ;