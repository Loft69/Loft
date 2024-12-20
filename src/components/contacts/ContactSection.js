import React from "react";
import Contacts from "./Contacts";
import styled from "styled-components";

const ContactTitle = styled.div`
    text-align: center;
    margin-top: 30px;
    color: white;
    
    font-size: 50px;
`;

const ContactSection = () => (
    <section>
        <ContactTitle>Контакты</ContactTitle>
        <Contacts />
    </section>
);

export default ContactSection;