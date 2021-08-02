import List from './components/List'
import Login from './Login/Login'
import styled from 'styled-components'
import Jobs from './Jobs/Jobs'
import Signup from './Signup/SignUp'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
      <>
      
        {/* <List job={job} /> */}
        <Jobs/>
      <Login/>
      {/* <Signup/> */}
       
      </>
   
  );
}

export default App;
