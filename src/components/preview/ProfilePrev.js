import React from 'react';

class Profile extends React.Component {
	render(){
		return(
			<div className="printPreview preview__container--print preview__container--padding" id="preview2">
				<div className="resume-header preview__container--padding">
					<h2 className="resume__title" id="data-profile"></h2>
				</div>

				<div className="resume__header__profession preview__container--padding">
					<span id="data-profession"></span>
				</div>
			</div>
		);
	}
}
export default Profile;
