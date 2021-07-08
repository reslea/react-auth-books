import React, { useState} from 'react';
import './App.css';
import { TokenContext } from '.';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Main';
import LoginForm from './LoginForm';
import PermissionRoute from './PermissionRoute';
import { permissions } from './utilities/token';

function App() {
  const [x, setX] = useState(0);

  function displayAlert() {
    alert('hello');
  }

  return (
    <>
      <A displayAlert={displayAlert} />
      <B x={x} setX={setX} />
    </>
  );
}

function A({displayAlert}) {

  console.log('A render');

  return <div onClick={displayAlert}>A</div>
}

function B ( { x, setX } ) {
  console.log('B render');

  return (
  <>
    <div>{x}</div>
    <button onClick={() => setX(x => x+1)}>increment</button>
  </>
  )
}

// function App() {
//   const [token, setToken] = useState();

//   return (
//     <div className="App">    
//       <TokenContext.Provider value={[token, setToken]}>
//         <Router>
//           <header>some header</header>
//           <Switch>
//             <PermissionRoute exact path="/" component={Main} permission={permissions.readBooks} />
//             <Route path="/login" component={LoginForm} />
//           </Switch>
//         </Router>
//       </TokenContext.Provider>
//     </div>
//   );
// }



export default App;