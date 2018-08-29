import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import {LoginWrapper,LoginBox,Input,Button} from './style'
class Login extends Component{
    render(){
        const {loginStatus} = this.props;
        console.log(loginStatus)
        if(!loginStatus){
            console.log(222)
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" innerRef={(input)=>{this.account=input}}/>
                        <Input placeholder="密码" type="password" innerRef={(input)=>{this.password=input}}/>
                        <Button onClick={()=>{this.props.ligin(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper> 
             )
        }else{
            return(
                <Redirect to="/" />
            )
        }
       
    }
}
const mapStateToProps = (state) => {
    return {
       loginStatus:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ligin: (accountElem,passwordElem) => {
            console.log(accountElem,passwordElem)
            dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login) ;