import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import NavBar from "./components/Body/Forms/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Migrants from "./pages/Migrants";
import Company from "./pages/Company";
import FormProfileCompany from "./pages/FormProfileCompany";
import AdminCompany from "./pages/AdminCompany";
import AdminMigrant from "./pages/AdminMigrant";
import FormJobPost from "../src/components/Forms/FormJobPost";
import FromProfileMigrantsCv from "./pages/FromProfileMigrantsCv";
import JobPost from "./pages/JobPost";
import ProfileMigrant from "./pages/ProfileMigrant";
import SingUpCompany from "./pages/SingUpCompany";
import SingUpMigrants from "./pages/SingUpMigrants";
import Login from "./pages/Login";
import FormBusinessStream from "./components/Forms/FormBusinessStream";
import FormCompanyImages from "./components/Forms/FormCompanyImages";
import FormCompany from "./components/Forms/FormCompany";
import FormJobLocation from "./components/Forms/FormJobLocation";
import FormJobType from "./components/Forms/FormJobType";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
                
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/migrants" element={<Migrants />} />
                  
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admincompany" element={<AdminCompany />} />
        <Route path="/adminmigrant" element={<AdminMigrant />} />
        <Route path="/formjobpost" element={<FormJobPost />} />
        <Route path="/formprofilecompany" element={<FormProfileCompany />} />
        <Route path="/fromprofilemigrantscv" element={<FromProfileMigrantsCv />} />
        <Route path="/jobpost" element={<JobPost />} />
        <Route path="/profilemigrant" element={<ProfileMigrant />} />
        <Route path="/singupcompany" element={<SingUpCompany />} />
        <Route path="/singupmigrants" element={<SingUpMigrants />} />
        <Route path="/business-stream" element={<FormBusinessStream/>} />
        <Route path="/company-image-register" element={<FormCompanyImages/>}/>
        <Route path="/company-register" element={<FormCompany/>}/>
        <Route path="/record-job-locations" element={<FormJobLocation/>}/>
        <Route path="/record-job-type" element={<FormJobType/>}/>
        <Route path="/record-job-post" element={<FormJobPost/>}/>
                       
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
