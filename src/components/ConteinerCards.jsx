"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

const ContainerCards = ({ items }) => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id='atuacao'
    className="w-full h-full bg-[linear-gradient(to_bottom,#D9D9D9_20%,#ffffff_20%,#ffffff_70%,#D9D9D9_70%)] pt-12 pb-10 px-4 grid gap-4 justify-center">
      <div

        style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap:'2rem', width:'100%' }}
      >
        {items.map((item, index) => (
          <Card key={index} description={item.description} imageSrc={item.src} title={item.title} />
        ))}
      </div>
        <div className="flex justify-between items-center w-full gap-7">
          <p className="hidden lg:flex w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button
          className="bg-[#003B6A] w-full text-white text-2xl rounded-3xl p-2"
          >Tire suas dúvidas</button>
        </div>
    </div>
  );
};

export default ContainerCards;
