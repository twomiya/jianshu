import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		console.log(this.props)
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return (<RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
							item
						</RecommendItem>)
					})
				}
			</RecommendWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);