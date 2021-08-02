import List from './components/List'
import Login from './Login/Login'
import styled from 'styled-components'
import Jobs from './Jobs/Jobs'
import SignUp from './Signup/SignUp'
import {Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute'



function App() {
  return (
      <>   
      <Switch>
      {/* <ProtectedRoute path="/signin" component={Jobs}/> */}
      <Route  path="/jobs" component={Jobs} />
      <Route  path="/signin" component={Login} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/" component={Login} />
      </Switch>    
      </>
   
  );
}

export default App;
