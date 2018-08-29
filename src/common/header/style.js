import styled from 'styled-components'
import LogoImg from '../../static/logo.png'
export const HeaderWarpper = styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0`


export const Logo = styled.div`
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

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    display:block;
    background:#fff;
`

export const SearchInfoTitle = styled.div`
    margin:20px 0 15px 0;
    line-height:20px;
    font-size:14px;
    color:#969696; 

`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
`

export const SearchInfoList =styled.div`
    overflow:hidden;

`

export const SearchInfoItem = styled.a`
    display:inline-block;
    line-height:28px;
    padding: 0 5px;
    font-size:12px;
    border: 1px solid #ddd;
    color:#787878;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:10px;
`