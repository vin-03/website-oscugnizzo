import Container from "@/components/layout/Container/Container";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Specialties from "@/components/sections/Specialties/Specialies";

export default function () {
    return (
        <main>
            <Hero />
            <Container>
                <About />
            </Container>
            <Specialties />
        </main>
    );
}
