import React from 'react';

const SectionWithColors = ({children}) => {
    return (
<div >
        {/* <div className="w-full h-1/5 bg-[#D9D9D9]"></div>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-1/5 bg-[#D9D9D9]"></div>
          <div className="w-full h-full bg-white">
            
          </div>
          <div className="w-full h-1/5 bg-[#D9D9D9]"></div> */}
    
          {children}

        </div>
      // </div>
    );
  };

export default SectionWithColors;
