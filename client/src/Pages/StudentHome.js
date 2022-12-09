import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Sidebar from '../components/Sidebar'
import Ideas from './Ideas'

function StudentHome() {
  return (
    <>
     <NavbarComp />
        <div className="sidebarr">
            <Sidebar />
                <Ideas />
        </div>
    </>
  )
}

export default StudentHome


// import React from 'react'
// import {auth} from "../firebase-config";

// import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarComp from "../components/NavbarComp";
// // import "./App.css";
// import Card from "../components/Cards";
// import Sidebar from "../components/Sidebar";
// import Ideadata from "../components/Ideadata";
// import Organisationdata from "../components/Organisationdata";
// // import Ideas from '../Ideas'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Mentors from "./Mentors";
// import Organization from "./Organization";
// import Ideas from "./Ideas";
// import NewIdea from "./NewIdea";
// import DetailPS from "./DetailPS";
// import DetailOrg from "./DetailOrg";
// import DetailMentor from "./DetailMentors";
// import DetailIdeas from "./DetailIdeas";
// import { ProblemStatements } from "./ProblemStatement";
// import SubmitSolution from "./SubmitSolution";
// import Register from './Register';

// function StudentHome() {
//     // console.log(auth.currentUser);
//     if (auth.currentUser == null) {
//         return (
//         <>
//             <Register />
//         </>
//         )
//     }
//       return (
//         <>
//         <NavbarComp />
//         <div className="sidebarr">
//           <Router>
//             <Sidebar />
//             <Routes>
//               <Route exact path="/ideas" element={<Ideas />} />
//               <Route exact path="/detailps" element={<DetailPS />} />
//               <Route exact path="/detailOrg" element={<DetailOrg />} />
//               <Route exact path="/detailmentor" element={<DetailMentor />} />
//               <Route path="/Organization" element={<Organization />} />
//               <Route path="/Mentors" element={<Mentors />} />
//               <Route path="/NewIdea" element={<NewIdea />} />
//               <Route path="/ps" element={<ProblemStatements />} />
//               <Route path="/SubmitSolution" element={<SubmitSolution />} />
//               <Route exact path="/detailIdeas" element={<DetailIdeas />} />
//             </Routes>
//           </Router>
//         </div>
//         </>
//       )
  
// }

// export default StudentHome