import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import User from './component/User/User';
import UserDetail from './component/UserDetail/UserDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<User/>} />
        <Route path="/*" Navigate to= {<User/>} />
        <Route path="/user/:id" element = {<UserDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
