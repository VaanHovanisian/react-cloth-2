import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={340}
    height={380}
    viewBox="0 0 340 380"
    backgroundColor="#c0bfbf"
    foregroundColor="#fafafa"
    {...props}
  >
    <rect x="47" y="19" rx="11" ry="11" width="270" height="243" /> 
    <rect x="51" y="276" rx="11" ry="11" width="265" height="26" /> 
    <rect x="225" y="319" rx="11" ry="11" width="92" height="48" /> 
    <rect x="53" y="321" rx="11" ry="11" width="92" height="48" />
  </ContentLoader>
)



