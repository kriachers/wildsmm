import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={900}
    height={1600}
    viewBox="0 0 900 1600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="361" y="315" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="0" rx="0" ry="0" width="784" height="1817" />
  </ContentLoader>
)

export default MyLoader

