import React from "react"
import { NavLink } from "react-router-dom";
import{SocialIcon} from "react-social-icons";
import {GoFile } from "react-icons/go";

export default function NavBar()
{
return (
<header className="bg-green-400">
<div className="container mx-auto flex justify-between">
<nav className="flex">

<NavLink to="/"exact 
activeClassName="text-yellow-200 "
className="inflex-flex items-center py-8 px-3 mr-4 text-black-300 hover:text-yellow-200 text-5xl " >
Home
</NavLink>

<NavLink to="/project" 
activeClassName="text-yellow-200"
className="inline-flex items-center py-3 px-3  text-4xl rounded text-black hover:text-yellow-200">
Projects
</NavLink>



</nav>
<div className="flex sm:inline-flex md:flex lg:flex xl:flex  py-3 px-3 my-6 gap-2">
<SocialIcon url="https://www.linkedin.com/in/alexey-aulov/" ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:55,width:55}}/>
  
<SocialIcon url="https://github.com/AlexeyAulov" ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:55,width:55}}/>

<a  href="https://github.com/AlexeyAulov/Resume/blob/main/Alexey%20Aulov.pdf" target="_blank" rel="noreferrer"><GoFile ClassName="mr-4"  fgColor="#fff" style ={{height:55,width:55}}/></a>

</div>
</div>   
</header>
    
);



}