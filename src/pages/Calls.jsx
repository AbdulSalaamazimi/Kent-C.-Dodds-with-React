import { useEffect } from "react";


function Calls() {
    useEffect(() => {
        document.title = "Call Kent Podcast"
    });


    return (
        <>
        <h1>Call page</h1>
        </>
    )
}

export default Calls;