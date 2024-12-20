import React from "react";
import styled from "styled-components";
import FrameworkList from "../FrameworkList";

const SkillBox = styled.div`
    background: #373737;
    border-radius: 10px;
    
    width: 300px;
    
    padding: 15px;
    margin: 10px;
    
    text-align: center;
    
    font-size: 20px;
    
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    h3 {
        margin: 0;
        padding-top: 6px;
        padding-bottom: 12px;
    }
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

const Skills = ({ skills }) => (
    <SkillsContainer>
        {skills.map((skill, index) => (
            <SkillBox key={index}>
                <h3>{skill.name}</h3>
                {skill.frameworks && <FrameworkList frameworks={skill.frameworks} />}
            </SkillBox>
        ))}
    </SkillsContainer>
);

export default Skills;
