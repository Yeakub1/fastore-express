import React from 'react';
import burgers from '../../../../assets/images/burger-product.png'
import burger from "../../../../assets/images/burger.png";
import cake from "../../../../assets/images/cake.png";
import pizza from "../../../../assets/images/pizza.png";


const Products = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <div className="">
            <img src={burgers} alt="" draggable="false" />
          </div>
          <div className="p-10">
            <h1 className="text-5xl font-semibold ">ENJOY AUTHENTIC</h1>
            <p className="text-2xl text-[#EA6E19] mt-3 ">Delicious Products</p>
            <div className="mt-8">
              <div className="flex items-center gap-5">
                <img src={burger} className="h-24" alt="" draggable="false" />
                <div className="">
                  <h1>Smooth Meat Burger</h1>
                  <p>Beetroot And Datterini, Goat Cheese, Ricotta</p>
                </div>
                <button className="px-3 py-1 rounded-full outline hover:text-white hover:bg-[#8E350B]">
                  $29
                </button>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src={pizza} className="h-24" alt="" draggable="false" />
                <div className="">
                  <h1>Chicken Cheese Pizza</h1>
                  <p>Beetroot And Datterini, Goat Cheese, Ricotta</p>
                </div>
                <button className="px-3 py-1 rounded-full outline hover:text-white hover:bg-[#8E350B]">
                  $45
                </button>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <img src={cake} className="h-24" alt="" draggable="false" />
                <div className="">
                  <h1>Creamy cake</h1>
                  <p>Beetroot And Datterini, Goat Cheese, Ricotta</p>
                </div>
                <button className="px-3 py-1 rounded-full outline hover:text-white hover:bg-[#8E350B]">
                  $17
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Products;