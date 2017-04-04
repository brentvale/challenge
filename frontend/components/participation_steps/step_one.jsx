import React from 'react';

class StepOne extends React.Component{
	constructor(){
		super();
		this.state = {
			firstName: "",
			lastName: "",
			birthCity: "",
			formIsValid: false,
			consentGiven: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.toggleConsentGiven = this.toggleConsentGiven.bind(this);
		this.alertNavigatingBack = this.alertNavigatingBack.bind(this);
	}
	
	alertNavigatingBack(){
		alert("would navigate back.")
	}
	
	formIsValid(){
		//rudimentary form validation
		//consent must be given
		if(!this.state.consentGiven){
			return false;
		}
		//First Name, Last Name, and City must be filled out (letters only)
		if(/^[A-Za-z ]+$/.test(this.state.firstName) && /^[A-Za-z ]+$/.test(this.state.lastName && /^[A-Za-z ]+$/.test(this.state.birthCity))){
			return true;
		}
		return false;
	}
	handleSubmitForm(){
		console.log({first_name: this.state.firstName,
								 last_name: this.state.lastName,
								 birth_city: this.state.birthCity})
		this.props.updateCurrentStep(2);
	}
	
	handleChange(e){
		let targetId = $(e.currentTarget).attr("id");
		let value = $(e.currentTarget).val();

		switch(targetId){
		case "firstName":
			this.setState({firstName: value});
			break;
		case "lastName":
			this.setState({lastName: value});
			break;
		case "birthCity":
			this.setState({birthCity: value});
			break;
		}
	}
	
	toggleConsentGiven(){
		console.log("giving consent");
		this.setState({consentGiven: !this.state.consentGiven});
	}
	
	render(){
		let isValid = this.formIsValid();
		let submitButton;
		if(isValid){
			submitButton =  <div className="button next-button hand-on-hover" onClick={this.handleSubmitForm}>
												<p className="submit-button validated">Complete the form to continue enrollment</p>
											</div>;
		} else {
			submitButton =	<div className="button next-button">
												<p className="submit-button unvalidated">Complete the form to continue enrollment</p>
											</div>;
		}
		let consentFilledIn = (this.state.consentGiven) ? <div id="filledInConsent"></div>: "";
		
		return(
			<div className="form-container center-block">
				<h3 className="ultra-thin form-color">Voluntary Participation</h3>
				<p>Participation in this study is voluntary.  If you do not wish to participate, there will be no penalty of any kind.</p>
				<p>To confirm your intent to enroll in this study, please complete the form below.</p>
				<form>
					<div className="form-box form-box-half first">
						<label><span>First Name</span>
							<input 	type="text" 
											value={this.state.firstName} 
											placeholder="John"
											id="firstName"
											onChange={this.handleChange}/>
						</label>
					</div>
					
					<div className="form-box form-box-half second">
						<label><span>Last Name</span>
							<input  type="text" 
											value={this.state.lastName} 
											placeholder="Doe"
											id="lastName"
											onChange={this.handleChange}/>
						</label>
					</div>
											
					<div className="form-box form-box-full">
						<label><span>What city were you born in?</span>
							<input type="text" 
										 value={this.state.birthCity} 
										 placeholder="City Name"
										 id="birthCity"
										 onChange={this.handleChange}/>
						</label>
					</div>
											
					<div className="form-box form-box-full">
						<div className="checkbox" onClick={this.toggleConsentGiven}>
							{consentFilledIn}
						</div>
						<p className="checkbox-info">I consent to participate in the study</p>
					</div>
					
					<div className="form-box form-box-full" style={{marginTop: "0px"}}>
						<div className="button back-button hand-on-hover" onClick={this.alertNavigatingBack}>
							<i className="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
						<div className="next-button-container">
							{submitButton}
						</div>
					</div>
				</form>
				
			</div>
		)
	}
};

export default StepOne;