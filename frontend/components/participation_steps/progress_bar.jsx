import React from 'react';

class ProgressBar extends React.Component{
	render(){
		let { percentComplete } = this.props;
		//starting width = 300px
		const widthFromPercentComplete = (percentComplete * 300)/100;
		
		//could not tell from mockup the distance between each of the 4 segments dividing the completion bar
		//left as variables to be able to pass in value
		const [dividerOne, dividerTwo, dividerThree, dividerFour] = ["25px", "100px", "170px", "280px"];
		return(
			<div className="footer-box center">
				<p>{percentComplete}&#037; completed</p>
				<div id="progressBar" className="center-block">
			
					<div className="divider" style={{left: dividerOne}}></div>
					<div className="divider" style={{left: dividerTwo}}></div>
					<div className="divider" style={{left: dividerThree}}></div>
					<div className="divider" style={{left: dividerFour}}></div>
			
					<div className="inner-bar" style={{width: widthFromPercentComplete}}></div>
				</div>
			</div>
		)
	}
};

export default ProgressBar;