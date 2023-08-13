import React from 'react';
import food1 from '../../../../../assets/images/food-1.jpg'
import food2 from '../../../../../assets/images/food-2.webp'
import food3 from '../../../../../assets/images/food-3.jpg'

const Blog = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto mt-20 mb-20">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Blog & Insights</h1>
          <p className="text-lg mt-4">
            It’s the story of an everlasting love affair, Dieter Delicioz and
            the Atlantic Ocean in the big air.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-10 ">
          <div className="">
            <img
              src={food1}
              alt=""
              className=" scale-95 hover:scale-100 ease-in duration-500 h-96 w-full"
            />
            <div className="p-2">
              <p className="text-[#8E350B] text-xl font-bold mt-4">FAST FOOD</p>
              <h1 className="text-2xl mt-4">
                Love and food: It is all about dinenos restaurant
              </h1>
            </div>
          </div>
          <div className="">
            <img
              src={food2}
              alt=""
              className=" scale-95 hover:scale-100 ease-in duration-500 h-96 w-full"
            />
            <div className="p-2">
              <p className="text-[#8E350B] text-xl font-bold mt-4">Dinner</p>
              <h1 className="text-2xl mt-4">
                Enjoy an exceptional journey of taste of joy.
              </h1>
            </div>
          </div>
          <div className="">
            <img
              src={food3}
              alt=""
              className="scale-95 hover:scale-100 ease-in duration-500 h-96 w-full"
            />
            <div className="p-2">
              <p className="text-[#8E350B] text-xl font-bold mt-4">
                Restaurant
              </p>
              <h1 className="text-2xl mt-4">
                The opportunity to work abroad is a prospect, one
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;