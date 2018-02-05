import React from 'react';
import Profile from './form/ProfileForm';
import Summary from './form/SummaryForm';
import Contact from './form/ContactForm';
import Experience from './form/ExperienceForm';
import Additional from './form/AdditionalForm';
import Personalize from './form/PersonalizeForm';

class Form extends React.Component {

	render(){
		return(
			<form className="resume-form" action="/signup" method="post">

				<Profile updatePreview= {this.props.updatePreviewForm} />
				<Summary updatePreview= {this.props.updatePreviewForm} />
				<Contact />
				<Experience />
				<Additional updatePreview= {this.props.updatePreviewForm} />
				<Personalize updateThemeState = {this.props.saveTheme}/>
			</form>
		);
	}
}

export default Form;
