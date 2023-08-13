import React, { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import OrderTab from "../OrderTab/OrderTab";

const Allitems = () => {
    const [activeTab, setActiveTab] = useState(1);
    const categories = ["burger", "pizza", "cack"];
    const { category } = useParams();
     const [menu] = useMenu();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const burger = menu.filter((item) => item.category === "burger");
    const pizza = menu.filter((item) => item.category === "pizza");
    const cack = menu.filter((item) => item.category === "cack");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20 mb-20">
      <div className="text-center mb-9">
        <h1 className="text-5xl font-bold ">All Items</h1>
        <p className="mt-5 text-lg">choose your items and buy now food</p>
      </div>

      <div>
        <ul
          className="tabs text-xl font-semibold"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            burger
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            pizza
          </li>
          <li
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            cack
          </li>
        </ul>

        <div className="tab_content">
          {activeTab === 1 && (
            <div className="tab_panel">
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <OrderTab items={burger}></OrderTab>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="tab_panel">
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <OrderTab items={pizza}></OrderTab>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="tab_panel">
              <div className="tab_panel md:flex items-center gap-8 mt-6">
                <OrderTab items={cack}></OrderTab>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allitems;