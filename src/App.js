// import logo from './logo.svg';
import * as API from  './services/launches';
import './App.css';
import {useState, useEffect} from 'react';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskComponent from './components/container/task_list';
// import UserComponent from './components/container/user_list';
// import Ejm1 from './hooks/ejm1';
//  import Ejm2 from './hooks/ejm2';
// import ComponentWithContext from './hooks/ejm3';
// import Ejm4 from './hooks/ejm4';

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          {/* <Greeting name="Prueba"></Greeting> */}
          {/* <GreetingF name="prueba"></GreetingF> */}
          {/* {new Date().toLocaleTimeString()} */}
          {/* <UserComponent></UserComponent> */}
          {/* <Ejm1></Ejm1> */}
          {/* <Ejm2></Ejm2> */}
          {/* <ComponentWithContext></ComponentWithContext> */}
          {/* <Ejm4 name="pepe">
            <h3>
              Contenido del props.children
            </h3>
          </Ejm4> */}
          <ul>
            {/* {launches.flight_number} */}
            {launches.map(launch => (
             <li key={launch.flight_number}>{launch.mission_name} ({launch.launch_year})</li>
            ))}
          </ul>
      </header>
    </div>
  );
}

export default App;
