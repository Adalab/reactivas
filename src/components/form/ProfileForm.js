import React from 'react';

class Profile extends React.Component {
	render(){
		return(
			<div className="profile section">
				<div className="info">
					<h2 className="section-title">Perfil</h2>
					<div className="section-buttons">
						<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-profile')" />
					</div>
				</div>

				<div id="content-profile" className="form__sectionContent">
					<input type="text" name="name" id="name" placeholder="Nombre" />
					<input type="text" name="lastname" id="lastname" placeholder="Apellidos" />
					<input type="text" name="profession" id="profession" placeholder="Profesión" />
					<input type="button" name="save" className="saveProfile form__button--saveDeleteClose" value="Guardar" />
					<input type="button" name="delete" value="Borrar" className="delete-profile form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-profile')" />
				</div>
			</div>
		);
	}
}

export default Profile;
