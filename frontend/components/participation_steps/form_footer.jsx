import React from 'react';

//COMPONENTS
import ProgressBar from './progress_bar';

class FormFooter extends React.Component{
	render(){
		let {alertContactUs, percentComplete} = this.props;
		let progressBarDisplay = (percentComplete) ? <ProgressBar percentComplete={percentComplete}/> : "";
		return(
		  <div style={{width:"100%"}}>
				<div className="footer-box left">
					<a className="hand-on-hover" onClick={alertContactUs}>Contact Us</a>
				</div>
	
				{	progressBarDisplay }			
	
				<div className="footer-box right">
					<img src="./images/evidation_logo_download.png" 
							 alt="Evidation Company Logo"/>
				</div>
		  </div>
		)
	}	
}

export default FormFooter;