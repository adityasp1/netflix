import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
    </Routes>
    <Footer />
    </AuthContextProvider>
     </>
  )
}


export default App;
