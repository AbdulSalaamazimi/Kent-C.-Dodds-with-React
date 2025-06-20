import { useEffect } from "react";


function About() {
    useEffect(() => {
        document.title = "About Kent C. Dodds"
    });

    return (
        <>
        <h1>About page</h1>
        </>
    )
}

export default About;