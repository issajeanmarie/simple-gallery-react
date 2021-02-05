import React from 'react'

class TheData extends React.Component {

	constructor(props) {
		super(props);

		this.likeIt = this.likeIt.bind(this);
	}

	likeIt(data) {
		
		//Like or dislike
		let heart = document.getElementById(data.num);
		let number = document.querySelector(`[data-likes = '${data.num}']`);

		if (heart.className.includes('notLiked')) {
			heart.className ='fas fa-heart liked';
			number.innerHTML = data.likes + 1;
		} else{
			heart.className ='fas fa-heart notLiked';
			number.innerHTML = data.likes;
		}

	}

	render() {

		//Random likes
		let rand = Math.floor(Math.random() * 100);
		let rand2 = Math.floor(Math.random() * 1000);
		let rand0 = Math.floor(Math.random() * 10);

		let a = [
			{num: `1${this.props.category}`, likes: Math.floor(Math.random() * 100)},
			{num: `2${this.props.category}`, likes: Math.floor(Math.random() * 100)},
			{num: `3${this.props.category}`, likes: Math.floor(Math.random() * 1000)},
			{num: `4${this.props.category}`, likes: Math.floor(Math.random() * 100)},
			{num: `5${this.props.category}`, likes: Math.floor(Math.random() * 100)},
			{num: `6${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 10)},
			{num: `7${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 100)},
			{num: `8${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 1000)},
			{num: `9${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 10)},
			{num: `10${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 100)},
			{num: `11${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 1000)},
			{num: `12${this.props.category}`, className: this.likeIt, likes: Math.floor(Math.random() * 10)}
		];

		return (
			<div className="real-cont" id={this.props.category}>
				<h1>
					{this.props.categoryName} Pictures
				</h1>

				<div className="real-pics">
					{a.map((data, index) => 
						<div className="img-cont" key = {index}>
							<img src = {`https://www.placeimg.com/640/480/${this.props.category}/${data.num}`} alt="" />
							<div className="img-wrapper">
								<h3>Category: {this.props.categoryName}</h3>
								<br /><br />
								<h1><i className={`fas fa-heart notLiked`} id={data.num} onClick={() => this.likeIt(data)}></i></h1>
								<p data-likes={data.num}>{data.likes}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default TheData