import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../../models/user.class';


const UserComponent = ({ user }) => {
    return (
        <div>
            <h2> Nombre: { user.name }</h2>
            <h3> Apellido: { user.last_name }</h3>
            <h4> Correo: { user.mail }</h4>
            <h5> This task is: {user.status ? 'Contacto En Línea':'Contacto No Disponible'}</h5>
        </div>
    );
};


UserComponent.propTypes = {
    user: PropTypes.instanceOf(User)
};


export default UserComponent;
