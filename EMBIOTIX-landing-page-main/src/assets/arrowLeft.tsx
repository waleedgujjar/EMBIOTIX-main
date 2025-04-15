import * as React from "react"
const ArrowLeft = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={23} height={23} x={0.5} y={0.5} stroke="#fff" rx={11.5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 12H5m0 0 7 7m-7-7 7-7"
    />
  </svg>
)
export default ArrowLeft