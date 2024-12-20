import React from "react";
import styled, { keyframes } from "styled-components";
import SkillsSection from "../skills/SkillsSection";

const skills = [
    {
        name: "Java разработка",
        frameworks: [
            "Minecraft",
            "Telegram",
            "Discord"
        ]
    },
    {
        name: "Веб разработка",
        frameworks: [
            "React",
            "Spring"
        ]
    },
    {
        name: "Системное администрирование",
        frameworks: [
            "Linux",
            "Pterodactyl"
        ]
    }
];

const headerGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;

    color: #ffffff;

    animation: ${headerGradient} 5s ease infinite;
    background: linear-gradient(25deg, #252525, #272727, #303030, #353535);
    background-size: 200% 200%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 35px 0 rgba(0, 0, 0, 0.19);
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 125px;
    width: 100%;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 80px;
    }
`;

const Subtitle = styled.p`
    font-size: 32px;
    width: 100%;
    margin: 0 0 0 5px;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const HeaderSection = styled.div`
    width: 30%;
    height: 400px;
    text-align: center;
    align-content: center;
    vertical-align: middle;

    padding: 0;
    margin: 0 0 32px;
    
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin: 32px 0 16px;
    }
`;

const SkillsWrapper = styled.div`
  width: 60%;
  padding: 0;
    
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = ({ title, subtitle }) => (
    <HeaderContainer>
        <HeaderSection>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </HeaderSection>
        <SkillsWrapper>
            <SkillsSection skills={skills} />
        </SkillsWrapper>
    </HeaderContainer>
);

export default Header;
