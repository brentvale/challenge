import React from 'react';

//COMPONENTS
import FormHeading from './form_heading';
import FormFooter from './form_footer';
import StepOne from './step_one';
import StepTwo from './step_two';

class ParticipationSteps extends React.Component{
	constructor(){
		super();
		this.state = {
			currentStep: 1,
			percentComplete: 35,
			providersAndOrganizations: [{
		   "first_name":"John",
			  "last_name":"Doe",
			  "zip":"01234",
			  "npi":12345
			 },{
			   "first_name":"Jane",
			    "last_name":"Doe",
			    "zip":"93110",
			    "npi":23456
			 },{
			   "first_name":"Bran",
			    "last_name":"Doe",
			    "zip":"93110",
			    "npi":54321
			 },{
			   "first_name":"Jack",
			    "last_name":"Dob",
			    "zip":"94101",
			    "npi":35467
			 },{
			   "first_name":"John",
			    "last_name":"Doe",
			    "zip":"54312",
			    "npi":99999
			 },{
			   "first_name":"Jack",
			    "last_name":"Dob",
			    "zip":"11002",
			    "npi":23556
			 },{
			   "organization_name":"Johns Hopkins",
			    "zip":"01234",
			    "npi":22222
			 },{
			   "organization_name":"Mercy Hospital",
			    "zip":"93110",
			    "npi":33333
			 },{
			   "organization_name":"General Hospital",
			    "zip":"11002",
			    "npi":44533
			 }]
		};
		this.currentStepFromState = this.currentStepFromState.bind(this);
		this.alertContactUs = this.alertContactUs.bind(this);
		this.updateCurrentStep = this.updateCurrentStep.bind(this);
	}
	
	currentStepFromState(){
		switch(this.state.currentStep){
		case 1:
			return <StepOne updateCurrentStep={this.updateCurrentStep}/>;
			break;
		case 2:
			return <StepTwo updateCurrentStep={this.updateCurrentStep}
											providersAndOrganizations={this.state.providersAndOrganizations}/>;
			break;
		}
	}
	
	alertContactUs(){
		alert("navigate to contact us.");
	}
	
	updateCurrentStep(stepInt){
		this.setState({currentStep: stepInt});
	}
	
	render(){
		let currentStep = this.currentStepFromState();
		
		let footerDisplay = (this.state.currentStep === 2) ? 
			<FormFooter alertContactUs={this.alertContactUs} percentComplete={this.state.percentComplete}/> :
			<FormFooter alertContactUs={this.alertContactUs} percentComplete={null}/> ;
		return(
			<div style={{minHeight:"900px"}}>
				<FormHeading/>
			
				{currentStep}
				
				{footerDisplay}
			</div>
		)
	}
};

export default ParticipationSteps;