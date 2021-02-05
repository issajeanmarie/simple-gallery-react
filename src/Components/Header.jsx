import React from 'react';
import Logo from './Assets/logo.png';

class Header extends React.PureComponent {
	constructor(props) {
		super(props)
	
		this.state = {
			 menuStatus: false,
			 navClass: 'nav-links-hide',
			 menuWord: 'Menu',
		}

		this.menuTrigger = this.menuTrigger.bind(this);
	}
	
	menuTrigger() {
		if (this.state.menuStatus == false) {
			this.setState({
				menuStatus: true,
				navClass: 'nav-links-show',
				menuWord: 'Close'
			})
		} else{
			this.setState({
				menuStatus: false,
				navClass: 'nav-links-hide',
				menuWord: 'Menu'
			})
		}
	}


	render() {

		return (
			<React.Fragment>
				<nav className="nav">
					<p id="menu" onClick = {this.menuTrigger}>{this.state.menuWord}</p>
					<div className={this.state.navClass}>
						<a href="#people" className="">people</a>
						<a href="#nature" className="">nature</a>
						<a href="#tech" className="">tech</a>
						<a href="#animals" className="">animals</a>
						<a href="#arch" className="">architecture</a>
					</div>

					<div className="logo-cont">
						<a href="http://instagram.com/codes.study" target="_blank">
							<img src={Logo} alt="" />
						</a>
					</div>
				</nav>
			</React.Fragment>
		)
	}
}

export default Header;