import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "My Ideas",
    path: "/ideas",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "New Idea",
    path: "/NewIdea",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Organization",
    path: "/Organization",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Mentors",
    path: "/Mentors",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Problem Statement",
    path: "/ps",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Submit Sol",
    path: "/SubmitSolution",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  // {
  //   title: "Submit Idea",
  //   path: "/messages",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text",
  // },
  {
    title: "About Us",
    path: "/AboutUs",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
