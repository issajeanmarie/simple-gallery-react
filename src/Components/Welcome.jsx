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
						The pictures are memories <br />
						These are the most pictures in defferent categories. <br />
						We have the <b>People</b>, <b>Animals</b>, <b>Technology</b>, <b>Beaty</b>, <b>Materials</b>, <b>Architecture</b>.. pictures. <br />
						We hope you enjoy viewing the world. <br /><br /><br />

						<b><i>Guidlines to use</i></b> <br />
						1. Hover over the image to like it, if you are using computer. <br />
						2. Click on the image to like it, if you are using mobile phone.
					</p>
					<br /><br />

					<h3>I LIKE PICTURES</h3>
				</div>	
			</div>
		</React.Fragment>
	)
}

export default React.memo(Welcome);