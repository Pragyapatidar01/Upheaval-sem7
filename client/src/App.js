import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import NavbarComp from "./components/NavbarComp";
import "./App.css";

import { Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import Card from "./components/Cards";
import Sidebar from "./components/Sidebar";
import Ideadata from "./components/Ideadata";
import Organisationdata from "./components/Organisationdata";
import Ideas from './Pages/Ideas'
import Mentors from "./Pages/Mentors";
import Organization from "./Pages/Organization";
import NewIdea from "./Pages/NewIdea";
import DetailPS from "./Pages/DetailPS";
import DetailOrg from "./Pages/DetailOrg";
import DetailMentors from "./Pages/DetailMentors";
import DetailIdeas from "./Pages/DetailIdeas";
import { ProblemStatements } from "./Pages/ProblemStatement";
import SubmitSolution from "./Pages/SubmitSolution";
import StudentHome from "./Pages/StudentHome";
import StartupHome from "./Pages/StartupHome"
import OrganizationHome from "./Pages/OrganizationHome"
import MentorHome from "./Pages/MentorHome"
import InvestorHome from "./Pages/InvestorHome"
import AboutUs from "./Pages/AboutUs"


function App() {
  return (
    <div className="App">
      <NavbarComp />
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/studentHome" element={<StudentHome />} />
        <Route path="/startupHome" element={<StartupHome />} />
        <Route path="/organizationHome" element={<OrganizationHome />} />
        <Route path="/mentorHome" element={<MentorHome />} />
        <Route path="/investorHome" element={<InvestorHome />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/detailps" element={<DetailPS />} />
        <Route path="/detailOrg" element={<DetailOrg />} />
        <Route path="/detailmentors" element={<DetailMentors />} />
        <Route path="/Organization" element={<Organization />} />
        <Route path="/Mentors" element={<Mentors />} />
        <Route path="/NewIdea" element={<NewIdea />} />
        <Route path="/ps" element={<ProblemStatements />} />
        <Route path="/SubmitSolution" element={<SubmitSolution />} />
        <Route path="/detailIdeas" element={<DetailIdeas />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
    </div> 
  );
}

export default App;
