import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormLocal from './formlocal/FormLocal';
// import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:'black'}}>
        <h3 style={{color:"white"}}>Employee form </h3>
        <FormLocal/>
      </div>
    );
  }
}
export default App;