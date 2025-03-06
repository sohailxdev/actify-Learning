import React from "react";
import CourseCard from "../../components/CourseCard";
import { mainData } from "../../data";
import {scrollToHash} from './OurCourse'
import {GradualSpacing2} from './Text2'
import {GradualSpacing3} from './Text3'
import { GradualSpacingText } from "./GradualSpacingText";

const CourseSection = () => {
  const appDeveloper = mainData.filter((a) => a.category == "appDeveloper");
  const dataAnalyst = mainData.filter((a) => a.category == "dataAnalyst");
  const rpaDeveloper = mainData.filter((a) => a.category == "rpaDeveloper");
  return (
    <>
      <p className="text-black text-center text-4xl md:text-6xl mt-20 mb-10">
        Our Courses
      </p>
      <div id='rpa' className="bg-blue-300 py-10 mt-10 w-[90vw] mx-auto rounded-badge">
        <div className="bg-blue-200 py-10 mt-10 mb-10 w-[82vw] mx-auto rounded-badge">
          <div className="w-full px-4 lg:px-32 mb-10 mt-10">
            <p className="bg-blue-400 w-65 md:w-80 mb-4 py-4 text-black text-center sm:text-start pl-0 sm:pl-2 text-2xl rounded-xl font-bold">
              RPA Developer
            </p>
            {/* <span className="text-black text-2xl font-bold pl-0 sm:pl-2">Automation is not the job of machines, but the job of the innovator</span> */}
            <span className="text-black text-xl lg:text-2xl font-bold pl-0 sm:pl-2">
              <GradualSpacing2  text='Robots work, so humans can innovate'/>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32 items-center justify-center">
            {rpaDeveloper.map((item, index) => {
              return (
                <CourseCard title={item.title} img={item.img} id={item.id} />
              );
            })}
          </div>
        </div>
      </div>
      <div id='appdev' className="bg-yellow-100 py-10 mt-10 w-[90vw] mx-auto rounded-badge">
        <div className="bg-yellow-50 py-10 mt-10 mb-10 w-[82vw] mx-auto rounded-badge">
          <div className="w-full px-4 lg:px-32 mb-10 mt-10">
            <p className="bg-yellow-200 w-65 md:w-80 mb-4 py-4 text-black text-center sm:text-start pl-0 sm:pl-2 text-2xl rounded-xl font-bold">
              Application Developer
            </p>
            {/* <span className="text-black text-2xl font-bold pl-0 sm:pl-2">Code today, conquer tomorrow</span> */}
            <span className="text-black text-2xl font-bold pl-0 sm:pl-2">
              <GradualSpacing2 text='Code today, conquer tomorrow' />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32 items-center justify-center">
            {appDeveloper.map((item, index) => {
              return (
                <CourseCard title={item.title} img={item.img} id={item.id} />
              );
            })}
          </div>
        </div>
      </div>
      <div id='dataanalyst' className="bg-[#87aca4] py-10 mt-10 w-[90vw] mx-auto rounded-badge">
        <div className="bg-[#a1c2bb] py-10 mt-10 mb-10 w-[82vw] mx-auto rounded-badge">
          <div className="w-full px-4 lg:px-32 mb-10 mt-10">
            <p className="bg-[#86b1a8] w-65 md:w-80 mb-4 py-4 text-black text-center sm:text-start pl-0 sm:pl-2 text-2xl rounded-xl font-bold">
              Data Analyst
            </p>
            
            {/* <span className="text-2xl text-black font-bold pl-0 sm:pl-2">Where numbers meet storytelling</span> */}
            <span className="text-2xl text-black font-bold pl-0 sm:pl-2">
              <GradualSpacing2 text='Where numbers meet storytelling' />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32 items-center justify-center">
            {dataAnalyst.map((item, index) => {
              return (
                <CourseCard title={item.title} img={item.img} id={item.id} />
              );
            })}
          </div>
        </div>
      </div>
      
      {/* <div className='w-full px-4 lg:px-32 my-10'>
        <p className='bg-yellow-200 w-80 py-4 text-black text-2xl text-center rounded-xl font-bold'>Data Analyst</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32'>
      {
        dataAnalyst.map((item, index) => {
            return (
                <CourseCard title={item.title} desc={item.desc} img={item.img} longDesc={item.longDesc}Mode={item.Mode} Duration={item.Duration} />
            )
        })
      }
    </div>
    <div className='w-full px-4 lg:px-32 my-10'>
        <p className='bg-yellow-200 w-80 py-4 text-black text-2xl text-center rounded-xl font-bold'>RPA Developer</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32'>
      {
        rpaDeveloper.map((item, index) => {
            return (
                <CourseCard title={item.title} desc={item.desc} img={item.img} longDesc={item.longDesc} Mode={item.Mode} Duration={item.Duration} />
            )
        })
      }
    </div> */}
    </>
  );
};

export default CourseSection;
