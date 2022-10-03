import React, {useState, useContext}from 'react';

const pruebaContexto = React.createContext(null);

const Component1 = () => {
    const state = useContext(pruebaContexto);
    
    return (
        <div>
            <h1>
            token: {state.token}
            </h1>
            <Component2></Component2>
        </div>
    );
}

const Component2 = () => {
    const state = useContext(pruebaContexto);
    return (
        <div>
            <h2>
            session: {state.session}
            </h2>
        </div>
    );
}


export default function ComponentWithContext(){
    const stateInitial = {
        token: '123545',
        session: 1
    }

    const [sessionData, setSessionData] = useState(stateInitial);

    function updateSession() {
        setSessionData({
            token: '654321',
            session: sessionData.session + 1
        });
    }

    return (
        <pruebaContexto.Provider value={sessionData}>
            <Component1></Component1>
            <button onClick={updateSession}>Update session</button>
        </pruebaContexto.Provider>
    );
}
