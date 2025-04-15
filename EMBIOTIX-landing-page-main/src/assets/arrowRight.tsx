import * as React from "react"
const ArrowRight = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#89F436" rx={12} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 12h16m0 0-6-6m6 6-6 6"
    />
  </svg>
)
export default ArrowRight