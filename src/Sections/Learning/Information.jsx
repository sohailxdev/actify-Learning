import React from "react";

const Information = () => {
  const informationContent = [
    {
      img: "https://static.wixstatic.com/media/cc6bf1_33c9de1695ab414fa3ebb7a93469b6ae~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/online-learning_edited.png",
      title: "No. of Courses",
      number: "12",
    },
    {
      img: "https://static.wixstatic.com/media/cc6bf1_9a5487fd676044c18361f678b6f6ab82~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/student_edited.png",
      title: "No. of Students Enrolled",
      number: "100+",
    },
    {
      img: "https://static.wixstatic.com/media/cc6bf1_3915e9fe6ef64e5394ae7b046eed77d2~mv2.png/v1/fill/w_206,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rating.png",
      title: "Overall Rating",
      number: "4.1 / 5",
    },
  ];

  return (
    <div className="py-24 bg-cyan-100 grid grid-cols-1 sm:grid-cols-3 gap-y-20 w-full mt-20">
      {informationContent.map((item, index) => {
        return (
          <div key={index} className=" mx-auto flex flex-col items-center space-y-2">
            <div>
              <p className="text-black font-bold text-3xl text-center">{item.title}</p>
            </div>
            <div>
              <p className="text-black font-semibold text-3xl text-center">{item.number}</p>
            </div>
            <div>
              <img src={item.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Information;
