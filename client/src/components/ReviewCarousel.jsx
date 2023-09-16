import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewCarousel = ({ reviews }) => {
    return (
      <div className="w-3/4 rounded-lg bg-white h-auto mx-auto">
        <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
          {reviews.map((review, index) => (
            <div key={index} className="flex justify-center items-center h-[300px] shadow-md"> {/* Adjust the height as needed */}
              <div className="w-full h-auto text-slate-700 rounded-none">
                <div className="flex w-full text-center items-center justify-center">
                <p className="flex w-1/2 text-lg font-semibold mb-4">"{review.text}"</p>
                </div>
                <div className="flex flex-col items-center text-center content-center justify-center gap-y-2">
                  <div className="w-10 h-10">
                    <img src={review.image} className="rounded-full w-10 h-10" />
                  </div>
                  <p className="font-medium">{review.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  
  

export default ReviewCarousel;