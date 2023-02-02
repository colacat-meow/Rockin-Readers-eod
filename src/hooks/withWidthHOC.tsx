import React from "react"
import useWidth from "./useWidth"

const withWidthHOC = (
  Component: any
) => {
  return (props) => {
    const width = useWidth()
    return <Component width={width} {...props} />
  }
}

export default withWidthHOC