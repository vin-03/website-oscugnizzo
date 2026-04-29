import Container from "@/components/layout/Container/Container";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";

export default function () {
    return (
        <main>
            <Hero />
            <Container>
                <About />
            </Container>
        </main>
    );
}
