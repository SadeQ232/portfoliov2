import styled from 'styled-components';

import { slideDownKeyframe, tooltipKeyframe } from '../CssAnimations';
import theme from "../../styles/theme";
const { colors } = theme;
export const HeroCardWrapper = styled.div`
  background: ${theme.colors.dark};
  position: relative;
  animation: ${slideDownKeyframe} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s
    forwards;
  
`;

export const CodeCardWrapper = styled.div`
  padding: 30px 35px;
  border-radius: 10px;
  width: 100%;
  background-color: ${theme.dark};
  box-shadow: ${theme.boxShadow};
  pre {
    font-size: 0.8rem;
    font-family: ${props => props.theme.fontFamily};
    color: white;
  }
`;

export const ColorPaletteWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  left: 30%;
  display: flex;
  justify-content: space-around;
  background-color: ${theme.dark};
  box-shadow: ${theme.boxShadow};
  padding: 8px;
  border-radius: 5px;

`;

export const ColorBoxWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin: 3px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
  &:active {
    transform: scale(0.7);
    transition: 0.1s;
  }
  &:before {
    pointer-events: none;
    position: absolute;
    text-align: center;
    content: 'Copied';
    opacity: 0;
    width: 50px;
    bottom: -130%;
    left: 50%;
    padding: 1px;
    border-radius: 10px;
    color: inherit;
    background: ${colors.dark};
   box-shadow: ${theme.boxShadow};
    font-size: 12px;
    transition: 0.3s;
    transform: translateX(-50%);
  }
  &.tooltip-animate:before {
    animation: ${tooltipKeyframe} 1s;
  }
`;