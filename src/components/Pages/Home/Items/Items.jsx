import React from "react";
import burger from "../../../../assets/images/burger.png";
import cake from "../../../../assets/images/cake.png";
import pizza from "../../../../assets/images/pizza.png";

const Items = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-16 mb-20">
      <div className="grid md:grid-cols-3 gap-7">
        <div className="bg-[#8E350B] text-white flex items-center justify-between p-5 rounded-md">
          <div className="w-3/5">
            <h1 className="text-xl font-semibold">SPECIAL ZAMBO BURGER</h1>
            <p className="text-lg mt-3">Get 20% Flat Discount On This Week</p>
            <p className="text-lg mt-3">MAKE AN ORDER</p>
          </div>
          <div className="w-2/5">
            <img src={burger} alt="" draggable="false" />
          </div>
        </div>
        <div className="bg-[#EA6E19] text-white flex items-center justify-between p-5 rounded-md">
          <div className="w-3/5">
            <h1 className="text-xl font-semibold">SPECIAL ZAMBO CAKE</h1>
            <p className="text-lg mt-3">Get 20% Flat Discount On This Week</p>
            <p className="text-lg mt-3">MAKE AN ORDER</p>
          </div>
          <div className="w-2/5">
            <img src={cake} alt="" draggable="false" />
          </div>
        </div>
        <div className="bg-[#6B371C] text-white flex items-center justify-between p-5 rounded-md">
          <div className="w-3/5">
            <h1 className="text-xl font-semibold">SPECIAL ZAMBO PIZZA</h1>
            <p className="text-lg mt-3">Get 20% Flat Discount On This Week</p>
            <p className="text-lg mt-3">MAKE AN ORDER</p>
          </div>
          <div className="w-2/5">
            <img src={pizza} alt="" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
