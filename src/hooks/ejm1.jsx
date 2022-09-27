import React, {useState}from 'react';

const Ejm1 = () => {

    const firstVal = 0;

    const personVal = {
        nombre: 'pepito',
        email: 'pepito@gmail.com'
    }

    const [contador, setContador] = useState(firstVal);
    const [person, setPerson] = useState(personVal);

    function incrementContador(){
        setContador(contador+1);
    }

    function updatePerson(){
        setPerson(
            {
                nombre:'pepito1',
                email:'pepito1@gmail.com',
            }
        );
    }

    return (

        <div>
            <h2>Contador: {contador}</h2>
            <h2>Persona:</h2>
            <h3>Nombre: {person.nombre}</h3>
            <h3>Correo: {person.email}</h3>
            <button onClick={incrementContador}>Increment</button>
            <button onClick={updatePerson}>Update</button>
        </div>
    );
}

export default Ejm1;
