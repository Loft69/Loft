import React from "react";
import Header from "./components/header/Header";
import ContactSection from "./components/contacts/ContactSection";

const App = () => (
    <div style={{ backgroundColor: "#303030", minHeight: "100vh" }}>
        <main>
            <Header title="Loft" subtitle="Богдан Грибалев" />
            <ContactSection />
        </main>
    </div>
);

export default App;
