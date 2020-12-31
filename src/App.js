
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login'
import A from "./A"
import B from "./B"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />                   
      </Switch>
      <Switch>
       <Route path="/a1" exact component={A} />
</Switch>
       <Switch>
       <Route path="/a2" exact component={B} />
        </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
