import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import SignUp from './components/SignUp';
import LoginStep1 from './components/Login/LoginStep1';
import LoginStep2 from './components/Login/LoginStep2';
import Register from './components/Login/Register';
import withAuthGuard from './hocs/withAuthGuard';

const ProtectedHome = withAuthGuard(Home);
const ProtectedDetail = withAuthGuard(Detail);

const isAuthenticated = (): boolean => {
  return localStorage.getItem('currentUser') !== null;    
};

function App() {
  return (
    <div className="App"> 
      <Router>
          <Header />
          <Routes>            
            <Route path="/" element={<SignUp />} />            
            <Route path="/home" element={<ProtectedHome isAuthenticated={isAuthenticated()} />} />            
            <Route path="/detail/:id" element={<ProtectedDetail isAuthenticated={isAuthenticated()} />} />
            <Route path="/login/enter-email" element={<LoginStep1 />} />
            <Route path="/login/enter-password" element={<LoginStep2 />} />
            <Route path="/sign-up/create-password" element={<Register />} />
          </Routes>        
      </Router>     
    </div>
  );
}

export default App;
