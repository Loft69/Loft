import React from "react";
import styled from "styled-components";

const ContactBox = styled.div`
    width: 100%;
    display: flex;

    text-align: center;
    align-content: center;
    justify-content: center;
`;

const ContactInfo = styled.div`
    margin: 40px 32px;
    font-size: 36px;
    color: #ffffff;
    
    width: 300px;
    height: 100px;
    
    border-radius: 20px;
    background-color: #252525;
  
    align-content: center;
    transition: transform 0.3s;
    
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    
    a {
        color: #8e9eba;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
            color: #81afff;
        }
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

const Contacts = () => (
    <ContactBox>
        <ContactInfo>
            <a href="https://vk.com/etfyy">ВКонтакте</a>
        </ContactInfo>
        <ContactInfo>
            <a href="https://t.me/psfitjrnnemxjcufh">Телеграмм</a>
        </ContactInfo>
        <ContactInfo>
            <a href="https://github.com/Loft69">Github</a>
        </ContactInfo>
    </ContactBox>
);

export default Contacts;