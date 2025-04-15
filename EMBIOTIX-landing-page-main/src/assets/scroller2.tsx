import * as React from "react";

const Scroller2 = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={70} height={30} fill="none">
      {[0, 1, 2].map((index) => (
        <circle
          key={index}
          cx={8 + index * 27} // Keeps circles moving
          cy={15}
          r={index === 1 ? 9 : 6} // Center circle is bigger
          fill={index === 1 ? "#E6FFCD" : "#fff"} // Center one is active
          fillOpacity={index === 1 ? 1 : 0.1}
          stroke={index === 1 ? "#A0D95B" : "none"} // Optional border for center
          strokeWidth={index === 1 ? 2 : 0}
          className="cursor-pointer"
          onClick={() => setActiveIndex(index)} // Allows movement
        />
      ))}
    </svg>
  );
};

export default Scroller2;
