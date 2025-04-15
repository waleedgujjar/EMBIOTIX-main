import * as React from "react"
const ClientImage = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <circle cx={30} cy={30} r={29.5} stroke="#fff" />
  </svg>
)
export default ClientImage
