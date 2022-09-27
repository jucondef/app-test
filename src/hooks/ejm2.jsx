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

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contadorUno])
    
    useEffect(() => {
        console.log('Cambio en el estado del componente contador 1 / contador 2');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contadorUno, contadorDos])

    return (
        <div>
            <h2>ContadorUno: {contadorUno}</h2>
            <h2>ContadorDos: {contadorDos}</h2>
            <h4 ref={miRef}> Ejemplo de elemento referenciado</h4>
            <div>
                <button onClick={increment1}>Incrementar 1</button>
                <button onClick={increment2}>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejm2;
