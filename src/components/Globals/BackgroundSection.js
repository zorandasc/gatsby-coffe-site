import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  const backgroundFluidImageStack = [
    img,
    `linear-gradient(rgba(255, 158, 9, 0.5), rgba(255, 158, 9, 0.5))`,
  ].reverse()
  return (
    <BackgroundImage className={styleClass} fluid={backgroundFluidImageStack}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default-title",
  styleClass: "default-background",
}

export default BackgroundSection
