import React from "react";
import image from "../PortfolioPic/ProfilePicture.jpg";
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
      <h1 className="text-4xl  pb-2 relative flex justify-center  font-semi-bold text-black sans leading-none lg:leading-snug ">Alexey Aulov</h1>
      <div class="uppercase pb-6 flex justify-center tracking-wide text-2xl text-black font-semibold">Software Engineer</div>
      <div class="max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex ">
          <div class="md:flex-shrink-0 ">
            <img src={image} class="h-96  w-full object-cover md:w-80"  alt="Portfolio Picture" />
          </div>
          <div class="p-4">
            <p class="mt-2 md:w-80 text-lg text-gray-500">Hi my name is Alexey, I am inspiring to be an software engineer.
            I am currently a full time Information Systems and Informatics student at College of Staten Island.
            I am passionate about creating applications and learning how they work.
            I look up to new challenges, and always work towards exceeding expectations in a collaborative and efficient way.</p>
          </div>
        </div>
      </div>
      <div class="uppercase py-5 flex justify-center tracking-wide text-3xl text-black font-semibold">Skills</div>
      <div class="flex flex-wrap justify-center">
        <div><SiCplusplus class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiPhp class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiPython class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiJavascript class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiMysql class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiHtml5 class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiCss3 class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiReact class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><SiTailwindcss class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiBootstrap class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiVisualstudio class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiNodejsSmall class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiGithubBadge class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
        <div><DiSass class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 mr-4 " target="_blank" fgColor="#fff" style ={{height:55,width:55}}/></div>
     </div>
     <div class="uppercase underline pt-6 flex justify-center tracking-wide text-2xl text-black font-semibold" >
       <a href="https://github.com/AlexeyAulov/Resume/blob/main/Alexey%20Aulov%20%20Updated%20Resume%20.pdf">Contact</a></div>

</main>


  );
}