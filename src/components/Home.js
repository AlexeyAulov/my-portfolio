import React from "react";
import image from "../PortfolioPic/NewProfilePic.jpg";
import {SiCplusplus } from "react-icons/si";
import {SiTailwindcss } from "react-icons/si";
import {DiPhp} from "react-icons/di";
import {DiPython} from "react-icons/di";
import {DiJavascript} from "react-icons/di";
import {DiMysql} from "react-icons/di";
import {DiHtml5} from "react-icons/di";
import {DiCss3} from "react-icons/di";
import {DiReact} from "react-icons/di";
import {DiBootstrap} from "react-icons/di";
import {DiVisualstudio} from "react-icons/di";
import {DiNodejsSmall} from "react-icons/di";
import {DiGithubBadge} from "react-icons/di";
import {DiSass} from "react-icons/di";

export default function Home() {


  return (
    <main className="bg-yellow-200 min-h-screen p-12">
      <h1 className="text-4xl  pb-2 relative flex justify-center  text-black sans leading-none lg:leading-snug ">Alexey Aulov</h1>
      <div class="uppercase pb-5 flex justify-center tracking-wide text-md text-black font-semibold">Software Engineer</div>
      <div class="max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex ">
          <div class="md:flex-shrink-0 ">
            <img src={image} class="h-64 w-full object-cover md:w-64"  alt="Portfolio Picture" />
          </div>
          <div class="p-4">
            <p class="mt-2 text-gray-500">Hi my name is Alexey, I am inspiring to be an software engineer.
            I am currently a full time Information Systems and Technology student at College of Staten Island.
            I am passionate about creating applications and learning how they work.
            I look up to new challanges, and always work towards exceeding expectations in a collaborative and efficient way.</p>
          </div>
        </div>
      </div>
      <div class="uppercase py-5 flex justify-center tracking-wide text-md text-black font-semibold">Skills</div>
      <div class="grid grid-flow-col  justify-center">
        <div><SiCplusplus ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiPhp ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiPython ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiJavascript ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiMysql ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiHtml5 ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiCss3 ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiReact ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><SiTailwindcss ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiBootstrap ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiVisualstudio ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiNodejsSmall ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiGithubBadge ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
        <div><DiSass ClassName="mr-4" target="_blank" fgColor="#fff" style ={{height:45,width:45}}/></div>
     </div>
</main>


  );
}