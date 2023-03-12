// import React from "react";

// function Home() {
//   return <div>Home Page


//   </div>


// }

// export default Home;
//----------------------------------------------------------
import ImageSlider, { Slide } from "react-auto-image-slider";



function Home() {
  return (
    <ImageSlider effectDelay={300} autoPlayDelay={1200}>
      <Slide>
        <img alt="img44" src="/images/image44.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="/images/image25.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="/images/image21.jpg" />
      </Slide>
      <Slide>
        <img alt="img3" src="/images/image22.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="/images/image23.jpg" />
      </Slide>
      <Slide>
        <img alt="img4" src="/images/image24.jpg" />
      </Slide>
      <Slide>
        <img alt="img5" src="/images/image26.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="/images/image27.jpg" />
      </Slide>
      <Slide>
        <img alt="img6" src="/images/image28.jpg" />
      </Slide>
      <Slide>
        <img alt="img7" src="/images/image11.jpg" />
      </Slide>
    </ImageSlider>
  );
}

export default Home;


//-------------------------------------------------------------

// import React, { useState } from 'react';
// import Slider from 'react-slick';

// const Home = () => {
//   const [images, setImages] = useState([
//     {
//       src: '../resources/image1.jpeg',
//       alt: 'Image 1',
//       caption: 'Caption 1',
//     },
//     {
//       src: 'https://example.com/image2.jpg',
//       alt: 'Image 2',
//       caption: 'Caption 2',
//     },
//     // ...more images
//   ]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image.src} alt={image.alt} />
//           <div className="caption">{image.caption}</div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default Home