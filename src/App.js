// import logo from './logo.svg';

import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskComponent from './components/container/task_list';
import UserComponent from './components/container/user_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Greeting name="Prueba"></Greeting> */}
          {/* <GreetingF name="prueba"></GreetingF> */}
          {/* {new Date().toLocaleTimeString()} */}
          <UserComponent></UserComponent>
      </header>
    </div>
  );
}

export default App;
