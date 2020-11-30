import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { useInView } from 'react-intersection-observer';

const IframeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  background-color: #C7D0FF;
  border-radius: 10px;

  ${props =>
    props.livedemo &&
    css`
      @media (max-width:768px) {
        min-height: 400px;
      }
    `}

 
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const LoaderWrapper = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10%;
  }

  .paths {
    > * {
      animation-name: pathAni;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      //animation-fill-mode: alternate;
      transform-origin: 50% 50%;
      transform: scale(0.8);
    }
    path:nth-child(1) {
      animation-delay: 0.2s;
    }
    path:nth-child(2) {
      animation-delay: 0.3s;
    }
    path:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @keyframes pathAni {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
const Loader = () => {
  let maskid = `mask-${Math.random()}`;
  let paintid = `paint-${Math.random()}`;
  return (
    <LoaderWrapper>
      <svg
        width="247"
        height="210"
        viewBox="0 0 247 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id={maskid}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="265"
          height="210"
        >
          <rect width="265" height="210" fill={`url(#${paintid})`} />
        </mask>
        <g className="paths" mask={`url(#${maskid})`}>
          <path d="M105.289 127.289V72.8672C96.9453 72.4922 88.9062 72.0469 81.1719 71.5312C73.4375 70.9688 66.3359 70.4531 59.8672 69.9844V85.7344C59.8672 92.0625 59.2578 97.5703 58.0391 102.258C56.8672 106.898 54.9922 110.766 52.4141 113.859C49.8359 116.953 46.5547 119.25 42.5703 120.75C38.5859 122.25 33.8047 123 28.2266 123C24.2891 123 20.6094 122.414 17.1875 121.242C13.7656 120.023 10.7891 118.312 8.25781 116.109C5.72656 113.906 3.73438 111.258 2.28125 108.164C0.875 105.07 0.171875 101.625 0.171875 97.8281C0.171875 93.7031 1.10938 89.6953 2.98438 85.8047C4.85938 81.8672 7.60156 78.3984 11.2109 75.3984C14.8672 72.3984 19.3672 69.9844 24.7109 68.1562C30.1016 66.3281 36.3125 65.4141 43.3438 65.4141H49.1094V53.6016C49.1094 49.8516 49.1797 46.2656 49.3203 42.8438C49.5078 39.375 49.9531 36.0234 50.6562 32.7891C51.3594 29.5547 52.4375 26.4141 53.8906 23.3672C55.3438 20.3203 57.3359 17.2969 59.8672 14.2969C57.2891 16.2187 54.4766 17.5078 51.4297 18.1641C48.4297 18.8203 45.3594 19.1484 42.2188 19.1484C40.0625 19.1484 37.8828 19.0547 35.6797 18.8672C33.5234 18.6328 31.3906 18.3984 29.2812 18.1641C27.1719 17.9297 25.1094 17.7188 23.0938 17.5312C21.125 17.2969 19.2266 17.1797 17.3984 17.1797C15.4297 17.1797 13.7188 17.4375 12.2656 17.9531C10.8125 18.4219 9.61719 19.1016 8.67969 19.9922C7.74219 20.8359 7.03906 21.8203 6.57031 22.9453C6.10156 24.0703 5.86719 25.2656 5.86719 26.5312C5.86719 27.7969 6.17188 29.0391 6.78125 30.2578C7.39062 31.4297 8.28125 32.5078 9.45312 33.4922C10.625 34.4297 12.0547 35.1797 13.7422 35.7422C15.4766 36.3047 17.4219 36.5859 19.5781 36.5859C21.5469 36.5859 23.3281 36.3984 24.9219 36.0234C26.5156 35.6484 27.875 35.2266 29 34.7578C30.3125 34.2422 31.4844 33.6094 32.5156 32.8594L33.9922 35.8828C32.7266 36.7266 31.3203 37.4531 29.7734 38.0625C28.4609 38.5781 26.9141 39.0703 25.1328 39.5391C23.3984 39.9609 21.5469 40.1719 19.5781 40.1719C16.8594 40.1719 14.3984 39.7969 12.1953 39.0469C9.99219 38.25 8.09375 37.1953 6.5 35.8828C4.95312 34.5234 3.73438 32.9297 2.84375 31.1016C2 29.2266 1.57812 27.2109 1.57812 25.0547C1.57812 22.5234 2.04688 20.2969 2.98438 18.375C3.92188 16.4062 5.1875 14.7422 6.78125 13.3828C8.42188 12.0234 10.3203 10.9922 12.4766 10.2891C14.6797 9.58594 17.0469 9.23438 19.5781 9.23438C22.1562 9.23438 24.7109 9.39844 27.2422 9.72656C29.7734 10.0547 32.2812 10.4297 34.7656 10.8516C37.2969 11.2266 39.7812 11.5781 42.2188 11.9062C44.7031 12.2344 47.1406 12.3984 49.5312 12.3984C51.9219 12.3984 54.2656 12.1875 56.5625 11.7656C58.8594 11.2969 61.1797 10.4531 63.5234 9.23438L66.4062 11.4141C65.3281 12.8203 64.3906 14.3906 63.5938 16.125C62.7969 17.8594 62.1172 19.9688 61.5547 22.4531C60.9922 24.9375 60.5703 27.9141 60.2891 31.3828C60.0078 34.8047 59.8672 38.9531 59.8672 43.8281V65.4141H105.289V45.2344C105.289 40.6875 105.406 36.6562 105.641 33.1406C105.875 29.5781 106.203 26.4141 106.625 23.6484C107.094 20.8359 107.656 18.3516 108.312 16.1953C108.969 13.9922 109.719 12 110.562 10.2188C111.453 8.4375 112.414 6.77344 113.445 5.22656C114.477 3.67969 115.578 2.13281 116.75 0.585938L119.633 2.76562C118.93 4.21875 118.297 5.8125 117.734 7.54688C117.219 9.23438 116.773 11.4375 116.398 14.1562C116.07 16.8281 115.812 20.2031 115.625 24.2812C115.438 28.3125 115.344 33.375 115.344 39.4688V65.4141H127.578L125.398 73.2891C123.758 73.2891 122.07 73.2891 120.336 73.2891C118.648 73.2891 116.984 73.2422 115.344 73.1484V125.883L105.289 127.289ZM29.6328 119.414C32.8672 119.414 35.7031 118.969 38.1406 118.078C40.5781 117.188 42.5938 115.711 44.1875 113.648C45.8281 111.586 47.0469 108.867 47.8438 105.492C48.6875 102.117 49.1094 97.9219 49.1094 92.9062V69.2812C47.6562 69.1875 46.2266 69.1172 44.8203 69.0703C43.4609 69.0234 42.2422 69 41.1641 69C37.0859 69 33.4766 69.4453 30.3359 70.3359C27.1953 71.1797 24.4531 72.3281 22.1094 73.7812C19.7656 75.2344 17.7734 76.9219 16.1328 78.8438C14.5391 80.7656 13.25 82.8047 12.2656 84.9609C11.2812 87.0703 10.5781 89.25 10.1562 91.5C9.73438 93.7031 9.52344 95.8125 9.52344 97.8281C9.52344 101.766 10.1328 105.117 11.3516 107.883C12.5703 110.602 14.1406 112.828 16.0625 114.562C17.9844 116.25 20.1406 117.492 22.5312 118.289C24.9219 119.039 27.2891 119.414 29.6328 119.414Z" fill="#F8E432" fill={`url(#${paintid})`}/>
          <path
            opacity="0.7"
            fill={`url(#${paintid})`}
          ></path>
        </g>
        <defs>
          <linearGradient
            id={paintid}
            x1="0"
            y1="0"
            x2="203.966"
            y2="257.386"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6A98F0" />
            <stop offset="1" stopColor="#4961DC" />
          </linearGradient>
        </defs>
      </svg>
    </LoaderWrapper>
  );
};

const IFrame = ({ src, livedemo }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleLoaded = () => {
    inView&& setIsLoading(false);
  };

  return (
    <IframeWrapper livedemo={livedemo} className="iframe-wrapper" ref={ref}>
      <iframe
          title={src}
          style={{ opacity: isLoading ? '0' : '1' }}
          src={inView ? '//codepen.io/anuraghazra/embed/agKJEd/?default-tab=result&theme-id=light' :''}
          onLoad={handleLoaded}
          frameBorder="0"
          allowFullScreen
      />
      {isLoading && <Loader />}
    </IframeWrapper>
  );
};

IFrame.defaultProps = {
  livedemo: false,
};
IFrame.propTypes = {
  src: PropTypes.string.isRequired,
  livedemo: PropTypes.bool,
};

export default IFrame;
