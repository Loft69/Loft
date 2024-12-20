import React from "react";
import styled, { keyframes } from "styled-components";

const shadowAnimation = keyframes`
    0% {
        box-shadow: 0 5px 10px rgba(255, 107, 107, 0.5),
        0 5px 15px rgba(251, 197, 49, 0.5),
        0 5px 25px rgba(116, 185, 255, 0.5);
    }
    50% {
        box-shadow: 0 5px 10px rgba(251, 197, 49, 0.5),
        0 5px 15px rgba(116, 185, 255, 0.5),
        0 5px 25px rgba(255, 107, 107, 0.5);
    }
    100% {
        box-shadow: 0 5px 10px rgba(116, 185, 255, 0.5),
        0 5px 15px rgba(255, 107, 107, 0.5),
        0 5px 25px rgba(251, 197, 49, 0.5);
    }
`;

const FrameworkContainer = styled.div`
    margin-top: 10px;
    padding: 10px;
    background-color: #4a4a4a;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    color: #ffffff;
    text-align: center;
    transition: transform 0.3s;
    
    &:hover {
        transform: translateY(-5px);
        animation: ${shadowAnimation} 3s ease infinite;
    }
`;

const FrameworkItem = styled.div`
    font-size: 20px;
    padding: 5px;
`;

const FrameworkList = ({ frameworks }) => (
    <section>
        {frameworks.map((framework, index) => (
            <FrameworkContainer>
                <FrameworkItem key={index}>{framework}</FrameworkItem>
            </FrameworkContainer>
        ))}
    </section>

);

export default FrameworkList;
