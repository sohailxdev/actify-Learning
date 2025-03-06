// import React from "react";
// import Gallery_1 from "../assets/Gallery_1.webp";
// import Gallery_2 from "../assets/Gallery_2.webp";
// import Gallery_3 from "../assets/Gallery_3.webp";
// import Gallery_4 from "../assets/Gallery_4.webp";
// import Gallery_5 from "../assets/Gallery_5.webp";
// import Gallery_6 from "../assets/Gallery_6.webp";

// const Gallery = () => {
//   return (
//     <div className='w-full p-2 lg:p-0 lg:w-8/12 mx-auto'>
//         <p className='text-black text-5xl lg:text-6xl text-center my-12'>View Gallery</p>
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2'>
//         <div>
//             <img className='h-96 object-cover' src={Gallery_1} alt="" />
//         </div>
//         <div className='grid grid-cols-2 gap-2'>
//             <img className='w-full lg:w-80 h-48 lg:h-96 object-cover' src={Gallery_2} alt="" />
//             <img className='w-80 h-48 lg:h-96 object-cover' src={Gallery_3} alt="" />
//         </div>
//       </div>
//       <div className='lg:grid grid-cols-1 lg:grid-cols-2 hidden gap-2'>
//         <div className='grid grid-cols-2 gap-2'>
//             <img className='w-80 h-96 object-cover' src={Gallery_4} alt="" />
//             <img className='w-80 h-96 object-cover' src={Gallery_5} alt="" />
//         </div>
//         <div>
//             <img className='h-96 object-cover' src={Gallery_6} alt="" />
//         </div>
//       </div>
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:hidden'>
//         <div>
//             <img className='h-96 object-cover' src={Gallery_6} alt="" />
//         </div>
//         <div className='grid grid-cols-2 gap-2'>
//             <img className='w-80 h-48 lg:h-96 object-cover' src={Gallery_4} alt="" />
//             <img className='w-80 h-48 lg:h-96 object-cover' src={Gallery_5} alt="" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Gallery

// const Gallery = () => {
//   return (
//     <>
//       <p className="text-black text-5xl lg:text-6xl text-center mt-12 mb-5">
//         View Gallery
//       </p>
//       <div className="border-8 border-[#654321] w-11/12 mx-auto rounded-3xl bg-[#e6e2c9]">
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-10 py-4 gap-x-2 gap-y-2">
//           <div className="h-64 sm:h-80">
//             <img
//               className="h-full object-cover rounded-3xl"
//               src={Gallery_1}
//               alt=""
//             />
//           </div>
//           <div className="col-span-1 sm:col-span-2 h-64 sm:h-80">
//             <img
//               className="h-full object-cover rounded-3xl"
//               src={Gallery_1}
//               alt=""
//             />
//           </div>
//           <div className="h-64 sm:h-80 col-span-1 sm:col-span-3 lg:col-span-1">
//             <img
//               className="h-full object-cover rounded-3xl"
//               src={Gallery_1}
//               alt=""
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-10 py-4 gap-x-2 gap-y-2">
//           <div className="h-64 sm:h-80">
//             <img
//               className="h-full object-cover rounded-3xl"
//               src={Gallery_1}
//               alt=""
//             />
//           </div>
//           <div className="col-span-1 sm:col-span-2 h-64 sm:h-80">
//             <img
//               className="h-full object-cover rounded-3xl"
//               src={Gallery_1}
//               alt=""
//             />
//           </div>
//           <div className="h-64 sm:h-80 col-span-1 sm:col-span-3 lg:col-span-1">
//             <img
//               className="h-full object-cover rounded-3xl"
//               src={Gallery_1}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import Gallery_1 from "../assets/Gallery_1.webp";
import Gallery_2 from "../assets/Gallery_2.webp";
import Gallery_3 from "../assets/Gallery_3.webp";
import Gallery_4 from "../assets/Gallery_4.webp";
import Gallery_5 from "../assets/Gallery_5.webp";
import Gallery_6 from "../assets/Gallery_6.webp";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [Gallery_1, Gallery_2, Gallery_3, Gallery_4, Gallery_5, Gallery_6];

  return (
    <>
      <p className="text-black text-5xl lg:text-6xl text-center mt-12 mb-5">
        View Gallery
      </p>
      <div className="border-8 border-[#654321] w-11/12 mx-auto rounded-3xl bg-[#e6e2c9]">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-10 py-4 gap-x-2 gap-y-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`h-64 sm:h-80 ${
                index % 3 === 1 
                  ? 'col-span-1 sm:col-span-2' 
                  : index % 3 === 2 
                  ? 'col-span-1 sm:col-span-3 lg:col-span-1' 
                  : ''
              }`}
              onClick={() => openModal(image)}
            >
              <img
                className="h-full w-full object-cover rounded-3xl cursor-pointer"
                src={image}
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-[90vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute right-2 top-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

