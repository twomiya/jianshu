import React, { PureComponent } from 'react';
import { WriterWrapper,WriterTittle,WriterList,WriterOne } from '../style';

class Writer extends PureComponent {

	render() {
		return (
			<WriterWrapper>
				<WriterTittle>
					<span>推荐作者</span>
					<a className="page-change">换一换</a>
				</WriterTittle>
				<WriterList>
					<WriterOne>
						<a className="imgLeft">
							<img src="//upload.jianshu.io/users/upload_avatars/2153206/4b7d9e0d-2e6b-4757-b5a9-a76737c5aeff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
						</a>
						<a className="follow">
							关注
						</a>
						<a className="name">
						狼医生
						</a>
						<p>写了389.8k字 · 1.1k喜欢	</p>
					</WriterOne>
					<WriterOne>
						<a className="imgLeft">
							<img src="//upload.jianshu.io/users/upload_avatars/2153206/4b7d9e0d-2e6b-4757-b5a9-a76737c5aeff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
						</a>
						<a className="follow">
							关注
						</a>
						<a className="name">
						狼医生
						</a>
						<p>写了389.8k字 · 1.1k喜欢	</p>
					</WriterOne>
					<WriterOne>
						<a className="imgLeft">
							<img src="//upload.jianshu.io/users/upload_avatars/2153206/4b7d9e0d-2e6b-4757-b5a9-a76737c5aeff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
						</a>
						<a className="follow">
							关注
						</a>
						<a className="name">
						狼医生
						</a>
						<p>写了389.8k字 · 1.1k喜欢	</p>
					</WriterOne>
					<WriterOne>
						<a className="imgLeft">
							<img src="//upload.jianshu.io/users/upload_avatars/2153206/4b7d9e0d-2e6b-4757-b5a9-a76737c5aeff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
						</a>
						<a className="follow">
							关注
						</a>
						<a className="name">
						狼医生
						</a>
						<p>写了389.8k字 · 1.1k喜欢	</p>
					</WriterOne>
					<WriterOne>
						<a className="imgLeft">
							<img src="//upload.jianshu.io/users/upload_avatars/2153206/4b7d9e0d-2e6b-4757-b5a9-a76737c5aeff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
						</a>
						<a className="follow">
							关注
						</a>
						<a className="name">
						狼医生
						</a>
						<p>写了389.8k字 · 1.1k喜欢	</p>
					</WriterOne>
				</WriterList>
			</WriterWrapper>
		)
	}
}

export default Writer;
