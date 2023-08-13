import React from 'react';
import image from '../../../../assets/images/img.webp'
import text from '../../../../assets/images/content.webp'
import tomato from '../../../../assets/images/image-11.webp'

const Banner = () => {
    return (
      <div className="mt-20 bg-black text-white">
        <div className="max-w-screen-xl px-5 mx-auto">
          <img
            src={tomato}
            className="h-60 md:h-full"
            alt=""
            draggable="false"
          />
          <div className="grid md:grid-cols-2 justify-between h-screen items-center md:-mt-80 -mt-20">
            <div className="">
              <img
                src={text}
                alt=""
                draggable="false"
              />
            </div>
            <div className="">
              <img
                src={image}
                alt=""
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;