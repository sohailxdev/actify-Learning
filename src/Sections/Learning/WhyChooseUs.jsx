import React from "react";

const WhyChooseUs = () => {
  const chooseUsContent = [
    {
      img: "https://static.wixstatic.com/media/cc6bf1_faa696b6ba3548f0abff4af39dc0229d~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/project.png",
      title: "Relevant Project",
      desc: "Practical projects as per industry standards",
    },
    {
      img: "https://static.wixstatic.com/media/cc6bf1_a4a5c5b1afef40c3b1066b10e839c151~mv2.png/v1/fill/w_55,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/target-audience.png",
      title: "Personal attention",
      desc: "Small batches of 3-4 students",
    },
    {
      img: "https://static.wixstatic.com/media/cc6bf1_fc8786c6449d4de1b66e117ca1099f30~mv2.png/v1/fill/w_58,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/interview.png",
      title: "1:1 Session",
      desc: "Mock interview and resume building sessions",
    },
    {
      img: "https://static.wixstatic.com/media/cc6bf1_faa696b6ba3548f0abff4af39dc0229d~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/project.png",
      title: "Teaching Methodology",
      desc: "Everyday theory, Practical, DIY",
    },
    {
      img: "https://static.wixstatic.com/media/cc6bf1_25a92b7fbb0747c59436407606c51f11~mv2.png/v1/fill/w_64,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/online-lesson.png",
      title: "Learning Mode",
      desc: "Offline mode, Online mode, Hybrid mode",
    },
  ];

  return (
    <div className="mt-20 w-full mx-auto px-4">
      <div>
        <p  className="text-center text-black text-5xl font-semibold">Why Choose Us ?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {chooseUsContent.map((item, index) => {
        return (
          <div className="flex flex-col space-y-4">
            <div className="border-8 border-blue-800 rounded-full h-64 w-64 flex flex-col justify-center items-center space-y-8 mx-auto">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div>
                <p className="text-black text-xl text-center font-medium">{item.title}</p>
              </div>
            </div>
            <div>
              <p className="text-black text-xl text-center">{item.desc}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
