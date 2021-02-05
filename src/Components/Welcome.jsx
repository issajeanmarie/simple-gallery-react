import React from 'react';

function Welcome() {
	return (
		<React.Fragment>
			<div className="welcome">
				<div className="wel-photos">
					<div className="ph-1"><img src="./1.jpg" alt="" /></div>
					<div className="ph-2"><img src="./3.jpg" alt="" /></div>
					<div className="ph-3"><img src="./4.jpg" alt="" /></div>
					<div className="ph-4"><img src="./2.jpg" alt="" /></div>
				</div>

				<div className="wel-text">
					<h1>
						Get the best collection of photos!
					</h1>
					<br />

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<br /><br />

					<h3>I LIKE PICTURES</h3>
				</div>	
			</div>
		</React.Fragment>
	)
}

export default React.memo(Welcome);