import React from "react";
import Skills from "./Skills";
import styled from "styled-components";


const SkillsContainer = styled.div`
    align-content: center;
`;

const SkillsSection = ({ skills }) => (
    <SkillsContainer>
        <Skills skills={skills}/>
    </SkillsContainer>
);

export default SkillsSection;