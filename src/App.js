// import logo from './logo.svg';

import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskComponent from './components/container/task_list';
// import UserComponent from './components/container/user_list';
// import Ejm1 from './hooks/ejm1';
//  import Ejm2 from './hooks/ejm2';
// import ComponentWithContext from './hooks/ejm3';
import Ejm4 from './hooks/ejm4';

function App() {
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
          <Ejm4 name="pepe">
            <h3>
              Contenido del props.children
            </h3>
          </Ejm4>
      </header>
    </div>
  );
}

export default App;
