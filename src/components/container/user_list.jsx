import React from 'react';
import { User } from '../../models/user.class';
import UserComponent from '../pure/user';

const UserList = () => {

    const defaultUser = new User('Pepito','Perez', 'pepito@gmail.com', false);

    return (
        <div>
            <div> Your status user:</div>        
            <UserComponent user={defaultUser}></UserComponent>
        </div>
    );
};

export default UserList;
