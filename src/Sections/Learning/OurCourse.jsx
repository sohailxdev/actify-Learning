import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import a1 from "../../assets/handimage.jpeg";
import bigscreen from "../../assets/2.jpg";
// import tabscreen from '../../assets/3.jpg'
import tabscreen from "../../assets/Tabscreen.jpg";
import mobilescreeen from "../../assets/4.jpg";
import AppCarousel from "../../assets/AppCarousel.jpg";
import DataAnalytics from "../../assets/DataAnalytics.jpg";

import { Link } from "react-router-dom";

export const scrollToHash = (elementId) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: "smooth" });
};

export default function OurCourse() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResetSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResetSize);
    handleResetSize();
    return () => {
      window.removeEventListener("resize", handleResetSize);
    };
  }, []);

  const CarouselItems = [
    {
      id: 1,
      // primaryImage: crm1,
      // secondaryImage: crm2,
      title: "RPA Developer",
      description:
        "RPA developers create automation solutions to streamline tasks using software robots.",
      // bgColor: "to-[#FF8343]",
      blur: "blur-none",
      sectionId: "rpa",
      bgImage:
        windowWidth > 900
          ? bigscreen
          : windowWidth > 767
          ? tabscreen
          : mobilescreeen,
      courses: [
        { title: "UiPath", id: 8 },
        { title: "Power Automate", id: 9 },
      ],
      // courses: ['React Developer', 'React Native', 'Full Stack Java', 'Full Stack Python', 'Frontend Developer']
    },
    {
      id: 2,
      // primaryImage: hr2,
      // secondaryImage: hr1,
      title: "Application Developer",
      description:
        "Application developers create and maintain software applications to meet business needs.",
      // bgColor: "to-[#1231aed5]",
      blur: "blur-sm",
      sectionId: "appdev",
      bgImage: AppCarousel,
      courses: [
        { title: "React Native", id: 11 },
        { title: "Full Stack Java", id: 12 },
        { title: "React Developer", id: 13 },
        { title: "Full Stack Python", id: 14 },
        { title: "Frontend Developer", id: 15 },
      ],
    },
    {
      id: 3,
      // primaryImage: LMS1,
      // secondaryImage: LMS2,
      title: "Data Analyst",
      description:
        "Data analysts interpret data to provide insights for informed decisions.",
      // bgColor: "to-[#4F75FF]",
      blur: "blur-sm",
      sectionId: "dataanalyst",
      bgImage: DataAnalytics,
      courses: [
        { title: "Data Analyst", id: 1 },
        { title: "Advance Excel", id: 2 },
        { title: "SQL Developer", id: 3 },
        // {title: "Business Analyst", id: },
        { title: "Tableau Developer", id: 4 },
        { title: "Power BI Developer", id: 5 },
      ],
    },
  ];

  const DeskTopSlideItem = ({ item, index }) => {
    return (
      <div
        title="Draggable slider, not swipeable!"
        id="business"
        key={item.id}
        className={`relative w-[100%] mx-auto px-[5%] border shadow-xl flex items-center justify-center montserrat-font h-[45rem] sm:h-[36rem] cursor-grab bg-gradient-to-r from-white ${item.bgColor}`}
      >
        <div
          style={{
            backgroundImage: `url(${item.bgImage})`,
            backgroundPosition: "center",
          }}
          className={`absolute h-full w-full bg-cover bg-center ${item.blur}`}
        ></div>
        <div className="w-full z-20 mx-auto">
          <p className="  lg:text-6xl md:text-3xl text-3xl  text-white font-bold w-full text-center montserrat-font mx-auto mb-4">
            {item.title}
          </p>
          <p className="text-[20px] lg:text-4xl text-white w-full sm:w-8/12 mx-auto p-4 montserrat-font text-center">
            {item.description}
          </p>
          <div className="flex flex-col gap-y-4 p-4 justify-center items-center relative">
            {/* <ul className="grid grid-cols-1 sm:grid-cols-2 text-black font-medium text-xl gap-x-10 items-center"> */}
            <ul className="flex flex-wrap justify-center text-white font-medium text-xl items-center gap-2 ">
              {item.courses?.map((item, index) => {
                return (
                  <Link
                    to={`/courseDetails/${item.id}`}
                    className="bg-transparent font-bold px-4 py-2 m-1 rounded-lg border-2 border-gray-400"
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </ul>
            <Link to={'/contact'} className="lg:absolute -bottom-28" >
              <button
                title=""
                className="btn w-48 md:btn-wide btn-outline focus:outline text-white text-xl md:text-lg montserrat-font"
              >
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100%] mx-auto">
      <Swiper
        // threshold={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        // loopAdditionalSlides={1}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {CarouselItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <DeskTopSlideItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
