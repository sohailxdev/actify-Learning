import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonials_1 from "../../assets/Testimonials_1.avif";
import Testimonials_2 from "../../assets/Testimonials_2.avif";
import Testimonials_3 from "../../assets/Testimonials_3.avif";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonialImg = [{ img: Testimonials_2 }, { img: Testimonials_3 }];

  return (
    <div>
      <p className="text-center text-black text-4xl lg:text-5xl my-20">
        Hear what our learners say about us{" "}
      </p>
      <div className="h-full">
        <Carousel
          className="h-full w-11/12 lg:w-5/12 mx-auto "
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {/* <div className='bg-white flex justify-center h-96 object-cover' >
                    <img src={Testimonials_2} alt="" />
                </div>
                <div className='bg-white flex justify-center h-96 object-cover'>
                    <img src={Testimonials_2} alt="" />
                </div> */}

          {testimonialImg.map((item, index) => {
            return (
              <div key={index} className="bg-white flex justify-center h-full">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default Testimonials;
