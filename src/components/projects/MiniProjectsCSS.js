import styled from "styled-components"

import { Card } from "../../commons/Card"

export const CreativeCodingWrapper = styled.section`
  width: 80%;
  min-height: calc(100vh - 125px);
  margin: 100px auto 50px;
  @media (max-width: 496px) {
    width: 100%;
  }
`

export const CCard = styled(Card)`
  justify-self: center;
  margin: 0;
  position: relative;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  min-width: unset;
  width: 100%;
  height: auto;
  max-width: 90%;
  transform: translateY(0px);
  transition: transform 0.2s ease;

  &:hover {
    transition: transform 0.2s ease;
    transform: translateY(-5px);
  }
  @media (max-width: 777px) {
    width: 80%;
  }
  h4 {
    font-weight: normal;
  }
  .gatsby-image-wrapper {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 209px;
    border-radius: 10px;
  }
  .thumbnail-a {
    width: 100%;
    height: 100%;
  }
`
