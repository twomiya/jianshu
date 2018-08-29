import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
    // list: [],
    list:["区块链","世界杯","小程序","晖宗聊绘画","三生三世","vue","毕业","PHP","故事","flutter","理财","狙杀令","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}