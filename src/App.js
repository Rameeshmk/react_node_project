import React from 'react';
import Loginpage from "../src/components/Loginpage";
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import NavPro from '../src/components/NavPro';
import NavUser from '../src/components/NavUser';



function App() {
  return (
    <BrowserRouter>
    <div > 
    
      <Routes>
      
      <Route index element={<Loginpage/>}></Route>
      <Route path='usersData' element={<NavUser/>}></Route>
      <Route path='usersdata/:userNo' element={<NavPro/>} />
     
     </Routes>
      
      
    </div>
    </BrowserRouter>
  )
}

export default App
