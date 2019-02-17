import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(10%);
}
100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const CalendarContainer = styled.section`
    position: absolute;
    display: ${props => (props.display ? "box" : "none")};
    border: 1px solid #444;
    bottom: calc(3.5rem - 1px);
    right: -1px;
    width: 21.87rem;
    background: #202020;
    z-index: 150;
    animation: ${slideUp} 0.3s ease-out 1 forwards;
`;

export default CalendarContainer;