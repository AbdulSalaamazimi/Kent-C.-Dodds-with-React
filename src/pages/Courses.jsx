import { useEffect } from "react";
import Hero from "../layout/Hero";
import Wheel from "../img/one_wheel.webp";
import DeveloperEdge from "../components/DeveloperEdge";
import EpicCourse from "../layout/EpicCourse";


function Courses() {
    useEffect(() => {
        document.title = "Courses by Kent C. Dodds"
    })

    return (
        <>
            <Hero className="mb-5"
                content={
                    <div className="flex flex-col flex-auto">
                        <h2 className="text-3xl md:text-4xl text-black">Level up as a developer.</h2>
                        <p className="text-3xl md:text-4xl text-gray-600 mt-5">Invest in yourself with a premium dev course.</p>
                    </div>
                }
                image={
                    <div className="col-span-full sm:mb-12">
                        <img src={Wheel} alt="Illustration of a onewheel" className="h-auto w-full object-contain max-h-[50vh]" />
                    </div>
                }  
            />
            <main className="relative !mx-[10-vw]">
            <DeveloperEdge />
            <EpicCourse className="mt-50" paragraph="Become a full stack web dev."/>

            </main>
        </>
    )
}

export default Courses;