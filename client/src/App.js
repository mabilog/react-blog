import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from "./components/register/Register";
import Login from './pages/login/Login'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Topbar from "./components/topbar/Topbar";
import Single from './components/single/Single'

function App() {
  const user = false;

  return (
    <>
      <Topbar user={user}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
    </>
  );
}

export default App;
