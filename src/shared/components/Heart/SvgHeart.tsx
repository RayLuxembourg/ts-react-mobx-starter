import React from "react"

const SvgHeart = React.forwardRef((props, ref: any) => (
  <svg ref={ref} width="1em" height="1em" viewBox="0 0 24 21" {...props}>
    <path
      d="M20.244.673C17.243-.87 13.72.332 12 3.343 10.28.331 6.758-.87 3.756.672.5 2.346-.907 6.612.61 10.2 2.734 15.22 12 20.571 12 20.571s9.266-5.35 11.39-10.371c1.517-3.588.109-7.854-3.146-9.527"
      fill="fill"
      fillRule="evenodd"
    />
  </svg>
))

export default SvgHeart
