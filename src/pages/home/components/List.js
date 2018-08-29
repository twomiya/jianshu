import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list } = this.props;
		console.log(list)
		return (
			<div>
				{list.map((item)=>{
					return(
						<ListItem key={item.get('id')}>
							<img className="pic" src={item.get('imgUrl')}/>
							<ListInfo>
								<h3 className="title">{item.get('title')}</h3>
								<p className="desc">
									{item.get('desc')}							
								</p>
							</ListInfo>
						</ListItem>
					)
				})}
				<LoadMore>阅读更多</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	// page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	// getMoreList(page) {
	// 	dispatch(actionCreators.getMoreList(page))
	// }
})

export default connect(mapState, mapDispatch)(List);