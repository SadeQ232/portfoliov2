import React from "react"
import PropTypes from "prop-types"
import { IconButton } from "../../commons/Button"
import { CardFooter } from "../../commons/Card"
import { CCard } from "./MiniProjectsCSS"
import { GatsbyImage,getImage } from "gatsby-plugin-image"

const MiniProject = ({ node,image}) => {
  let img = getImage(image)
  return (
    <CCard key={node.id}>
      <a
        name={node.title}
        aria-label={node.title}
        className="thumbnail-a"
        href={node.credential}
        target="__blank"
      >
        <GatsbyImage
                     alt={`Septian Librianto- ${node.title}`}
                     image={img} className={'gatsby-image-wrapper'}
        />
      </a>
      <CardFooter justify="space-between" align="center" nowrap>
        <span className={'small-project-title'}>{node.title}</span>
        <div>
          <IconButton
            label={`Show Credential - ${node.title}`}
            href={node.credential}
            icon="window-maximize"
          />
          {/* <IconButton
            label={`Source Code - ${node.title}`}
            href={node.github}
            Icon={"github"}
          /> */}
        </div>
      </CardFooter>
    </CCard>
  )
}

MiniProject.propTypes = {
  node: PropTypes.object.isRequired,
}

export default MiniProject
