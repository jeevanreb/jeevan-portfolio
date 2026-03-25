"use client";

import About from "../About/About";
import Experience from "../Experience/Experience";
import PinGsap from "./PinGsap";

export default function PinComp() {
    return (
        <PinGsap>
            <section id="about-section">
                <About />
            </section>

            <section id="experience-section">
                <Experience />
            </section>
        </PinGsap>
    );
}