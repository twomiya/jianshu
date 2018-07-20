import styled from 'styled-components'
import LogoImg from '../../static/logo.png'
export const HeaderWarpper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0`


export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    left:0;
    top:0;
    height:56px;
    width:100px;
    background:url(${LogoImg});
    background-size:contain`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a
    }
        `
export const NavInput = styled.input.attrs({
    placeholder: '搜索'
})`
padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline:none;
    margin-top:9px;
    box-sizing:border-box;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;

    }
    &.slide-enter-active{
        width:240px;

    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }

`

export const Additon = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;`


export const Button = styled.div`
   float:right;
   margin-top:9px;
   margin-right:20px;
   padding:0 20px;
   line-height:38px;
   border-radius:19px;
   border:1px solid #ec6149;
   font-size:15px;
   &.reg{
       color:#ec6149;
   }
   &.writting{
    color:#fff;
    background:#ec6149
}`

export const SearchWarpper = styled.div`
    float:left;
    position:relative;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        font-size:22px;
        &.focused{
            color:#fff;
            background:#777;
            border-radius:15px;
        }
    }
`