import './App.css';
import Home from "../src/Components/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Toaster from 'react-hot-toast';
import UserRegister from "./Components/User/UserRegister";
import UserLogin from "./Components/User/UserLogin";
import VendorLogin from "./Components/Vendor/VendorLogin";
import VendorRegister from "./Components/Vendor/VendorRegister";
import DisplayProposals from './Components/Proposals/DisplayProposals';
import CreateProposals from './Components/Proposals/CreateProposals';


function App() {
  return (
    <div>
     
      <Router>

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/userregister' element={<UserRegister />} />
          <Route path='/vendorlogin' element={<VendorLogin />} />
          <Route path='/vendorregister' element={<VendorRegister />} />
          <Route path='/allproposals' element={<DisplayProposals />} />
          <Route path='/createproposals' element={<CreateProposals />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
 // <Toaster

      //   position="top-center"
      //   toastOptions={{
      //     success: {
      //       theme: {
      //         primary: (36, 185, 135)
      //       }
      //     }
      //   }}
      // >
      // </Toaster>