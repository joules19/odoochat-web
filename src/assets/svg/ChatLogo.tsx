import { styled } from 'styled-components';

function SvgComponent() {
  return (

    <StyledSVG
      width="30"
      height="30"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#4CAF50"
          d="M21 6c0-2.21-1.79-4-4-4H7C4.79 2 3 3.79 3 6v10c0 2.21 1.79 4 4 4h2v4l4-4h6c2.21 0 4-1.79 4-4V6z"
        ></path>
        <path
          fill="#fff"
          d="M7 15c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v6c0 1.66-1.34 3-3 3H9.5l-3 3v-3.5H7z"
        ></path>
      </g>
    </StyledSVG>)
};


const StyledSVG = styled.svg`
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default SvgComponent;
