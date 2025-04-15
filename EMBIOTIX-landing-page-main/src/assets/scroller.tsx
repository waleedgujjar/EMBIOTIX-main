import * as React from "react";

const Scroller = ({ activeIndex, totalSlides, onClick }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={66} height={25} fill="none">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <circle
          key={index}
          cx={8 + index * 25} // Adjust spacing dynamically
          cy={12.5}
          r={7.5}
          fill={index === activeIndex ? "#E6FFCD" : "#fff"}
          fillOpacity={index === activeIndex ? 1 : 0.1}
          onClick={() => onClick(index)} // Click event to change slide
          style={{ cursor: "pointer" }} // Add hover effect
        />
      ))}
    </svg>
  );
};

export default Scroller;
