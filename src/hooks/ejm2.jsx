import React, {useState, useRef,useEffect} from 'react';

const Ejm2 = () => {

    const [contadorUno, setContadorUno] = useState(0);
    const [contadorDos, setContadorDos] = useState(0);

    const miRef = useRef();

    function increment1(){
        setContadorUno(contadorUno + 1);
    }

    function increment2(){
        setContadorDos(contadorDos + 1);
    }

    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    })
    
    return (
        <div>
            
        </div>
    );
}

export default Ejm2;
