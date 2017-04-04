import React from 'react';

class ProgressBar extends React.Component{
	render(){
		let { percentComplete } = this.props;
		//starting width = 300px
		const widthFromPercentComplete = (percentComplete * 300)/100;
		
		//could not tell from mockup the distance between each of the 4 segments dividing the completion bar
		return(
			<div className="footer-box center">
				<p>{percentComplete}&#037; completed</p>
				<div id="progressBar" className="center-block">
			
					<div></div>
					<div></div>
					<div></div>
					<div></div>
			
					<div className="inner-bar" style={{width: widthFromPercentComplete}}></div>
				</div>
			</div>
		)
	}
};

export default ProgressBar;